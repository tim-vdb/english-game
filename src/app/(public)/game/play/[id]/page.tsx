import { prisma } from '@/lib/prisma';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import { getUser } from '@/lib/auth-session';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const DEFAULT_ELEMENTS = [
    { name: 'header', description: 'Header element' },
    { name: 'footer', description: 'Footer element' },
    { name: 'body', description: 'Body element' },
    { name: 'form', description: 'Form element' },
    { name: 'logo', description: 'Logo element' },
];

export default async function GamePlayPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const user = await getUser();

    if (!user) {
        redirect(`/login?callbackUrl=/game/play/${id}`);
    }

    // Récupérer la session avec tous les éléments et leurs utilisateurs
    const gameSession = await prisma.gameSession.findUnique({
        where: { id },
        include: {
            team: {
                include: {
                    members: {
                        where: {
                            userId: user.id,
                        },
                    },
                },
            },
            elements: {
                include: {
                    user: true,
                },
            },
        }
    });

    if (!gameSession) {
        return notFound();
    }

    // Vérifier que l'utilisateur est membre de l'équipe
    if (gameSession.team.members.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h1>You are not a member of this team.</h1>
                <p>You can create a team to play the game or ask a game master to invite you to a team</p>
                <Button variant="outline" asChild>
                    <Link href="/game/team">Create a team</Link>
                </Button>
            </div>
        )

    }

    // Vérifier si l'utilisateur a déjà des éléments dans cette session
    const userElements = gameSession.elements.filter(el => el.userId === user.id);
    const userElementNames = userElements.map(el => el.name);

    // Créer les éléments par défaut s'ils n'existent pas encore
    if (userElements.length === 0) {
        await prisma.elements.createMany({
            data: DEFAULT_ELEMENTS.map(element => ({
                name: element.name,
                description: element.description,
                gameSessionId: id,
                userId: user.id,
                active: false, // Tous inactifs au début
            })),
            skipDuplicates: true, // Évite les erreurs si les éléments existent déjà
        });

        // Recharger la session pour avoir les nouveaux éléments
        const updatedSession = await prisma.gameSession.findUnique({
            where: { id },
            include: {
                team: true,
                elements: {
                    include: {
                        user: true,
                    },
                },
            }
        });

        if (updatedSession) {
            // Récupérer les éléments de l'utilisateur après création
            const newUserElements = updatedSession.elements.filter(el => el.userId === user.id);

            return (
                <div>
                    <h1>Game Session: {gameSession.team.name}</h1>
                    <p>Welcome! Your game elements have been initialized.</p>

                    <h2>Your Elements ({newUserElements.length})</h2>

                    <ul>
                        {newUserElements.map((element) => (
                            <li key={element.id}>
                                <strong>{element.name}</strong> - {element.active ? '✅ Active' : '❌ Inactive'}
                                {element.description && <span>: {element.description}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    // Récupérer tous les utilisateurs uniques qui ont des éléments dans cette session
    const usersInSession = await prisma.user.findMany({
        where: {
            elements: {
                some: {
                    gameSessionId: id,
                },
            },
        },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
        },
    });

    return (
        <div className='container mt-20'>
            <h1>Game Session: {gameSession.team.name}</h1>

            <h2>Your Elements ({userElements.length})</h2>
            <ul>
                {userElements.map((element) => (
                    <li key={element.id}>
                        <strong>{element.name}</strong> - {element.active ? '✅ Active' : '❌ Inactive'}
                        {element.description && <span>: {element.description}</span>}
                    </li>
                ))}
            </ul>
            {user.role === "GAME_MASTER" && (
                <>
                    <h2>Game Master</h2>
                    <p>You are the game master of this session.</p>
                    <h2>Users in this session ({usersInSession.length})</h2>
                    <ul>
                        {usersInSession.map((sessionUser) => (
                            <li key={sessionUser.id}>
                                {sessionUser.name} ({sessionUser.email})
                                {/* Afficher les éléments de cet utilisateur */}
                                <ul>
                                    {gameSession.elements
                                        .filter(el => el.userId === sessionUser.id)
                                        .map((element) => (
                                            <li key={element.id}>
                                                {element.name} - {element.active ? '✅ Active' : '❌ Inactive'}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <Card className='container border-dashed border-2 border-gray-300 rounded-xl p-4 bg-neutral-800'>
                <CardHeader>

                </CardHeader>
                <CardContent>

                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    )
}

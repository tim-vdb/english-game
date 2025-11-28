import { prisma } from '@/lib/prisma';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import { getUser } from '@/lib/auth-session';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import HeaderGame from '@/features/game/element/HeaderGame';
import BodyGame from '@/features/game/element/BodyGame';
import FooterGame from '@/features/game/element/FouterGame';
import FormGame from '@/features/game/element/FormGame';
import LogoGame from '@/features/game/element/LogoGame';
import GameSessionTableWrapper from '@/features/game/element/GameSessionTableWrapper';

const DEFAULT_ELEMENTS = [
    { name: 'header', description: 'The section located at the top of a web page. It generally contains the logo, the main navigation, and sometimes a search engine or shortcuts.' },
    { name: 'footer', description: 'Area located at the bottom of a web page. It often contains secondary links, legal information, contact details, credits or shortcuts.' },
    { name: 'body', description: 'The main content area of a web page. It contains all the sections and information that the user sees when browsing the page.' },
    { name: 'form', description: 'A set of fields allowing the user to enter information (text, options, checkboxes, buttons). Examples: contact form, login form, registration form.' },
    { name: 'logo', description: 'A graphic symbol representing the identity of a project, brand, or product. It is the main visual element for recognition.' },
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

        // // Recharger la session pour avoir les nouveaux éléments
        // const updatedSession = await prisma.gameSession.findUnique({
        //     where: { id },
        //     include: {
        //         team: true,
        //         elements: {
        //             include: {
        //                 user: true,
        //             },
        //         },
        //     }
        // });

        // if (updatedSession) {
        //     // Récupérer les éléments de l'utilisateur après création
        //     const newUserElements = updatedSession.elements.filter(el => el.userId === user.id);

        //     return (
        //         <div>
        //             <h1>Game Session: {gameSession.team.name}</h1>
        //             <p>Welcome! Your game elements have been initialized.</p>

        //             <h2>Your Elements ({newUserElements.length})</h2>

        //             <ul>
        //                 {newUserElements.map((element) => (
        //                     <li key={element.id}>
        //                         <strong>{element.name}</strong> - {element.active ? '✅ Active' : '❌ Inactive'}
        //                         {element.description && <span>: {element.description}</span>}
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     );
        // }
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
            role: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    // Récupérer les éléments actifs de l'utilisateur
    const activeElements = userElements.filter(el => el.active);

    // Fonction helper pour vérifier si un élément est actif
    const isElementActive = (elementName: string) => {
        return activeElements.some(el => el.name.toLowerCase() === elementName.toLowerCase());
    };

    return (
        <div className='container mt-20'>
            <h1>Game Session: {gameSession.team.name}</h1>

            <h2>Hey {user.name.split(' ')[0]}! You have unlocked {userElements.length} elements</h2>
            <GameSessionTableWrapper
                users={usersInSession}
                isLoggedIn={user.id}
                allElements={gameSession.elements}
                currentUserRole={user.role}
                currentUserId={user.id}
            />

            <Card className='container border-dashed border-4 border-neutral-700 rounded-xl p-0 bg-transparent gap-0'>
                {(isElementActive('header') || isElementActive('logo')) && (
                    <CardHeader className='p-0 gap-0'>
                        <HeaderGame
                            isHeaderElement={isElementActive('header')}
                            isLogoElement={isElementActive('logo')}
                        />
                    </CardHeader>
                )}
                <CardContent className='p-0'>
                    {isElementActive('body') && <BodyGame />}
                    {isElementActive('form') && <FormGame />}
                </CardContent>
                {isElementActive('footer') && (
                    <CardFooter className='p-0'>
                        <FooterGame />
                    </CardFooter>
                )}
            </Card>
        </div>
    )
}

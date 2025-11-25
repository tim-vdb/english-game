import { Card, CardTitle, CardHeader, CardDescription } from '@/components/ui/card';
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function getTeams() {
    const teams = await prisma.team.findMany({
        where: {
            public: true
        },
        include: {
            creator: {
                select: {
                    name: true,
                    email: true
                }
            }
        }
    });

    return (
        <div>
            <ul>
                {teams.map((team) => (
                    <Card key={team.id}>
                        <CardHeader>
                            <CardTitle>{team.name}</CardTitle>
                            <CardDescription>{team.creator.name} - {team.creator.email}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </ul>
        </div>

    );
}

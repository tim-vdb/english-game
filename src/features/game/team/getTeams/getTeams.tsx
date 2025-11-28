
import { getUser } from '@/lib/auth-session';
import { prisma } from '@/lib/prisma';
import { unauthorized } from 'next/navigation';
import ListTeamCard from './listTeamCard';
import { Team } from '@/generated/prisma_client';

interface TeamWithCreator extends Team {
    creator: { name: string; email: string };
    _count?: {
        members: number;
        gameSessions: number;
    };
}

export default async function getTeams() {
    const user = await getUser();
    if (!user) {
        return unauthorized();
    }
    const teams = await prisma.team.findMany({
        where: {
            OR: [
                {
                    members: {
                        some: {
                            userId: user.id
                        }
                    }
                },
                {
                    creatorId: user.id
                }
            ]
        },
        include: {
            creator: {
                select: {
                    name: true,
                    email: true
                }
            },
            _count: {
                select: {
                    members: true,
                    gameSessions: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    }) as TeamWithCreator[];

    if (teams.length === 0) {
        return (
            <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md text-center space-y-6">
                <h2 className="font-cooper text-3xl">No Teams Yet</h2>
                <p className="font-inter text-lg text-gray-600">
                    You haven't joined or created any teams yet.
                </p>
                <p className="font-inter text-sm text-gray-500">
                    Create your first team to start playing with friends!
                </p>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {teams.map((team) => (
                <ListTeamCard key={team.id} team={team} />
            ))}
        </div>
    );
}

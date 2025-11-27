
import { getUser } from '@/lib/auth-session';
import { prisma } from '@/lib/prisma';
import { unauthorized } from 'next/navigation';
import ListTeamCard from './listTeamCard';
import { Team } from '@/generated/prisma_client';

interface TeamWithCreator extends Team {
    creator: { name: string; email: string };
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
            }
        }
    }) as TeamWithCreator[];

    return (
        <div>
            <ul className='flex flex-col gap-4'>
                {teams.map((team) => (
                    <li key={team.id}>
                        <ListTeamCard team={team} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

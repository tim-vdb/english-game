'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/UserContext';
import { Team } from '@/generated/prisma_client';
import { Trash, Users, Play, Crown, ArrowRight, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import DeleteTeamAction from '../delete/team.action';

interface ListTeamCardProps {
    team: Team & {
        creator: { name: string; email: string };
        _count?: {
            members: number;
            gameSessions: number;
        };
    };
}

export default function ListTeamCard({ team }: ListTeamCardProps) {
    const user = useUser();
    const router = useRouter();

    if (!user) {
        return null;
    }

    const isCreator = user.id === team.creatorId;
    const membersCount = team._count?.members || 0;
    const sessionsCount = team._count?.gameSessions || 0;

    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this team?')) {
            try {
                const result = await DeleteTeamAction(team.id);
                if (result.success) {
                    toast.success("Team deleted successfully!");
                    router.refresh();
                } else {
                    toast.error(result.message || "Error deleting team");
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("Error deleting team");
            }
        }
    };

    return (
        <Card
            onClick={() => router.push(`/game/team/${team.id}`)}
            className="bg-white border-4 border-[#ec672a] rounded-3xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
        >
            <CardHeader className="p-0 pb-4 space-y-2">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <CardTitle className="font-cooper text-2xl text-[#7f2b13] group-hover:text-[#ec672a] transition-colors">
                            {team.name}
                        </CardTitle>
                        <CardDescription className="font-inter text-sm text-gray-600 mt-1 flex items-center gap-1">
                            <Crown className="h-3 w-3 text-[#ec672a]" />
                            Created by {team.creator.name}
                        </CardDescription>
                    </div>
                    {isCreator && user.role === "GAME_MASTER" && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className='opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-red-500 hover:bg-red-50 rounded-full'
                            onClick={handleDelete}
                        >
                            <Trash className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between text-sm font-inter">
                    <div className="flex items-center gap-2 text-[#ec672a]">
                        <Users className="h-4 w-4" />
                        <span>{membersCount} {membersCount === 1 ? 'member' : 'members'}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-xs font-inter text-gray-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                            {new Date(team.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#ec672a] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View details</span>
                        <ArrowRight className="h-3 w-3" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

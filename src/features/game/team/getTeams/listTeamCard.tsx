'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/UserContext';
import { Team } from '@/generated/prisma_client';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import DeleteTeamAction from '../delete/team.action';

interface ListTeamCardProps {
    team: Team & { creator: { name: string; email: string } };
}

export default function ListTeamCard({ team }: ListTeamCardProps) {
    const user = useUser();
    const router = useRouter();

    if (!user) {
        return null;
    }

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this team?')) {
            try {
                const result = await DeleteTeamAction(id);
                if (result.success) {
                    toast.success("Team deleted successfully!");
                    router.refresh();
                } else {
                    toast.error("Error deleting team");
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("Error deleting team");
            }
        }
    };

    return (
        <Card onClick={() => router.push(`/game/team/${team.id}`)} className="group cursor-pointer hover:bg-neutral-200 p-2 dark:hover:bg-neutral-800">
            <CardHeader className="flex items-center justify-between h-9">
                <CardTitle>{team.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                    Created by: {team.creator.name}
                    <Button
                        variant="ghost"
                        size="icon"
                        className='opacity-0 group-hover:multi-["duration-200;animate-fade-in-left"] cursor-pointer hover:text-red-500'
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(team.id);
                        }}
                    >
                        <Trash className="w-2 h-2" />
                    </Button>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

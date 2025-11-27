'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Trash2, Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { DeleteTeamMembersAction } from './teamMembers.action'
import { TeamMember } from '@/generated/prisma_client'


interface TeamMembersTableProps {
    teamMembers: (TeamMember & { user: { name: string; email: string } })[]
    isGameMaster: boolean
}

export default function TeamMembersTable({ teamMembers, isGameMaster }: TeamMembersTableProps) {
    const router = useRouter();

    const handleDelete = async (id: string, name: string) => {
        if (confirm(`Are you sure you want to delete the member "${name}" ?`)) {
            try {
                const result = await DeleteTeamMembersAction(id);
                if (result.success) {
                    toast.success("Member deleted successfully!");
                    router.refresh();
                } else {
                    toast.error("Error deleting member");
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("Error deleting member");
            }
        }
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="min-w-56">Nom</TableHead>
                    <TableHead className="min-w-56">Email</TableHead>
                    <TableHead className="min-w-56">Role</TableHead>
                    {isGameMaster && <TableHead className="min-w-32">Actions</TableHead>}
                </TableRow>
            </TableHeader>
            <TableBody>
                {teamMembers.map((teamMember) => (
                    <TableRow key={teamMember.user?.name}>
                        <TableCell className="font-medium">{teamMember.user.name}</TableCell>
                        <TableCell>{teamMember.user.email}</TableCell>
                        <TableCell>{teamMember.role}</TableCell>
                        {isGameMaster && (
                            <TableCell>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDelete(teamMember.id, teamMember.user.name || '')}
                                    className="p-2 cursor-pointer"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </TableCell>
                        )}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={11} className="text-end">Total de l'équipe {teamMembers.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

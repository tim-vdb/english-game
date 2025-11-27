"use server"
import { getUser } from "@/lib/auth-session";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect, unauthorized } from "next/navigation";

export default async function DeleteTeamAction(id: string) {
    const user = await getUser();
    if (!user) {
        return unauthorized();
    }

    const team = await prisma.team.findUnique({
        where: { creatorId: user.id, id: id }
    });
    if (!team) {
        return unauthorized();
    }

    const gameMasterMemberCount = await prisma.teamMember.count({
        where: {
            teamId: id,
            role: "GAME_MASTER"
        }
    });

    if (gameMasterMemberCount <= 1) {
        return {
            success: false,
            message: "Le game master ne peut pas se supprimer tant qu'il est le seul GAME_MASTER de l'équipe."
        };
    }

    // Supprimer la team et tous ses membres/invites en une transaction
    await prisma.$transaction(async (tx) => {
        // 1. Supprimer tous les membres de la team
        await tx.teamMember.deleteMany({
            where: {
                teamId: id,
                role: {
                    not: "GAME_MASTER"
                }
            }
        });

        // 2. Supprimer toutes les invitations de la team
        await tx.teamInvite.deleteMany({
            where: { teamId: id }
        });

        // 3. Supprimer la team
        await tx.team.delete({
            where: { id }
        });
    });



    revalidatePath('/game/team');
    return { success: true };
}

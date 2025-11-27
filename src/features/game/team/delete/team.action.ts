"use server"
import { getUser } from "@/lib/auth-session";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { unauthorized } from "next/navigation";

export default async function DeleteTeamAction(id: string) {
    const user = await getUser();
    if (!user) {
        return unauthorized();
    }

    const team = await prisma.team.findUnique({
        where: { creatorId: user.id, id: id },
        include: {
            members: {
                where: { userId: user.id, role: "GAME_MASTER" }
            }
        }
    });

    if (!team) {
        return {
            success: false,
            message: "You are not authorized to delete this team."
        };
    }

    // Vérifier si l'utilisateur est GAME_MASTER de l'équipe
    const isGameMaster = user.role === "GAME_MASTER";

    if (!isGameMaster) {
        return {
            success: false,
            message: "Only Game Masters can delete a team."
        };
    }

    const gameMasterMemberCount = await prisma.teamMember.count({
        where: {
            teamId: id,
        }
    });

    if (gameMasterMemberCount > 1) {
        return {
            success: false,
            message: "You cannot delete the team unless you are the last person"
        };
    }

    // Supprimer la team (les relations sont supprimées automatiquement grâce à onDelete: Cascade)
    await prisma.team.delete({
        where: { id }
    });

    revalidatePath('/game/team');
    return { success: true };
}

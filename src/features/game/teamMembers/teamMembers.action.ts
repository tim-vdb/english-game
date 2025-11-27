"use server";

import { prisma } from "@/lib/prisma";

export const GetTeamMembersAction = async (teamId: string) => {
  return await prisma.teamMember.findMany({
    where: {
      teamId: teamId
    },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    }
  });
};

export const DeleteTeamMembersAction = async (id: string) => {
  try {
    // Récupérer le membre de l'équipe pour obtenir userId et teamId
    const teamMember = await prisma.teamMember.findUnique({
      where: { id },
      select: {
        userId: true,
        teamId: true,
      },
    });

    if (!teamMember) {
      return { success: false, error: 'Team member not found' };
    }

    // Supprimer le membre et tous ses éléments dans une transaction
    await prisma.$transaction(async (tx) => {
      // 1. Récupérer toutes les GameSessions de l'équipe
      const gameSessions = await tx.gameSession.findMany({
        where: { teamId: teamMember.teamId },
        select: { id: true },
      });

      // 2. Supprimer tous les éléments de l'utilisateur dans ces GameSessions
      if (gameSessions.length > 0) {
        await tx.elements.deleteMany({
          where: {
            userId: teamMember.userId,
            gameSessionId: {
              in: gameSessions.map((gs) => gs.id),
            },
          },
        });
      }

      // 3. Supprimer le membre de l'équipe
      await tx.teamMember.delete({
        where: { id },
      });
    });

    return { success: true };
  } catch (error) {
    console.error('Error deleting team member:', error);
    return { success: false, error: 'Failed to delete team member' };
  }
};
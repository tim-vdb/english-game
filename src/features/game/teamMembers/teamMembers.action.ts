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
    const deleted = await prisma.teamMember.delete({
      where: { id: id },
    });
    return { success: true, deleted };
  } catch (error) {
    console.error('Error deleting team member:', error);
    return { success: false, error: 'Failed to delete team member' };
  }
};
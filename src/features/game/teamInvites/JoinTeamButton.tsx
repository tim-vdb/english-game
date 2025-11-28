"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth-session";
import { Role } from "@/generated/prisma_client";

export default async function JoinTeamButton({
    token,
    role,
}: {
    token: string;
    role: Role;
}) {
    const user = await getUser();

    if (!user) {
        redirect(`/login?callbackUrl=/invite/${token}`);
    }

    async function joinTeam() {
        "use server";

        const invite = await prisma.teamInvite.findUnique({
            where: { token },
        });

        if (!invite || invite.used || invite.expiresAt < new Date()) {
            throw new Error("Invalid or expired link");
        }

        // Créer le membre
        await prisma.teamMember.create({
            data: {
                teamId: invite.teamId,
                userId: user!.id,
                role: role,
            },
        });

        // Marquer le lien comme utilisé
        await prisma.teamInvite.update({
            where: { id: invite.id },
            data: { used: true },
        });

        redirect(`/game/team/${invite.teamId}`);
    }

    return (
        <form action={joinTeam}>
            <button type="submit" className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
                Join the team
            </button>
        </form>
    );
}
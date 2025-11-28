import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth-session";
import JoinTeamButton from "@/features/game/teamInvites/JoinTeamButton";
import { Role } from "@/generated/prisma_client";

export default async function InvitePage({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;
    const user = await getUser();

    if (!user) {
        redirect(`/login?callbackUrl=${process.env.BETTER_AUTH_URL}/invite/${token}`);
    }

    const invite = await prisma.teamInvite.findUnique({
        where: { token },
        include: { team: true },
    });

    if (!invite || invite.expiresAt < new Date() || invite.used) {
        return <div className="min-h-screen flex items-center justify-center">Invalid or expired invitation link</div>;
    }

    // Vérifier si l'utilisateur fait déjà partie de l'équipe
    const alreadyMember = await prisma.teamMember.findFirst({
        where: {
            teamId: invite.teamId,
            userId: user.id,
        },
    });

    if (alreadyMember) {
        return <div>You are already a member of the team {invite.team.name}</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center max-w-md mx-auto mt-20 p-8 rounded-lg">
            <h1 className="text-2xl font-bold">Join the team</h1>
            <p className="mt-4">
                You have been invited to join <strong>{invite.team.name}</strong>.
            </p>

            <JoinTeamButton token={token} role={invite.role as Role} />
        </div>
    );
}
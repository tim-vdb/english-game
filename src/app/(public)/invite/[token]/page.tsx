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
        return <div>Lien d'invitation invalide ou expiré</div>;
    }

    // Vérifier si l'utilisateur fait déjà partie de l'équipe
    const alreadyMember = await prisma.teamMember.findFirst({
        where: {
            teamId: invite.teamId,
            userId: user.id,
        },
    });

    if (alreadyMember) {
        return <div>Vous faites déjà partie de l'équipe {invite.team.name}</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg">
            <h1 className="text-2xl font-bold">Rejoindre l'équipe</h1>
            <p className="mt-4">
                Vous avez été invité à rejoindre <strong>{invite.team.name}</strong>.
            </p>

            <JoinTeamButton token={token} role={invite.role as Role} />
        </div>
    );
}
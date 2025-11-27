import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import TeamMembersTable from "@/features/game/teamMembers/TeamMembersTable";
import { GetTeamMembersAction } from "@/features/game/teamMembers/teamMembers.action";
import { Button } from "@/components/ui/button";
import { createTeamInvite } from "@/features/game/teamInvites/create/createInvite";
import CreateButtonInvite from "@/features/game/teamInvites/create/CreateButtonInvite";
import { getUser } from "@/lib/auth-session";

export default async function TeamPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const user = await getUser();
    console.log("user", user);
    if (!user) {
        return redirect(`/login?callbackUrl=${process.env.BETTER_AUTH_URL}/game/team/${id}`);
    }

    const isGameMaster = user.role === "GAME_MASTER";

    const team = await prisma.team.findUnique({
        where: { id },
        include: {
            creator: true
        }
    });
    if (!team) {
        return notFound();
    }
    const teamMembers = await GetTeamMembersAction(id);

    return (
        <div className="container">
            <h1>{team.name}</h1>
            <p>{team.creator?.name}</p>
            <CreateButtonInvite teamId={id} />
            {teamMembers.length > 0 ? (
                <>
                    <h2 className="text-lg font-bold mt-4">Team Members</h2>
                    <TeamMembersTable teamMembers={teamMembers} isGameMaster={isGameMaster} />
                </>
            ) : (
                <p>No team members found</p>
            )}
        </div>
    )
}

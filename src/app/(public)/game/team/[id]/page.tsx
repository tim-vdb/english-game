import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import TeamMembersTable from "@/features/game/teamMembers/TeamMembersTable";
import { GetTeamMembersAction } from "@/features/game/teamMembers/teamMembers.action";
import CreateButtonInvite from "@/features/game/teamInvites/create/CreateButtonInvite";
import { getUser } from "@/lib/auth-session";
import { Users, Crown, Link2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function TeamPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const user = await getUser();
    if (!user) {
        return redirect(`/login?callbackUrl=${process.env.BETTER_AUTH_URL}/game/team/${id}`);
    }

    const isGameMaster = user.role === "GAME_MASTER";

    const team = await prisma.team.findUnique({
        where: { id },
        include: {
            creator: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            },
            gameSessions: {
                include: {
                    elements: {
                        select: {
                            id: true,
                            userId: true,
                        }
                    }
                }
            },
            members: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            }
        }
    });

    if (!team) {
        return notFound();
    }

    const teamMembers = await GetTeamMembersAction(id);
    const uniquePlayersInSessions = new Set(
        team.gameSessions.flatMap(session =>
            session.elements.map(el => el.userId)
        )
    );

    return (
        <main className="bg-[#f3f2e3] text-[#7f2b13] min-h-screen">
            <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-12">

                {/* ---------------- BACK BUTTON ---------------- */}
                <Link href="/game/team" className="inline-flex items-center gap-2 text-[#ec672a] hover:text-[#e85a2d] transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="font-inter text-sm">Back to teams</span>
                </Link>

                {/* ---------------- HERO ---------------- */}
                <div className="text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                        Team Details
                    </p>

                    <h1 className="font-cooper text-6xl leading-tight">
                        {team.name}
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Crown className="h-4 w-4 text-[#ec672a]" />
                        <p className="font-inter text-sm">
                            Created by <span className="font-semibold text-[#7f2b13]">{team.creator?.name}</span>
                        </p>
                    </div>
                </div>

                {/* ---------------- INVITE SECTION ---------------- */}
                {isGameMaster && (
                    <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-8 shadow-md space-y-6">
                        <div className="flex items-center gap-2">
                            <Link2 className="h-6 w-6 text-[#ec672a]" />
                            <h2 className="font-cooper text-3xl">Invite Members</h2>
                        </div>
                        <p className="font-inter text-sm text-gray-600">
                            Create an invitation link to share with new team members.
                        </p>
                        <CreateButtonInvite teamId={id} />
                    </div>
                )}

                {/* ---------------- TEAM MEMBERS ---------------- */}
                <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-8 shadow-md space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Users className="h-6 w-6 text-[#ec672a]" />
                            <h2 className="font-cooper text-3xl">Team Members</h2>
                        </div>
                        {teamMembers.length > 0 && (
                            <span className="font-inter text-sm text-gray-600">
                                {teamMembers.length} member{teamMembers.length > 1 ? 's' : ''}
                            </span>
                        )}
                    </div>

                    {teamMembers.length > 0 ? (
                        <TeamMembersTable teamMembers={teamMembers} isGameMaster={isGameMaster} />
                    ) : (
                        <div className="text-center py-12">
                            <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <p className="font-inter text-lg text-gray-600">No team members found</p>
                            {isGameMaster && (
                                <p className="font-inter text-sm text-gray-500 mt-2">
                                    Create an invite link to add members to your team.
                                </p>
                            )}
                        </div>
                    )}
                </div>

            </section>
        </main>
    );
}

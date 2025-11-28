import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/auth-session";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Play, Users, Calendar, Trophy, ArrowRight, Sparkles, Clock } from "lucide-react";

export default async function GamePlayPage() {
    const user = await getUser();
    if (!user) {
        return redirect(`/login?callbackUrl=${process.env.BETTER_AUTH_URL}/game/play`);
    }

    const teams = await prisma.team.findMany({
        where: {
            members: {
                some: {
                    userId: user.id,
                },
            },
        },
        include: {
            gameSessions: {
                include: {
                    elements: {
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

    if (teams.length === 0) {
        return (
            <main className="bg-[#f3f2e3] text-[#7f2b13] min-h-screen">
                <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
                    <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md text-center space-y-6">
                        <h1 className="font-cooper text-4xl">No Team Found</h1>
                        <p className="font-inter text-lg">
                            You are not a member of any team yet.
                        </p>
                        <p className="font-inter text-sm text-gray-600">
                            Create a team to start playing or ask a game master to invite you to a team.
                        </p>
                        <Button variant="outline" size="lg" asChild className="mt-4">
                            <Link href="/game/team">Create a team</Link>
                        </Button>
                    </div>
                </div>
            </main>
        );
    }

    // Aplatir toutes les sessions de jeu de toutes les équipes avec plus d'infos
    const allGameSessions = teams.flatMap(team =>
        team.gameSessions.map(gameSession => {
            const uniqueUsers = new Set(gameSession.elements.map(el => el.userId));
            const activeElements = gameSession.elements.filter(el => el.active).length;
            const totalElements = gameSession.elements.length;

            return {
                ...gameSession,
                teamName: team.name,
                teamId: team.id,
                playersCount: uniqueUsers.size,
                activeElementsCount: activeElements,
                totalElementsCount: totalElements,
            };
        })
    );

    if (allGameSessions.length === 0) {
        return (
            <main className="bg-[#f3f2e3] text-[#7f2b13] min-h-screen">
                <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-12">
                    <div className="text-center space-y-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                            Ready to Play?
                        </p>
                        <h1 className="font-cooper text-6xl leading-tight">
                            No Game Sessions Yet
                        </h1>
                        <p className="font-inter text-lg max-w-3xl mx-auto leading-relaxed">
                            You are a member of {teams.length} team(s), but no game sessions have been created yet.
                        </p>
                    </div>

                    <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md space-y-8">
                        <h2 className="font-cooper text-3xl flex items-center gap-2">
                            <Users className="h-6 w-6 text-[#ec672a]" />
                            Your Teams
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {teams.map((team) => (
                                <div key={team.id} className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm">
                                    <h3 className="font-cooper text-xl text-[#ec672a] mb-2">{team.name}</h3>
                                    <p className="font-inter text-sm text-gray-600">
                                        {team.members.length} member{team.members.length > 1 ? 's' : ''}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="font-inter text-sm text-gray-600 mt-4">
                            Ask a game master to create a game session for your team.
                        </p>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="bg-[#f3f2e3] text-[#7f2b13] min-h-screen">
            <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-20">

                {/* ---------------- HERO ---------------- */}
                <div className="text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                        Game Sessions
                    </p>

                    <h1 className="font-cooper text-6xl leading-tight">
                        Choose Your Session
                    </h1>

                    <p className="font-inter text-lg max-w-3xl mx-auto leading-relaxed">
                        Select a game session to start building your wireframe.
                        <br />
                        Each session is a new opportunity to become the best head chef of UX design.
                    </p>
                </div>

                {/* ---------------- QUICK INFO CARDS ---------------- */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border-4 border-[#ec672a] rounded-2xl p-6 shadow-md text-center space-y-3">
                        <Clock className="mx-auto h-10 w-10 text-[#ec672a]" />
                        <p className="font-cooper text-2xl">30 minutes</p>
                        <p className="font-inter text-sm">Quick and intense challenge</p>
                    </div>

                    <div className="bg-white border-4 border-[#ec672a] rounded-2xl p-6 shadow-md text-center space-y-3">
                        <Trophy className="mx-auto h-10 w-10 text-[#ec672a]" />
                        <p className="font-cooper text-2xl">5 elements</p>
                        <p className="font-inter text-sm">Complete your wireframe</p>
                        <p className="font-inter text-sm">More coming soon !</p>
                    </div>

                    <div className="bg-white border-4 border-[#ec672a] rounded-2xl p-6 shadow-md text-center space-y-3">
                        <Sparkles className="mx-auto h-10 w-10 text-[#ec672a]" />
                        <p className="font-cooper text-2xl">Learn & Play</p>
                        <p className="font-inter text-sm">Master web design terms</p>
                    </div>
                </div>

                {/* ---------------- GAME SESSIONS ---------------- */}
                <div className="space-y-6">
                    <h2 className="font-cooper text-3xl flex items-center gap-2">
                        <Play className="h-7 w-7 text-[#ec672a]" />
                        Available Sessions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {allGameSessions.map((gameSession) => (
                            <Card
                                key={gameSession.id}
                                className="bg-white border-4 border-[#ec672a] rounded-3xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                            >
                                <Link href={`/game/play/${gameSession.id}`} className="space-y-4">
                                    <CardHeader className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="font-cooper text-2xl text-[#7f2b13] group-hover:text-[#ec672a] transition-colors">
                                                {gameSession.teamName}
                                            </CardTitle>
                                            <ArrowRight className="h-5 w-5 text-[#ec672a] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <CardDescription className="font-inter text-sm">
                                            Team created on {new Date(gameSession.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-[#ec672a]" />
                                                <span className="font-inter">{gameSession.playersCount} player{gameSession.playersCount > 1 ? 's' : ''}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Trophy className="h-4 w-4 text-[#ec672a]" />
                                                <span className="font-inter">{gameSession.activeElementsCount} / {gameSession.totalElementsCount} element{gameSession.activeElementsCount > 1 ? "s" : ""} found</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className="w-full bg-[#ec672a] hover:bg-[#e85a2d] text-white cursor-pointer font-cooper text-lg"
                                            size="lg"
                                        >
                                            Join Session
                                        </Button>
                                    </CardFooter>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* ---------------- HELPFUL LINKS ---------------- */}
                <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md space-y-6">
                    <h2 className="font-cooper text-3xl flex items-center gap-2">
                        <Sparkles className="h-7 w-7 text-[#ec672a]" />
                        Need Help?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/game/rules" className="p-4 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 hover:border-[#ec672a] transition-colors">
                            <h3 className="font-cooper text-xl text-[#ec672a] mb-2">Game Rules</h3>
                            <p className="font-inter text-sm text-gray-600">
                                Learn how to play Chef's Blueprint
                            </p>
                        </Link>
                        <Link href="/game/docs" className="p-4 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 hover:border-[#ec672a] transition-colors">
                            <h3 className="font-cooper text-xl text-[#ec672a] mb-2">Glossary</h3>
                            <p className="font-inter text-sm text-gray-600">
                                Master the vocabulary of web design
                            </p>
                        </Link>
                    </div>
                </div>

            </section>
        </main>
    );
}

import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/auth-session";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

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
            gameSessions: true,
        }
    });
    if (teams.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h1>You are not a member of any team.</h1>
                <p>You can create a team to play the game or ask a game master to invite you to a team</p>
                <Button variant="outline" asChild>
                    <Link href="/game/team">Create a team</Link>
                </Button>
            </div>
        )
    }


    // Aplatir toutes les sessions de jeu de toutes les équipes
    const allGameSessions = teams.flatMap(team =>
        team.gameSessions.map(gameSession => ({
            ...gameSession,
            teamName: team.name,
            teamId: team.id,
        }))
    );

    if (allGameSessions.length === 0) {
        return (
            <div>
                <h1>No game sessions found</h1>
                <p>You are a member of {teams.length} team(s), but no game sessions have been created yet.</p>
                <p>Ask a game master to create a game session for your team.</p>
                <div>
                    <h2>Your teams:</h2>
                    <ul>
                        {teams.map((team) => (
                            <li key={team.id}>{team.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Play the game</h1>
            <p>Available game sessions:</p>
            <ul>
                {allGameSessions.map((gameSession) => (
                    <li key={gameSession.id}>
                        <Link href={`/game/play/${gameSession.id}`}>
                            {gameSession.teamName} - Session {gameSession.id.slice(0, 8)}...
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

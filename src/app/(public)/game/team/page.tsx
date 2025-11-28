import CreateTeam from '@/features/game/team/create/components/CreateTeam'
import GetTeams from '@/features/game/team/getTeams/getTeams'
import { Users, Plus } from 'lucide-react'

export default function page() {
    return (
        <main className="bg-[#f3f2e3] text-[#7f2b13] min-h-screen">
            <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-10">
                {/* ---------------- HERO ---------------- */}
                <div className="text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                        Your Teams
                    </p>
                    <h1 className="font-cooper text-5xl leading-tight">
                        Manage Your Teams
                    </h1>
                    <p className="font-inter text-lg max-w-3xl mx-auto leading-relaxed">
                        Create teams, invite players, and start your wireframe adventure together.
                    </p>
                </div>

                {/* ---------------- CREATE TEAM BUTTON ---------------- */}
                <div className="flex justify-center">
                    <CreateTeam />
                </div>

                {/* ---------------- TEAMS LIST ---------------- */}
                <div className="space-y-6">
                    <GetTeams />
                </div>
            </section>
        </main>
    )
}

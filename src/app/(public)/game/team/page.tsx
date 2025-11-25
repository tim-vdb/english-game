import CreateTeam from '@/features/game/team/create/components/CreateTeam'
import GetTeams from '@/features/game/team/getTeams/getTeams'

export default function page() {
    return (
        <div className='container'>
            <h1>Teams</h1>
            <CreateTeam />
            <GetTeams />
        </div>
    )
}

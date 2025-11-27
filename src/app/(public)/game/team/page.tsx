import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import CreateTeam from '@/features/game/team/create/components/CreateTeam'
import GetTeams from '@/features/game/team/getTeams/getTeams'
import { Plus } from 'lucide-react'

export default function page() {
    return (
        <div className='container'>
            <h1>Teams</h1>
            <Card className='p-0 shadow-none'>
                <CardHeader className='flex justify-end items-center p-4 border-b-2'>
                    <CreateTeam />
                </CardHeader>
                <CardContent className='p-4 pt-0'>
                    <h2 className='text-2xl font-bold mt-0'>Team List</h2>
                    <GetTeams />
                </CardContent>
            </Card>
        </div>
    )
}

"use server"

import { prisma } from '@/lib/prisma'
import { actionClient } from '@/lib/safe-action-client'
import { TeamsSchema } from './teams.schema'
import { getUser } from '@/lib/auth-session'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export const TeamsSafeAction = actionClient
    .inputSchema(TeamsSchema)
    .action(async ({ parsedInput: input }) => {

        const user = await getUser();

        if (!user) {
            // throw new SafeError("Vous devez être connecté pour créer un événement");
            redirect('/login')
        }

        const team = await prisma.team.create({
            data: {
                name: input.name,
                public: input.public,
                creatorId: user.id,
            }
        })

        console.log(team)

        // Revalider les pages qui affichent les événements
        revalidatePath('/game/team/')
        revalidatePath('/')

        return team
    })

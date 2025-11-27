"use server"

import { prisma } from '@/lib/prisma'
import { actionClient, SafeError } from '@/lib/safe-action-client'
import { TeamsSchema } from './teams.schema'
import { getUser } from '@/lib/auth-session'
import { redirect, unauthorized } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Role } from '@/generated/prisma_client'

export const TeamsSafeAction = actionClient
    .inputSchema(TeamsSchema)
    .action(async ({ parsedInput: input }) => {

        const user = await getUser();

        if (!user) {
            return unauthorized();
        }

        const existingTeam = await prisma.team.findFirst({
            where: {
                name: input.name,
                creatorId: user.id
            }
        });
        if (existingTeam) {
            throw new SafeError("Team already exists")
        }

        // Créer la team, ajouter l'utilisateur comme membre avec rôle GAME_MASTER, et mettre à jour le rôle de l'utilisateur en une seule transaction
        const team = await prisma.$transaction(async (tx) => {
            // 1. Créer la team avec le membre (relation imbriquée)
            const newTeam = await tx.team.create({
                data: {
                    name: input.name,
                    creatorId: user.id,
                    members: {
                        create: {
                            userId: user.id,
                            role: Role.GAME_MASTER
                        }
                    }
                },
                include: {
                    members: true
                }
            })

            // 2. Mettre à jour le rôle de l'utilisateur en GAME_MASTER
            await tx.user.update({
                where: {
                    id: user.id
                },
                data: {
                    role: Role.GAME_MASTER
                }
            })

            return newTeam
        })

        console.log(team)

        // Revalider les pages qui affichent les teams
        revalidatePath('/game/team/')
        revalidatePath('/')

        return team
    })

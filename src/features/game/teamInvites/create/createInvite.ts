"use server"

import { randomBytes } from "crypto"
import { prisma } from "@/lib/prisma"
import { Role } from "@/generated/prisma_client"
import { getUser } from "@/lib/auth-session"

type CreateInviteParams = {
    teamId: string
    role?: string
    expiresInDays?: number
}

export async function createTeamInvite({
    teamId,
    role = "GAME_MASTER",
    expiresInDays = 7,
}: CreateInviteParams) {
    const user = await getUser();

    if (!user) {
        throw new Error("Unauthorized")
    }

    const membership = await prisma.teamMember.findFirst({
        where: {
            teamId,
            userId: user.id,
            role: role as Role,
        },
    })

    if (!membership) {
        throw new Error("Forbidden")
    }

    const token = randomBytes(32).toString("hex")

    const invite = await prisma.teamInvite.create({
        data: {
            teamId,
            token,
            role: "MEMBER",
            used: false,
            expiresAt: new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000),
            createdBy: user.id,
        },
    })

    const inviteLink = `${process.env.BETTER_AUTH_URL}/invite/${token}`
    console.log(inviteLink)
    return { inviteLink, invite }
}


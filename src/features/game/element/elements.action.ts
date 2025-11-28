"use server"

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-session";
import { revalidatePath } from "next/cache";

export async function ToggleElementAction(elementId: string) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "You must be logged in to modify an element."
        };
    }

    // Vérifier que l'utilisateur est GAME_MASTER
    if (user.role !== "GAME_MASTER") {
        return {
            success: false,
            message: "Only Game Masters can modify elements."
        };
    }

    try {
        // Récupérer l'élément actuel
        const element = await prisma.elements.findUnique({
            where: { id: elementId },
            include: {
                gameSession: true
            }
        });

        if (!element) {
            return {
                success: false,
                message: "Element not found."
            };
        }

        // Toggle l'état actif
        const updatedElement = await prisma.elements.update({
            where: { id: elementId },
            data: {
                active: !element.active
            }
        });

        // Revalider la page
        revalidatePath(`/game/play/${element.gameSessionId}`);

        return {
            success: true,
            element: updatedElement
        };
    } catch (error) {
        console.error('Error toggling element:', error);
        return {
            success: false,
            message: "Error while modifying the element."
        };
    }
}


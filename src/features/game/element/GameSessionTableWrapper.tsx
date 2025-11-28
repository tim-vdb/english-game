"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import GameSessionTable from "./GameSessionTable"

interface User {
    id: string
    email: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    image: string | null
}

interface GameElement {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    active: boolean
    gameSessionId: string
    userId: string
    user: User
}

interface GameSessionTableWrapperProps {
    users: User[]
    isLoggedIn: string
    allElements: GameElement[]
    currentUserRole?: string
    currentUserId: string
}

export default function GameSessionTableWrapper({
    users,
    isLoggedIn,
    allElements,
    currentUserRole,
    currentUserId
}: GameSessionTableWrapperProps) {
    const isGameMaster = currentUserRole === "GAME_MASTER";
    const router = useRouter();

    // Par défaut, afficher les éléments de l'utilisateur connecté
    const [selectedUserId, setSelectedUserId] = useState<string>(currentUserId);

    // Polling pour rafraîchir les données toutes les 3 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            router.refresh();
        }, 3000); // Rafraîchir toutes les 3 secondes

        return () => clearInterval(interval);
    }, [router]);

    // Filtrer les éléments selon l'utilisateur sélectionné
    const filteredElements = allElements.filter(
        element => element.userId === selectedUserId
    );

    // Si GAME_MASTER, afficher le select, sinon afficher directement
    if (!isGameMaster) {
        return (
            <GameSessionTable
                users={users}
                isLoggedIn={isLoggedIn}
                userElements={filteredElements}
                currentUserRole={currentUserRole}
            />
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <label htmlFor="user-select" className="text-sm font-medium">
                    Select user to view elements:
                </label>
                <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                    <SelectTrigger id="user-select" className="w-[250px]">
                        <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                    <SelectContent>
                        {users.map((user) => (
                            <SelectItem key={user.id} value={user.id}>
                                {user.name} ({user.email})
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <GameSessionTable
                users={users}
                isLoggedIn={isLoggedIn}
                userElements={filteredElements}
                currentUserRole={currentUserRole}
            />
        </div>
    );
}


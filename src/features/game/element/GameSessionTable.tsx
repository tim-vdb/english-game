"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Power, PowerOff } from 'lucide-react'
import { ToggleElementAction } from './elements.action'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

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

interface GameSessionTableProps {
  users: User[]
  isLoggedIn: string
  userElements: GameElement[]
  currentUserRole?: string
}

export default function GameSessionTable({ users, isLoggedIn, userElements, currentUserRole }: GameSessionTableProps) {
  const router = useRouter();
  const isGameMaster = currentUserRole === "GAME_MASTER";

  const handleToggle = async (elementId: string, elementName: string, currentStatus: boolean) => {
    try {
      const result = await ToggleElementAction(elementId);
      if (result.success) {
        toast.success(`Élément "${elementName}" ${currentStatus ? 'désactivé' : 'activé'} avec succès !`);
        router.refresh();
      } else {
        toast.error(result.message || "Erreur lors de la modification");
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error("Erreur lors de la modification");
    }
  };

  return (
    <Table className='shadow-md border-2 border-gray-800 rounded-md my-6 max-w-full min-w-full'>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-56">Élément</TableHead>
          {isGameMaster && (
            <TableHead className="min-w-56">Attribué à</TableHead>
          )}
          <TableHead className="min-w-56">Statut</TableHead>
          {userElements[0]?.description && (
            <TableHead className="min-w-56">Description</TableHead>
          )}
          {isGameMaster && (
            <TableHead className="min-w-32">Actions</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {userElements.map((element) => {
          const assignedUser = users.find(user => user.id === element.userId);
          return (
            <TableRow key={element.id}>
              <TableCell className="font-medium">{element.name}</TableCell>
              {isGameMaster && (
                <TableCell>
                  {assignedUser ? assignedUser.name : "Non attribué"}
                </TableCell>
              )}
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${element.active
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
                  }`}>
                  {element.active ? '✅ Actif' : '❌ Inactif'}
                </span>
              </TableCell>
              {element.description && (
                <TableCell className="text-sm text-gray-600">
                  {element.description}
                </TableCell>
              )}
              {isGameMaster && (
                <TableCell>
                  <Button
                    variant={element.active ? "destructive" : "default"}
                    size="sm"
                    onClick={() => handleToggle(element.id, element.name, element.active)}
                    className="p-2"
                  >
                    {element.active ? (
                      <PowerOff className="w-4 h-4" />
                    ) : (
                      <Power className="w-4 h-4" />
                    )}
                  </Button>
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  )
}

"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react'
import { createTeamInvite } from './createInvite';

export default function CreateButtonInvite({ teamId }: { teamId: string }) {
    const [inviteLink, setInviteLink] = useState<string | null>(null);

    async function handleCreateInvite() {
        const { inviteLink } = await createTeamInvite({ teamId });
        setInviteLink(inviteLink);
    }
    return (
        <>
            <Button
                onClick={handleCreateInvite}
                className="mt-4"
            >
                Create Invite
            </Button>
            {inviteLink && <p>{inviteLink}</p>}
        </>
    )
}

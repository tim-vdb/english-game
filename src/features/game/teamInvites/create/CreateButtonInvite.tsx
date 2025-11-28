"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react'
import { createTeamInvite } from './createInvite';
import { Link2, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function CreateButtonInvite({ teamId }: { teamId: string }) {
    const [inviteLink, setInviteLink] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    async function handleCreateInvite() {
        try {
            const { inviteLink } = await createTeamInvite({ teamId });
            setInviteLink(inviteLink);
            toast.success("Invite link created!");
        } catch (error) {
            toast.error("Failed to create invite link");
        }
    }

    async function handleCopy() {
        if (inviteLink) {
            await navigator.clipboard.writeText(inviteLink);
            setCopied(true);
            toast.success("Link copied to clipboard!");
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <div className="space-y-4">
            <Button
                onClick={handleCreateInvite}
                className="bg-[#ec672a] hover:bg-[#e85a2d] text-white font-cooper"
                size="lg"
            >
                <Link2 className="h-4 w-4 mr-2" />
                Create Invite Link
            </Button>
            {inviteLink && (
                <div className="space-y-2">
                    <label className="font-inter text-sm font-medium text-gray-700">
                        Invite Link:
                    </label>
                    <div className="flex gap-2">
                        <Input 
                            value={inviteLink}
                            readOnly
                            className="font-mono text-sm bg-gray-50"
                        />
                        <Button
                            onClick={handleCopy}
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                        >
                            {copied ? (
                                <Check className="h-4 w-4 text-green-600" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                    <p className="font-inter text-xs text-gray-500">
                        Share this link with team members to invite them.
                    </p>
                </div>
            )}
        </div>
    )
}

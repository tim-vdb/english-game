"use client"

import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { FormItem } from '@/components/ui/form'
import { FormLabel } from '@/components/ui/form'
import { FormControl } from '@/components/ui/form'
import { FormDescription } from '@/components/ui/form'
import { FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAction } from 'next-safe-action/hooks'
import { toast } from 'sonner'
import { TeamsSchema } from '../server/teams.schema'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeamsSafeAction } from '../server/teams.action'
import z from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Sheet, SheetContent, SheetHeader, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import GetTeams from '../../getTeams/getTeams'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

export default function CreateTeam() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof TeamsSchema>>({
        resolver: zodResolver(TeamsSchema),
        defaultValues: {
            name: "",
        },
    })

    const { executeAsync, hasErrored, result, hasSucceeded } = useAction(TeamsSafeAction, {
        onSuccess: (data) => {
            toast.success("Team created successfully!");
            form.reset();
            setOpen(false);
            // Forcer le rafraîchissement de la page
            router.refresh();
        },
        onError: (error) => {
            toast.error(error.error.serverError || "An error occurred while creating the team");
        }
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof TeamsSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values);
        await executeAsync(values);
    }

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button className='bg-[#ec672a] hover:bg-[#e85a2d] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2'>
                        <Plus className='h-5 w-5' />
                        Create Team
                    </Button>
                </SheetTrigger>
                <SheetContent className={cn('animate-blurred-fade-in animate-duration-200 transition-all duration-300 ease-in-out bg-[#f3f2e3]', open ? 'translate-x-0' : 'translate-x-100')}>
                    <SheetHeader>
                        <SheetTitle className='font-cooper text-3xl text-[#7f2b13]'>Create Team</SheetTitle>
                    </SheetHeader>
                    <SheetDescription className='mb-4 font-inter text-gray-600'>
                        Create a new team to start playing with your friends.
                    </SheetDescription>
                    <Card className='bg-white border-4 border-[#ec672a]'>
                        <CardContent className='pt-6'>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className='space-y-2'>
                                                <FormLabel className='font-inter text-[#7f2b13]'>Team Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className='font-inter'
                                                        placeholder="Enter team name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription className='font-inter text-sm'>
                                                    Choose a unique name for your team.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        className='w-full bg-[#ec672a] hover:bg-[#e85a2d] text-white font-bold py-3 rounded-lg transition-colors'
                                    >
                                        Create Team
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </SheetContent>
            </Sheet>
        </>
    )
}

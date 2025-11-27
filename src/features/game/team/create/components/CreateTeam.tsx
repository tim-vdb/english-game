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
                <SheetTrigger className='flex items-center justify-center cursor-pointer gap-2 bg-neutral-800 text-white dark:bg-white dark:text-black rounded-md p-2'>
                    <p className='dark:text-black'>Create Team</p>
                    <Plus className='size-8 border-2 border-neutral-750 dark:border-neutral-200 dark:text-black p-1 rounded-md' />
                </SheetTrigger>
                <SheetContent className={cn('animate-blurred-fade-in animate-duration-200 transition-all duration-300 ease-in-out', open ? 'translate-x-0' : 'translate-x-100')}>
                    <SheetHeader>
                        <SheetTitle>Create Team</SheetTitle>
                    </SheetHeader>
                    <SheetDescription className='mb-4'>
                        Create a new team to start playing with your friends.
                    </SheetDescription>
                    <Card>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className='flex items-start flex-col gap-8'>

                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem className='space-y-2'>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input className='dark:text-white' placeholder="Team name" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Name of the team.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button type="submit" className='w-full cursor-pointer'>Create Team</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </SheetContent>
            </Sheet>
        </>
    )
}

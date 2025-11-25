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
import { Sheet, SheetContent, SheetHeader, SheetDescription, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import GetTeams from '../../getTeams/getTeams'

export default function CreateTeam() {
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof TeamsSchema>>({
        resolver: zodResolver(TeamsSchema),
        defaultValues: {
            name: "",
            public: false,
        },
    })

    const { executeAsync, hasErrored, result, hasSucceeded } = useAction(TeamsSafeAction, {
        onSuccess: (data) => {
            toast.success("Team created successfully!");
            form.reset();
            // Forcer le rafraîchissement de la page
            router.refresh();
        },
        onError: (error) => {
            console.error('Error creating team:', error);
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
            <Sheet>
                <SheetTrigger>Create Team</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Create Team</SheetTitle>
                    </SheetHeader>
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
                                                        <Input placeholder="Team name" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Name of the team.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="public"
                                            render={({ field }) => (
                                                <FormItem className='space-y-2'>
                                                    <FormLabel>Make team public</FormLabel>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            className='cursor-pointer'
                                                        />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Make team public if you want to share it with other users.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <SheetClose asChild>
                                        <Button type="submit" className='w-full cursor-pointer'>Create Team</Button>
                                    </SheetClose>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </SheetContent>
            </Sheet>
        </>
    )
}

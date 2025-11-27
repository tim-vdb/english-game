import { cn } from '@/lib/utils'
import Link from 'next/link'

const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const members = [
    {
        name: 'Timothée VAN DEN BOSCH',
        role: 'Game Designer',
        avatar: '/images/team/Timothée_VDB.webp',
        linkedIn: 'https://www.linkedin.com/in/timothee-van-den-bosch'

    },
    {
        name: 'Mouhamed Gaye',
        role: 'Front-End Developer',
        avatar: '/images/team/Mouhamed_Gaye.jpg',
        linkedIn: 'https://www.linkedin.com/in/mouhamed-gaye'
    },
    {
        name: 'Camille Fettet-Houbaille',
        role: 'Narrative Designer',
        avatar: '/images/team/Camille_Fettet-Houbaille.jpg',
        linkedIn: 'https://www.linkedin.com/in/camille-fettet-houbaille'
    },
    {
        name: 'Quentin Faure',
        role: 'UX Specialist',
        avatar: '/images/team/Quentin_Faure.jpg',
        linkedIn: 'https://www.linkedin.com/in/quentin-faure'
    },
]

export default function TeamSection() {
    return (
        <section className="bg-[#F7F2EC] py-16 md:py-32">
            
            <div className="mx-auto max-w-5xl border-t px-6">
                
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl mt-0">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Throughout Chef’s Blueprint, we validate each idea with the chef and his developer to feel if the wireframe faithfully translates the identity of the restaurant.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group group/image overflow-hidden">
                                <div
                                    className={cn(
                                        'bg-neutral-900 overflow-hidden rounded-md',
                                        (member.name === 'Timothée VAN DEN BOSCH' || member.name === 'Guerric COCHELIN' || member.name === 'Alexandre BOULET')
                                            ? 'dark:bg-white'
                                            : ''
                                    )}
                                >
                                    <img
                                        className={cn(
                                            "h-96 w-full object-cover object-top grayscale transition-all duration-500 group-hover/image:grayscale-0 group-hover/image:h-90 rounded-md",
                                            member.name === 'Timothée VAN DEN BOSCH' && 'translate-y-16 -translate-x-2 rounded-none',
                                            member.name === 'Guerric COCHELIN' && 'translate-y-20 -translate-x-2 rounded-none'
                                        )}
                                        src={member.avatar}
                                        alt={member.name}
                                        width="826"
                                        height="1239"
                                    />
                                </div>
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4 space-y-2">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <Link
                                            href={member.linkedIn}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-flex items-center gap-2 translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            <LinkedInIcon />
                                            LinkedIn
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

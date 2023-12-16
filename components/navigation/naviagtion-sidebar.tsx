import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react';
import NavigationAction from './navigation-action';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import NavigationItem from './naviagtion-item';

const NavigationSidebar = async () => {
    const profile = await currentProfile();
    if (!profile) {
        return redirect('/');
    }
    const server = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });
    return (
        <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3'>
            <NavigationAction />
            <Separator className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto' />
            <ScrollArea className='flex-1 w-full'>
                {server.map((server) => (
                    <div className='mb-4' key={server.id}>
                        <NavigationItem name={server.name} id={server.id} imageUrl={server.imageUrl} />
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default NavigationSidebar;

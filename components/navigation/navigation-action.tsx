'use client';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ActionTooltip from '../action.tooltip';

const NavigationAction = () => {
    const [isMount, setIsMount] = useState(false);
    useEffect(() => {
        setIsMount(true);
    }, []);
    if (!isMount) {
        return null;
    }
    return (
        <div>
            <ActionTooltip side='right' align='center' label='Add a server'>
                <button className='group flex items-center'>
                    <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hour:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
                        <Plus className='group-hover:text-white transition text-emerald-500' size={25} />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
};

export default NavigationAction;
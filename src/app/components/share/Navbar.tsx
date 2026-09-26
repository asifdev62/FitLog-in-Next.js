// 
'use client';
import { useWorkout } from '@/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false)
    const {plan, saved} = useWorkout();

    useEffect(()=>{
        setMounted(true);
    }, []);
    return (
        <nav className='border-b border-gray-200 px-4 sm:px-6'>
            <div className='mx-auto flex max-w-7xl items-center justify-between py-4'>
                <div className='flex items-center gap-4'>
                    <Image src="/logo.webp" alt='fitlog logo' width={120} height={40} className='h-auto w-22.5 sm:w-30'></Image>
                </div>

                <div className='hidden items-center gap-4 text-sm font-semibold text-red-700 md:flex'>

                        <Link className='hover:bg-red-100 rounded-full px-3 py-1' href="/">Workouts</Link>

                    <Link className='hover:bg-red-100 rounded-full px-3 py-1' href="/Plan">My Plan</Link>
                </div>

                <div className='hidden gap-6 text-red-700 font-semibold md:flex'>


                   <div className='flex gap-1 items-center'>
                     <Link href="/Plan?tab=plan">
                    Plan
                    </Link>
                    <span className='bg-blue-200 rounded-full px-2 py-1 text-xs text-gray-900'>{mounted ? plan.length : 0}</span>
                   </div>

                   <div className='flex gap-1 items-center'>
                     <Link href="/Plan?tab=saved">
                    Saved
                    </Link>
                    <span className='bg-blue-200 rounded-full px-2 py-1 text-xs text-gray-900'>{mounted ? saved.length : 0}</span>
                   </div>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className='text-xl text-red-700 md:hidden' aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isOpen && (
                <div className='border-t border-gray-100 pb-4 pt-4 md:hidden'>
                    <div className='flex flex-col gap-3 text-sm font-semibold text-red-700'>
                        <Link className='rounded-lg bg-red-100 px-4 py-2' href="/" onClick={() => setIsOpen(false)}>Workouts</Link>

                        <Link className='px-4 py-2' onClick={() => setIsOpen(false)} href="/Plan">My Plan</Link>

                        <Link className='px-4 py-2' onClick={() => setIsOpen(false)} href="/Plan?tab=plan">Plan</Link>

                        <Link className='px-4 py-2' onClick={() => setIsOpen(false)} href="/Plan?tab=saved">Saved</Link>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;




// 
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='border-b border-gray-200 px-4 sm:px-6'>
            <div className='mx-auto flex max-w-7xl items-center justify-between py-4'>
                <div className='flex items-center gap-4'>
                    <Image src="/logo.webp" alt='fitlog logo' width={120} height={40} className='h-auto w-22.5 sm:w-30'></Image>
                </div>

                <div className='hidden items-center gap-4 text-sm font-semibold text-red-700 md:flex'>

                    <a className='bg-red-100 rounded-full px-3 py-1' href="">Workouts</a>

                    <a href="/Plan">My Plan</a>
                </div>

                <div className='hidden gap-6 text-red-700 font-semibold md:flex'>
                    <a href="">Plan</a>
                    <a href="">Saved</a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className='text-xl text-red-700 md:hidden' aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isOpen && (
                <div className='border-t border-gray-100 pb-4 pt-4 md:hidden'>
                    <div className='flex flex-col gap-3 text-sm font-semibold text-red-700'>
                        <a className='rounded-lg bg-red-100 px-4 py-2' href="" onClick={() => setIsOpen(false)}>Workouts</a>

                        <a className='px-4 py-2' onClick={() => setIsOpen(false)} href="">Plan</a>

                        <a className='px-4 py-2' onClick={() => setIsOpen(false)} href="">My Plan</a>

                        <a className='px-4 py-2' onClick={() => setIsOpen(false)} href="">Saved</a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
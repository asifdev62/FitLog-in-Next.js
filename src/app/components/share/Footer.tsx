import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t border-gray-300 '>
           <div className='flex flex-col md:flex-row  items-center justify-between gap-3 py-4  px-5 md:px-10 sm:px-8'>
             <div>
                <Image src="/logo.webp"
                 alt='fotter-logo' 
                 width={80}
                  height={20}></Image>
            </div>

            <div className='text-center md:text-right'>
                <p className='text-gray-800 text-sx sm:text-sm'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
           </div>
        </footer>
    );
};

export default Footer;
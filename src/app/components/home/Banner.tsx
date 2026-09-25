import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
       <section className=' px-4 py-8 sm:px-6 lg:px-10'>
         <div className='mx-auto gap-4 flex max-w-7xl flex-col  items-center overflow-hidden rounded-2xl border border-gray-200 bg-blue-200 px-6 py-10 sm:px-10 lg:flex-row lg:px-12 lg:py-10'>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-red-800 font-bold text-xl mb-4'>Workout Library</p>
                <h2 className='max-w-xl text-4xl font-bold text-gray-800 uppercase sm:text-5xl lg:text-5xl '>Train With Intent. Log Every Set.</h2>
                
                <p className='mt-5 max-w-xl text-sm leading-6 text-gray-700 sm:text-base'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                into today&apos;s plan, and watch the week&apos;s work add up.</p>

                <button className='mt-12 rounded-md bg-red-800 px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-red-900'>Browser Workouts</button>
            </div>


            <div className='mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end'>
                <Image src='/banner.png'
                alt='banner-photo' width={400} height={200} className='h-auto max-h-120 object-contain'></Image>
            </div>
        </div>

        
       </section>
    );
};

export default Banner;


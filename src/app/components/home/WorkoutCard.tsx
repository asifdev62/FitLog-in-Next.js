import { Workout } from '@/types/Workout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaFire, FaStar } from 'react-icons/fa';

interface WorkoutCardProps {
    workout: Workout;
}
const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (

        <Link  href={`/Workout/${workout.id}`}>
        <div className="card w-full bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <figure className="relative h-52 w-full">

                <Image src={workout.image}
                    alt={workout.name}
                    fill className="object-cover" />

                <div className="absolute top-3 right-3">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {workout.difficulty} </span>
                </div> </figure>


            <div className="p-4 sm:p-5">

                <div className="flex flex-wrap gap-2"> {workout.muscleGroups.map((muscle) => (<span key={muscle} className="text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full" >
                    {muscle} </span>))} </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-2"> {workout.name} </h2>

                <h3 className='text-sm font-medium text-gray-500 mt-1'>{workout.equipment}</h3>

                <div className="border-t border-gray-200 mt-5 pt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-semibold">

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaClock className="text-red-500 shrink-0" />
                            <span>{workout.duration} min</span> </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600"> <FaFire className="text-red-500 shrink-0" /> <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600"> <FaStar className="text-red-500 shrink-0" />
                            <span className="font-semibold"> {workout.rating} </span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </Link>

    );
};

export default WorkoutCard;
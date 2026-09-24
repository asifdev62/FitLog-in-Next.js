"use client";
import { Workout } from '@/types/Workout';
import WorkoutCard from './WorkoutCard';
import { useState } from 'react';

interface WorkoutsProps{
    workout: Workout[];
}

const Workouts = ({workout}: WorkoutsProps) => {
   const [sortBy, setStortBy] = useState("duration");
   
   const sortedWorkouts = [...workout].sort((a, b) =>{
    if(sortBy === "duration"){
        return a.duration - b.duration;
    }

    if(sortBy === "calories"){
        return a.caloriesBurned - b.caloriesBurned
    }

    if(sortBy === "rating"){
        return b.rating - a.rating;
    }

    return 0;
   });
    return (
        <div>
            <div className='mt-25'>
                <h2 className='uppercase text-4xl font-bold text-gray-800'>The Library</h2>

                <p className='text-gray-500 font-semibold text-sm mt-2 '>Twelve lifts covering every major muscle group.</p>
            </div>

           
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                 {
                   sortedWorkouts.map((workout => {
                    return <WorkoutCard key={workout.id}workout={workout}></WorkoutCard>
                   })) 
                }
               </div>
           
        </div>
    );
};

export default Workouts;
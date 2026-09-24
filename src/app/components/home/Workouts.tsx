import React from 'react';
import WorkoutCard from './WorkoutCard';
import { Workout } from '@/types/Workout';

const getWorkout = async()=>{
    const response = await fetch('http://localhost:3000/data.json')
    const data = await response.json();
    return data;
};
const Workouts = async () => {
    const workoutsData = await getWorkout();
    console.log(workoutsData)
    return (
        <div>
            <div className='mt-25'>
                <h2 className='uppercase text-4xl font-bold text-gray-800'>The Library</h2>

                <p className='text-gray-500 font-semibold text-sm mt-2 '>Twelve lifts covering every major muscle group.</p>
            </div>

           
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                 {
                   workoutsData.map((workout => {
                    return <WorkoutCard key={workout.id}workout={workout}></WorkoutCard>
                   })) 
                }
               </div>
           
        </div>
    );
};

export default Workouts;
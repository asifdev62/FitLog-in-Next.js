"use client";
import { Workout } from '@/types/Workout';
import WorkoutCard from './WorkoutCard';
interface WorkoutsProps{
    workout: Workout[];
}

const Workouts = ({workout}: WorkoutsProps) => {

    return (
        <div className='p-5 md:p-10 lg:p-15'>
            <div className='mt-10'>
                <h2 className='uppercase text-4xl font-bold text-gray-800'>The Library</h2>

                <p className='text-gray-500 font-semibold text-sm mt-2 '>Twelve lifts covering every major muscle group.</p>
            </div>
           
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                 {
                   workout.map((workout => {
                    return <WorkoutCard key={workout.id}workout={workout}></WorkoutCard>
                   })) 
                }
               </div>
           
        </div>
    );
};

export default Workouts;
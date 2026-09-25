"use client"
import { useWorkout } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import React from 'react';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import  toast  from "react-hot-toast";


interface WorkoutActionProps{
    workout: Workout
}
const WorkoutAction = ({workout}: WorkoutActionProps) => {

    const {
        plan, 
        saved, 
        addToPlan,
        saveWorkout,
    } = useWorkout();

    const alreadyInPlan = plan.some(
        (item) => item.id === workout.id
    );

    const alreadySaved = saved.some(
        (item) => item.id === workout.id
    );

    const handleAddPlan = () =>{
        if(alreadyInPlan){
            toast.error("Already adeded to your plan");

            return;
        }

        if(plan.length >= 5){
            toast.error("You can add maximum 5 workouts");
            return
        }

        addToPlan(workout)

        toast.success("Added to today's plan");
    };

    const handleSave = ()=>{
       if(alreadySaved){ 
        toast.error("Already saved");
        return;
    };

    saveWorkout(workout);

    toast.success("Workout saved");
};
    return (
        <div className='flex flex-col gap-3 sm:flex-row'>

            <button onClick={handleAddPlan} disabled={plan.length >= 5} 
           className='rounded-lg bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-900 disabled:coursor-not-allowed disabled:opacity-40'>

            {alreadyInPlan ? "Already in Plan" : "Add to Today's Plan"}
            </button>


            <button onClick={handleSave} className='flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-5 py-3 font-bold text-white transition hover:bg-gray-900'>

                <MdOutlineBookmarkAdd size={22} />

                {alreadySaved ? "Already Saved" : "Save for Later"}

            </button>
            
        </div>
    );
};

export default WorkoutAction;
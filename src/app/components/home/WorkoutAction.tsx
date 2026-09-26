"use client"
import { useWorkout } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import  toast  from "react-hot-toast";
import { IoSaveSharp } from 'react-icons/io5';
import { FaAddressBook } from 'react-icons/fa';


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

            <button onClick={handleAddPlan}
           className='flex items-center justify-center gap-2 rounded-lg bg-red-800 px-5 py-3 font-bold text-white transition hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-40'>

            <FaAddressBook size={20} />

            {alreadyInPlan ? "Already in Plan" : "Add to Today's Plan"}
            </button>


            <button onClick={handleSave} className='flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-5 py-3 font-bold text-gray-800 hover:text-white transition hover:bg-gray-900'>

                <IoSaveSharp size={20} />


                {alreadySaved ? "Already Saved" : "Save for Later"}

            </button>
            
        </div>
    );
};

export default WorkoutAction;
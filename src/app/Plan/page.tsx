"use client"
import { useWorkout } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlanPage = () => {
    const {
        plan,
        saved,
        removeFromPlan,
        removeSaved,
        markAsDone,
        addToPlan,
    } = useWorkout();
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const currentData = activeTab === "plan" ? plan : saved;

    const totalMinutes = plan.reduce((total, workout) => total + workout.duration, 0);

    const totalCalories = plan.reduce((total, workout) => total + workout.caloriesBurned, 0);

    const handleDone = (id: number) => {
        markAsDone(id);

        toast.success("Workout marked as done");
    };

    const handleRemovePlan = (id: number) => {
        removeFromPlan(id);

        toast.success("Workout removed from plan");
    };

    const handleRemoveSaved = (id: number) => {
        removeSaved(id);
        toast.success("Workout remove from saved");
    };

    const handleAdd = (workout: Workout) => {
        if (plan.length >= 5) {
            toast.error("You can add maximum 5 workouts");
            return;
        };

        addToPlan(workout);
        toast.success("Added to today's plan");
    };
    return (
        <main className='min-h-screen px-4 py-16 sm:px-6 lg:px-10'>

            <div className='mx-auto max-w-6xl'>
                <div>
                    <h1 className='mt-2 text-4xl font-black text-gray-800 uppercase'>My Plan</h1>

                    <p className='text-gray-500 mt-2 text-xl'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                <div className='mt-8 grid grid-cols-3 bg-blue-200 items-center rounded-xl'>
                    <div className='p-5 text-center'>

                        <p className='text-2xl font-black text-gray-800'>{plan.length}</p>

                        <p className='text-gray-800 font-semibold'>Exercises</p>
                </div>

                <div className=" text-center border-x border-gray-400">
                    <p className="text-2xl font-black text-gray-800">
                        {totalMinutes}
                    </p>

                    <p className="font-semibold text-gray-800">
                        Minutes
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-2xl font-black text-gray-800">
                        {totalCalories}
                    </p>

                    <p className="font-semibold text-gray-800">
                        Calories
                    </p>
                </div>

            </div>
    

         
            <div className="mt-10 flex gap-3 border-b border-gray-300 pb-3">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`rounded-lg  px-5 py-2 font-bold ${activeTab === "plan"
                            ? "bg-red-700 text-white"
                            : "text-gray-800"
                        }`}
                >
                    Today&apos;s Plan
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`rounded-lg px-5 py-2 font-bold ${activeTab === "saved"
                            ? "bg-red-700 text-white"
                            : "text-gray-800"
                        }`}
                >
                    Saved
                </button>

            </div>

            
            {currentData.length === 0 ? (

                <div className="py-24 text-center bg-blue-200 mt-10 rounded-xl">

                    <h2 className="text-3xl font-black text-gray-800">
                        NOTHING HERE YET
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-gray-500">
                        Add workouts to your plan or save them
                        for later.
                    </p>

                    <Link
                        href="/"
                        className="mt-6 inline-block rounded-lg bg-red-700 px-6 py-3 font-bold text-white"
                    >
                        GO TO WORKOUTS
                    </Link>

                </div>

            ) : (

                <div className="mt-8 space-y-4">

                    {currentData.map((workout) => (

                        <div
                            key={workout.id}
                            className="flex flex-col gap-5 rounded-xl border border-gray-300 bg-blue-200 p-4 sm:flex-row sm:items-center"
                        >

                            {/* Image */}
                            <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-40">

                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    fill
                                    className="object-cover"
                                />

                            </div>

                          
                            <div className="flex-1">

                                <h2 className="text-xl font-bold text-gray-800">
                                    {workout.name}
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    {workout.equipment}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">

                                    <span>
                                        {workout.duration} min
                                    </span>

                                    <span>
                                        {workout.caloriesBurned} cal
                                    </span>

                                    <span className='flex gap-1 items-center'>
                                        <FaStar />{workout.rating}
                                    </span>

                                </div>

                            </div>

                            
                            <div className="flex flex-wrap gap-2">

                                <Link
                                    href={`/Workout/${workout.id}`}
                                    className="rounded-lg border bg-red-700 border-gray-300 px-4 py-2 text-sm hover:bg-red-900 font-bold text-white"
                                >
                                    View Details
                                </Link>

                                {activeTab === "plan" ? (

                                    <button
                                        onClick={() =>
                                            handleDone(workout.id)
                                        }
                                        className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-bold border border-gray-400 text-gray-800 hover:bg-blue-300"
                                    >
                                        Mark as Done
                                    </button>

                                ) : (

                                    <button
                                        onClick={() =>
                                            handleAdd(workout)
                                        }
                                        className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-bold border border-gray-400 text-black hover:bg-blue-300"
                                    >
                                        Add to Plan
                                    </button>

                                )}

                                <button
                                    onClick={() =>
                                        activeTab === "plan"
                                            ? handleRemovePlan(workout.id)
                                            : handleRemoveSaved(workout.id)
                                    }
                                    className="rounded-lg border border-red-700 px-4 py-2 text-sm font-bold bg-blue-100 text-red-700 hover:bg-blue-300"
                                >
                                    X
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}
        </div>

    </main >
          
    );
};

export default PlanPage;
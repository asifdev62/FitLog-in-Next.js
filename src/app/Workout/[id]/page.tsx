import { Workout } from '@/types/Workout';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineBookmarkAdd, MdOutlineSaveAlt } from 'react-icons/md';

interface WorkoutDetailsPageProps {
    params: Promise<{
        id: string
    }>;
};

const getWorkout = async () => {
    const response = await fetch('http://localhost:3000/data.json')
    const data = await response.json();
    return data;
};


const page = async ({ params }: WorkoutDetailsPageProps) => {
    const { id } = await params;
    const workoutsData = await getWorkout();
    const workout = workoutsData.find((workout: Workout) => String(workout.id) === String(id),
) as Workout;

    console.log(workout)
    return (
       <div className=" sm:px-6 lg:px-10 py-10">
  <div className="rounded-2xl overflow-hidden shadow-xl bg-blue-200">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">

      {/* Image */}
      <div>
        <Image
          src={workout.image}
          alt={workout.name}
          width={700}
          height={600}
          className="w-full h-full lg:h-full rounded-xl object-cover "
        />
      </div>

     <div className='p-6'>
         {/* Content */}
      <div className="text-white bg-blue-200">

        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold uppercase mb-3 text-gray-800">
          {workout.name}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-6 mb-5">
          {workout.description}
        </p>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2 mb-6">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Information */}
        <div className=" bg-blue-100 border border-gray-300 rounded-xl overflow-hidden">

          <div className="flex justify-between px-4 py-4 border-b border-gray-300">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Equipment
            </span>
            <span className="text-gray-500 text-sm">
              {workout.equipment}
            </span>
          </div>

          <div className="flex justify-between px-4 py-4 border-b border-gray-300">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Difficulty
            </span>
            <span className="text-gray-500 text-sm">
              {workout.difficulty}
            </span>
          </div>

          <div className="flex justify-between px-4 py-4 border-b border-gray-300">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Sets
            </span>
            <span className="text-gray-500 text-sm">
              {workout.sets}
            </span>
          </div>

          <div className="flex justify-between px-4 py-4 border-b border-gray-300">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Reps
            </span>
            <span className="text-gray-500 text-sm">
              {workout.reps}
            </span>
          </div>

          <div className="flex justify-between px-4 py-4 border-b border-gray-300">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Duration
            </span>
            <span className="text-gray-500 text-sm">
              {workout.duration} min
            </span>
          </div>

          <div className="flex justify-between px-4 py-4 border-b border-gray-300">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Calories
            </span>
            <span className="text-gray-500 text-sm">
              {workout.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex justify-between px-4 py-4">
            <span className="text-gray-500 text-xs font-bold uppercase">
              Rating
            </span>
            <span className="text-gray-500 text-sm">
          <div className='flex items-center gap-1'>
            <FaStar/>
            {workout.rating}
          </div>
            </span>
          </div>

        </div>

        {/* Instructions */}
        <div className="mt-6">
          <h2 className="text-sm font-bold uppercase mb-4 text-gray-800">
            Instructions
          </h2>

          <ol className="space-y-3">
            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="text-gray-600 text-sm flex gap-3"
              >
                <span className="text-gray-500 font-bold">
                  {index + 1}.
                </span>

                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-7">

          <button className="bg-red-700 hover:bg-red-900 font-bold px-6 py-3 rounded-lg transition flex items-center justify-center gap-2">
    
                <MdOutlineBookmarkAdd />
                <p>Add to today&apos;s plan</p>
          </button>

          <button className="border border-red-700 hover:bg-blue-100 text-red-700 px-6 py-3 rounded-lg transition font-bold flex items-center justify-center gap-3">
            <MdOutlineSaveAlt />
            <p>Save for later</p>
          </button>

        </div>

      </div>
     </div>
    </div>

  </div>
</div>
    );
};

export default page;
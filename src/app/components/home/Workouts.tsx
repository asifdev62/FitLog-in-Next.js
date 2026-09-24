import React from 'react';

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
            <div className='mt-15'>
                <h2 className='uppercase text-2xl font-bold text-gray-800'>The Library</h2>
                <p className='text-gray-500 font-semibold text-xm'>Twelve lifts covering every major muscle group.</p>
            </div>

           
                {
                   workoutsData.map((workout => {
                    return <div key={workout.id}>{workout.name}</div>
                   })) 
                }
           
        </div>
    );
};

export default Workouts;
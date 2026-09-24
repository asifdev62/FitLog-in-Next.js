import Banner from './components/home/Banner';
import Workouts from './components/home/Workouts';

const getWorkout = async()=>{
  const response = await fetch("http://localhost:3000/data.json")
  const data = await response.json();

  return data;
};

const page = async () => {
  const workoutsData = await getWorkout();
  return (
    <main>
      <Banner />

    <Workouts workout={workoutsData}/>
    </main>
  );
};

export default page;
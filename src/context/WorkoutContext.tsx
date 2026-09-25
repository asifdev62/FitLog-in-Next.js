"use client";
import { Workout } from '@/types/Workout';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
interface WorkoutContextType {
    plan: Workout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    saveWorkout: (workout: Workout) => void;
    removeSaved: (id: number) => void;
    markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | null>(null);

export const WorkoutProvider = ({children,

}:{
    
children: ReactNode;
}) =>{
    const [plan, setPlan] = useState<Workout[]>(()=>{
        if (typeof window === "undefined"){
            return [];
        }

        const data = localStorage.getItem("fitlog-plan");
        return data ? JSON.parse(data) : [];
    });


    const [saved, setSaved] = useState<Workout[]>(()=>{
        if (typeof window === "undefined"){
            return [];
        }

        const data = localStorage.getItem("fitlog-saved");

        return data ? JSON.parse(data):[];
    });

    useEffect(()=>{
        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    },[plan]);


    useEffect(()=>{
        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    },[saved]);


    const addToPlan = (workout: Workout) =>{
        if(plan.length >= 5){
            return;
        }

        const alreadyExists = plan.some(
        (item) => item.id === workout.id
        );

        if(alreadyExists){
            return;
        }

        setPlan((prev) => [...prev, workout]);
    };

    const removeFromPlan = (id: number) =>{
        setPlan((prev) => prev.filter((item) => item.id !== id));
    };

    const saveWorkout = (workout: Workout) =>{
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if(alreadySaved){
            return;
        }
        setSaved((prev) => [...prev, workout]);
    };

    const removeSaved = (id:number) =>{
        setSaved((prev) => prev.filter((item) => item.id !== id));

    };

    const markAsDone = (id: number) => {
        setPlan((prev) => prev.filter((item)=> item.id !== id));

    };
     return (
        <WorkoutContext.Provider value={{
            plan,
            saved,
            addToPlan,
            removeFromPlan,
            saveWorkout,
            removeSaved,
            markAsDone,

        }}>{children}</WorkoutContext.Provider>
     );
};

export const useWorkout = ()=>{
    const context = useContext(WorkoutContext);

    if(!context){
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }
    return context;
};

export default WorkoutProvider;
"use client";
import { Workout } from '@/types/Workout';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

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
            toast.error("Today's plan can contain maximum 5 workouts.");
            return;
        }

        const alreadyExists = plan.some(
        (item) => item.id === workout.id
        );

        if(alreadyExists){
            toast.error("workout already added");
            return;
        }

        setPlan((prev) => [...prev, workout]);
        toast.success("Added to today's plan.");
    };

    const removeFromPlan = (id: number) =>{
        setPlan((prev) => prev.filter((item) => item.id !== id));
        toast.success("workout remove from plan.");
    };

    const saveWorkout = (workout: Workout) =>{
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if(alreadySaved){
            toast.error("workout already saved.");
            return;
        }
        setSaved((prev) => [...prev, workout]);
        toast.success("Workout saved for later.");
    };

    const removeSaved = (id:number) =>{
        setSaved((prev) => prev.filter((item) => item.id !== id));

        toast.success("Remove from saved.");
    };

    const markAsDone = (id: number) => {
        setPlan((prev) => prev.filter((item)=> item.id !== id));

        toast.success("Workout marked as done.");
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

"use client";

import { Workout } from "@/types/Workout";
import {
    createContext,
    ReactNode,
    useContext,
    useSyncExternalStore,
} from "react";

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

const emptyWorkoutList : Workout[] = [];

const createStore = (key: string) => {

    let data: Workout[] = [];
    let loaded = false;

    const listeners = new Set<() => void>();


  
    const getData = () => {

        if (!loaded && typeof window !== "undefined") {

            const savedData = localStorage.getItem(key);

            if (savedData) {
                try {
                    data = JSON.parse(savedData);
                } catch {
                    data = [];
                }
            }

            loaded = true;
        }

        return data;
    };



    const subscribe = (listener: () => void) => {

        listeners.add(listener);

        return () => {
            listeners.delete(listener);
        };
    };



    const getSnapshot = () => {
        return getData();
    };



    const getServerSnapshot = () => {
        return emptyWorkoutList;
    };



    const update = (
        callback: (previousData: Workout[]) => Workout[]
    ) => {

        const newData = callback(getData());

        if (newData === data) {
            return;
        }

        data = newData;

        localStorage.setItem(
            key,
            JSON.stringify(data)
        );

        listeners.forEach((listener) => {
            listener();
        });
    };


    return {
        subscribe,
        getSnapshot,
        getServerSnapshot,
        update,
    };
};



const planStore = createStore("fitlog-plan");
const savedStore = createStore("fitlog-saved");



export const WorkoutProvider = ({
    children,
}: {
    children: ReactNode;
}) => {

    const plan = useSyncExternalStore(
        planStore.subscribe,
        planStore.getSnapshot,
        planStore.getServerSnapshot
    );


    const saved = useSyncExternalStore(
        savedStore.subscribe,
        savedStore.getSnapshot,
        savedStore.getServerSnapshot
    );


 

    const addToPlan = (workout: Workout) => {

        planStore.update((previousData) => {

            if (previousData.length >= 5) {
                return previousData;
            }

            const alreadyExists = previousData.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return previousData;
            }

            return [...previousData, workout];
        });
    };


    const removeFromPlan = (id: number) => {

        planStore.update((previousData) =>
            previousData.filter(
                (item) => item.id !== id
            )
        );
    };




    const saveWorkout = (workout: Workout) => {

        savedStore.update((previousData) => {

            const alreadySaved = previousData.some(
                (item) => item.id === workout.id
            );

            if (alreadySaved) {
                return previousData;
            }

            return [...previousData, workout];
        });
    };


    const removeSaved = (id: number) => {

        savedStore.update((previousData) =>
            previousData.filter(
                (item) => item.id !== id
            )
        );
    };


    const markAsDone = (id: number) => {

        planStore.update((previousData) =>
            previousData.filter(
                (item) => item.id !== id
            )
        );
    };


    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeSaved,
                markAsDone,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};



export const useWorkout = () => {

    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
};


export default WorkoutProvider;

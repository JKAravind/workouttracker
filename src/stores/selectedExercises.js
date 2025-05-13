import { create } from "zustand";

const useExerciseStore = create((set)=>({
    selectedExercises : [],

    addExercise : (exercise)=>{
        selectedExercises:set((state)=>({selectedExercises:[...state.selectedExercises,exercise]}))
    },
    
}))

export default useExerciseStore;
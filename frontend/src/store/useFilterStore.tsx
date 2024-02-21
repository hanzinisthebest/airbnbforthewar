import { create } from "zustand";

type State = {
    city: string | null;
    setCity: (city: string | null) => void;
    dates:Date[] | null
    setDates :(dates:Date[] | null) => void;
    guests: number|null;
    setGuests:(guests:number|null) => void;
  };
  
  export const useFilterStore = create<State>((set) => ({
    city: null,
    setCity: (city) => set(() => ({ city})),
    dates: null,
    setDates: (dates) => set(() => ({ dates})),
    guests: null ,
    setGuests:(guests) => set(()=>({guests}))
  }));
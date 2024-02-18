import {create} from 'zustand';

type State = {
  id: string | null;
  setId: (token: string | null) => void;
};

export const useIdStore = create<State>((set) => ({
  id: null,
  setId: (id) => set(() => ({ id})),
}));
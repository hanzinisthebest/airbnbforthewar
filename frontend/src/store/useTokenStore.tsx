import {create} from 'zustand';

type State = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const useTokenStore = create<State>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token })),
}));

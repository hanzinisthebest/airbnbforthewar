import {create} from 'zustand';

type State = {
  roles: number[] | null;
  setRoles: (roles: number[] | null) => void;
};

export const useRolesStore = create<State>((set) => ({
  roles: null,
  setRoles: (roles) => set(() => ({ roles })),
}));

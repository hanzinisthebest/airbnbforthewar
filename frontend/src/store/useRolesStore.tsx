import {create} from 'zustand';

type State = {
  roles: object | null;
  setRoles: (roles: object | null) => void;
};

export const useRolesStore = create<State>((set) => ({
  roles: null,
  setRoles: (roles) => set(() => ({ roles })),
}));

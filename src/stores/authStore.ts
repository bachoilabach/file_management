import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  name: string;
  email: string;
  image: string;
  accessToken: string
};

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'auth',
    },
  ),
);

// src/store/authStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  user: { id: string; email: string } | null;
  setUser: (user: AuthState["user"]) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }))
);

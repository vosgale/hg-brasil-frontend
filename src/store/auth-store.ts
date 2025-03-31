import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { IAuthState, ILoginInfos } from "./types";

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      login: (userInfos: ILoginInfos) => {
        set({
          token: userInfos.token,
          isAuthenticated: true,
          user: userInfos.name,
        });
      },
      logout: () => {
        set({ token: null, isAuthenticated: false, user: null });
      },
    }),
    {
      name: "@authStorage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    },
  ),
);

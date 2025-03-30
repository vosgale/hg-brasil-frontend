import type { IAuthenticatedUser, LoginResponse } from "api/services/Register/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: IAuthenticatedUser | null;
  login: (userInfos: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      network: null,
      login: (userInfos: LoginResponse) => {
        set({
          token: userInfos.accessToken,
          isAuthenticated: true,
          user: userInfos.user,
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

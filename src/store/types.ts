export interface ILoginInfos {
  email: string;
  name: string;
  token: string;
}

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: string | null;
  login: (userInfos: ILoginInfos) => void;
  logout: () => void;
}

export interface IAuthenticatedUser {
  name: string;
}

export interface LoginResponse {
  accessToken: string;
  user: IAuthenticatedUser;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumer: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumer?: string;
  userRole: number;
}

export interface IUserState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  authLoading: boolean;
}

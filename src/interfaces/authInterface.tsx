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
  email: string;
  username: string;
  name: string;
  password: string;
  roles: string[] | string;
}

export interface IUserState {
  user: IUser | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  register_success: boolean;
}

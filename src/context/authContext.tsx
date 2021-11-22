import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { ILogin, IRegister } from "../interfaces/authInterface";

import { config } from "../config/index";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: (_data: ILogin) => {},
  register: (_data: IRegister) => {},
  logout: () => {},
  error: null,
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  /* const [token, setToken] = useState(null);/*  */
  const [error, setError] = useState(null);

  //Register User
  const register = async (user: IRegister) => {
    console.log(user);
  };

  //Login User
  const login = async (user: ILogin) => {
    const res = await fetch(`${config.NEXT_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setUser(data.user);
      setIsAuthenticated(true);

      console.log("Res Ok" + data);
    } else {
      setError(data.error);
      setError(null);
    }
  };

  //Logout User
  const logout = async () => {
    console.log("logout");
    router.push("/account/login");
  };

  //Check if user is logged in

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

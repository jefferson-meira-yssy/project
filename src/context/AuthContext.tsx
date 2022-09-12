import { createContext, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  children?: React.ReactNode;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type SignInData = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: AuthContextType) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    // poderia fazer uma chamada de api
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nexauth.token", token, {
      maxAge: 68 * 68 * 1, // 1 hour
    });

    setUser(user);

    // router.push(RouterPath.HOME);
    console.log(router);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

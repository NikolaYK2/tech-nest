import {createContext, ReactNode} from "react";
import {AuthStore} from "@/features/auth/model/AuthStore.ts";

const authStoreInstance = new AuthStore();

export const AuthContext = createContext<{user: AuthStore}>({user: authStoreInstance});

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{user: authStoreInstance}}>
      {children}
    </AuthContext.Provider>
  );
};

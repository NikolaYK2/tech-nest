import {createContext, ReactNode} from "react";
import {AuthStore} from "@/features/auth/model/AuthStore.ts";

const authStoreInstance = new AuthStore();// вне компонента. создается только один раз,
// когда модуль загружается, и этот же экземпляр используется при каждом рендере AuthProvider.
// помогает избежать нежелательных ререндеров и сохраняет состояние AuthStore между рендерами.

export const AuthContext = createContext<{user: AuthStore}>({user: authStoreInstance});//явный тип контекста
// createContext<{user: AuthStore}>, что улучшает проверку типов и помогает избежать ошибок при работе с контекстом.

type AuthProviderProps = {
  children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{user: authStoreInstance}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

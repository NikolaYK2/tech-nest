import {createContext, ReactNode} from "react";
import {DeviceStore} from "@/features/shop/ui/device/model/DeviceStore.ts";

const deviceStoreInstance = new DeviceStore();

export const DeviceContext = createContext<{device: DeviceStore}>({device: deviceStoreInstance});

type AuthProviderProps = {
  children: ReactNode;
}

export const DeviceProvider = ({children}: AuthProviderProps) => {
  return (
    <DeviceContext.Provider value={{device: deviceStoreInstance}}>
      {children}
    </DeviceContext.Provider>
  );
};

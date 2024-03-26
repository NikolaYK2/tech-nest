import {useContext} from "react";
import {DeviceContext} from "@/features/shop/model/DeviceProvider.tsx";

export const useDevice = () => useContext(DeviceContext)


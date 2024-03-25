import {useContext} from "react";
import {DeviceContext} from "@/features/shop/ui/device/model/DeviceProvider.tsx";

export const useDevice = () => useContext(DeviceContext)


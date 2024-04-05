import {BrandBar} from "@/features/shop/ui/brand/BrandBar.tsx";
import {DeviceList} from "@/features/shop/ui/device/1-list/DeviceList.tsx";
import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {useEffect} from "react";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";

export const Shop = observer(() => {
  const {device} = useDevice();

  useEffect(() => {
    deviceApi.fetchBrands()
      .then(res => device.setBrands(res));
    deviceApi.fetchDevices()
      .then(res => device.setDevice(res.rows));
    deviceApi.fetchTypes()
      .then(res => device.setTypes(res));
  }, []);

  return (
    <div className={'containerApp'}>
      SHOP
      <BrandBar/>
      <DeviceList/>
    </div>
  );
});

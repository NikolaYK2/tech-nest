import {BrandBar} from "@/features/shop/ui/brand/BrandBar.tsx";
import {DeviceList} from "@/features/shop/ui/device/1-list/DeviceList.tsx";

export const Shop = () => {
  return (
    <div className={'containerApp'}>
      SHOP
      <BrandBar/>
      <DeviceList/>
    </div>
  );
};

import {BrandBar} from "@/features/shop/ui/BrandBar.tsx";
import {DeviceList} from "@/features/shop/ui/DeviceList.tsx";

export const Shop = () => {
  return (
    <div className={'containerApp'}>
      SHOP
      <BrandBar/>
      <DeviceList/>
    </div>
  );
};

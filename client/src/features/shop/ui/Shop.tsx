import {BrandBar} from "@/features/shop/ui/brand/BrandBar.tsx";
import {DeviceList} from "@/features/shop/ui/device/1-list/DeviceList.tsx";
import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {useEffect} from "react";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";
import {Pagination} from "@/common/components/pagination/Pagination.tsx";
import s from './Shop.module.scss'

export const Shop = observer(() => {
  const {device} = useDevice();


  useEffect(() => {
    deviceApi.fetchBrands()
      .then(res => device.setBrands(res));
    deviceApi.fetchTypes()
      .then(res => device.setTypes(res));
    // deviceApi.fetchDevices(null, null, null, null)
    //   .then(res => {
    //     device.setDevice(res.rows);
    //     device.setTotalCount(res.count)
    //   });

  }, []);

  useEffect(() => {
    if (device.getSelectedType && device.getSelectedBrand) {
      deviceApi.fetchDevices(device.getSelectedType?.id ?? null, device.getSelectedBrand?.id ?? null, device.getPage, 3)
        .then(res => {
          device.setDevice(res.rows);
          device.setTotalCount(res.count)
        });
    }

  }, [device.getPage, device.getSelectedType, device.getSelectedBrand]);


  return (
    <div className={`${s.containerShop} containerApp`}>
      SHOP
      <BrandBar/>
      <DeviceList/>
      <Pagination totalItemsCount={device.getTotalCount} pageSize={3} currentPage={1}/>
    </div>
  );
});

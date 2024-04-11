import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import s from './BrandBar.module.scss'
import {Type} from "@/features/shop/model/DeviceStore.ts";

export const BrandBar = observer(() => {
  const {device} = useDevice();
  const getAllDeviceHandele = () => {
    device.setSelectedBrand({} as Type)
  }
  return (
    <div className={s.containerBrand}>
      <div className={`${s.blockNav} containerApp`}>
        <button className={`${device.getSelectedBrand.id ? s.btn : s.isActive}`} onClick={getAllDeviceHandele}>All
        </button>
        <NavBar className={s.nav}
                variant={"link"}
                fullWidth={false}
                navigation={device.getBrands}
                selected={device.getSelectedBrand}
                setSelected={device.setSelectedBrand}
        />
      </div>
    </div>
  );
});

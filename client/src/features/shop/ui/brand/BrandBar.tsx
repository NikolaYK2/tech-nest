import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import s from './BrandBar.module.scss'

export const BrandBar = observer(() => {
  const {device} = useDevice();

  return (
    <div className={s.containerBrand}>
      <div className={`${s.blockNav} containerApp`}>
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

import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import s from './BrandBar.module.scss'

export const BrandBar = observer(() => {
  const {device} = useDevice();

  return (
    <div className={s.containerBrand}>
      <div className={`${s.a} containerApp`}>
        <div className={s.blockNav}>
          <NavBar className={s.nav}
                  variant={"link"}
                  fullWidth={false}
                  navigation={device.getBrands}
                  selected={device.getSelectedBrand}
                  setSelected={device.setSelectedBrand}
          />
          <div className={s.item}>

          </div>
        </div>
      </div>
    </div>
  );
});

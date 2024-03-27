import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {NavBar} from "@/common/components/navBar/NavBar.tsx";

export const BrandBar = observer(() => {
  const {device} = useDevice();

  return (
    <div>
      <div className={'containerApp'}>
        <NavBar navigation={device.getBrands}/>
      </div>
    </div>
  );
});

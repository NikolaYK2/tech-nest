import {DeviceType} from "@/features/shop/model/DeviceStore.ts";
import s from './DeviceItem.module.scss'
import {IconSVG} from "@/common/components/IconSvg/IconSVG.tsx";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "@/common/utils/constRout.ts";
import {useDevice} from "@/features/shop/lib/useDevice.ts";

type Props = {
  device: DeviceType
}
export const DeviceItem = ({device}: Props) => {
  const navigate = useNavigate();
  const {device: dev} = useDevice();
  const type = dev.getTypes.find(el => el.id === device.typeId)

  return (
    <section className={s.containerDeviceItem} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <div className={s.blockDevice}>
        <p className={s.name}>
          <span>{type ? type.name : 'not type'}</span>
          {device.name}
        </p>
        <div className={s.img}>
          <img src={import.meta.env.VITE_BASE_APP_URL + device.img} alt=""/>
        </div>
        <div className={s.price}>
          <p>${device.price}</p>
          <div className={s.basked}>
            <PolyElement variant={"link"} onClick={(e) => e.stopPropagation()} className={'basketApp'}><IconSVG
              name={"basket"}/></PolyElement>
          </div>
        </div>
      </div>
    </section>
  );
};

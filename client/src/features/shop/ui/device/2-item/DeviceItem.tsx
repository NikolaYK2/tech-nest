import {DeviceType} from "@/features/shop/model/DeviceStore.ts";
import s from './DeviceItem.module.scss'
import {IconSVG} from "@/common/components/IconSvg/IconSVG.tsx";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "@/common/utils/constRout.ts";

type Props = {
  device: DeviceType
}
export const DeviceItem = ({device}: Props) => {
  const navigate = useNavigate();
  return (
    <section className={s.containerDeviceItem} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <div className={s.blockDevice}>
        <p className={s.name}>{device.name}</p>
        <div className={s.img}>
          <img src={device.img} alt=""/>
        </div>
        <div className={s.price}>
          <p>{device.price}</p>
          <div className={s.basked}>
            <PolyElement variant={"link"} onClick={(e)=>e.stopPropagation()} className={'basketApp'}><IconSVG name={"basket"}/></PolyElement>
          </div>
        </div>
      </div>
    </section>
  );
};

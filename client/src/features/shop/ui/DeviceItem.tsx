import {DeviceType} from "@/features/shop/model/DeviceStore.ts";
import s from './DeviceItem.module.scss'
type Props = {
  device: DeviceType
}
export const DeviceItem = ({device}: Props) => {
  return (
    <section className={s.containerDeviceItem}>
      <p className={s.name}>{device.name}</p>
      <div className={s.img}>
        <img src={device.img} alt=""/>
      </div>
      <div className={s.price}>
        <p>{device.price}</p>
        <button>add</button>
      </div>
    </section>
  );
};

import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import s from './DeviceList.module.scss'
import {DeviceItem} from "@/features/shop/ui/device/2-item/DeviceItem.tsx";

export const DeviceList = observer(() => {
  const {device} = useDevice();
  return (
    <div className={` ${s.container}`}>
      <div className={`${s.blockDeviceList}`}>
        {device.getDevice.map(device =>
          <DeviceItem key={device.id} device={device}/>
        )}
      </div>
    </div>
  );
});

import s from './DevicePage.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {IconSVG} from "@/common/components/IconSvg/IconSVG.tsx";
import {observer} from "mobx-react-lite";
import {Details} from "@/features/shop/ui/device/3-page/detailes/Details.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";
import {DeviceType} from "@/features/shop/model/DeviceStore.ts";

export const DevicePage = observer(() => {

  const [device, setDevice] = useState<DeviceType | null>(null);
  const {id} = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      deviceApi.fetchOneDevice(+id)
        .then(res => setDevice(res))
    }
  }, []);

  if (!device) {
    return null
  }

  return (
    <section className={`containerApp paddingApp ${s.containerDevicePage}`}>
      <section className={s.productSummary}>
        <div className={s.img}>
          <img src={import.meta.env.VITE_BASE_APP_URL + device?.img} alt=""/>
        </div>
        <div className={s.item}>
          <div className={s.nameBrand}>
            <h2>{device?.name}</h2>
            <p>Apple</p>
          </div>
          <div className={s.describe}></div>
          <div className={s.price}>${device?.price}</div>
          <div className={s.basket}>
            <PolyElement className={`basketApp`} variant={"link"}><IconSVG name={"basket"}/></PolyElement>
          </div>
        </div>
      </section>
      <Details/>
    </section>
  );
});



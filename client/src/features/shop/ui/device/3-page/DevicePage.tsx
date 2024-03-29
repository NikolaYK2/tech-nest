import s from './DevicePage.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {IconSVG} from "@/common/components/IconSvg/IconSVG.tsx";
import {observer} from "mobx-react-lite";
import {Details} from "@/features/shop/ui/device/3-page/detailes/Details.tsx";

export const DevicePage = observer(() => {
  const devices = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
  }


  return (
    <section className={`containerApp paddingApp ${s.containerDevicePage}`}>
      <section className={s.productSummary}>
        <div className={s.img}>
          <img src={devices.img} alt=""/>
        </div>
        <div className={s.item}>
          <div className={s.nameBrand}>
            <h2>{devices.name}</h2>
            <p>Apple</p>
          </div>
          <div className={s.describe}></div>
          <div className={s.price}>${devices.price}</div>
          <div className={s.basket}>
            <PolyElement className={`basketApp`} variant={"link"}><IconSVG name={"basket"}/></PolyElement>
          </div>
        </div>
      </section>
      <Details/>
    </section>
  );
});



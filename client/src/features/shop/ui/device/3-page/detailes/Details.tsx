import s from './Details.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {observer} from "mobx-react-lite";
import {InfoType} from "@/features/shop/model/DeviceStore.ts";

type Props = {
  info: InfoType[]
}
export const Details = observer(({info}: Props) => {
  const {device} = useDevice()

  const productDetails = [
    {id: 1, name: 'Specification'},
    {id: 2, name: 'Description'}
  ]

  const description = {img: '', description: 'lalalalalalalalla'}


  return (
    <section className={s.productDetails}>

      <div className={s.nav}>
        <NavBar className={s.navDetails}
                navigation={productDetails}
                variant={"link"}
                selected={device.getSelectedDescribe}
                setSelected={device.setSelectedDescribe}
        />
      </div>
      <div className={s.details}>

        {<table className={s.table}>
          <tbody>
          {device.getSelectedDescribe.id === 1 && info.map(info =>
            <tr key={info.id}>
              <td className={s.td}>{info.title}</td>
              <td className={s.td}>{info.description}</td>
            </tr>
          )}
          </tbody>
        </table>}

        {device.getSelectedDescribe.id === 2 &&
            <div>
                <div>{description.img}</div>
              {description.description}
            </div>}

      </div>

    </section>);
});

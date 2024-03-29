import s from './Details.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {observer} from "mobx-react-lite";

export const Details = observer(() => {
  const {device} = useDevice()
  const productDetails = [
    {id: 1, name: 'Specification'},
    {id: 2, name: 'Description'}
  ]

  const Specification = [
    {id: 1, title: 'Operative memory', description: '5 gb'},
    {id: 2, title: 'Camera', description: '12 mp'},
    {id: 3, title: 'Processor', description: 'pentium 3'},
    {id: 4, title: 'numbers nucleus', description: '2'},
    {id: 5, title: 'accumulator', description: '4000'},
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
          {device.getSelectedDescribe.id === 1 && Specification.map(info =>
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

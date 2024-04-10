import DeviceImg from '@/assets/img/device/device.jpg'
import TypeImg from '@/assets/img/device/types.jpg'
import BrandImg from '@/assets/img/device/brands.jpg'
import {Create} from "@/common/components/modals/creat/Create.tsx";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";
import s from './Admin.module.scss'
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {DropMenu} from "@/common/components/dropMenu/DropMenu.tsx";
import {observer} from "mobx-react-lite";

export const Admin = observer(() => {
  const {device} = useDevice();

  const creationConfig = [
    {
      img: TypeImg,
      component: <Create headerText={'Add type'} fetchCallback={deviceApi.createType}/>,
      description: 'Add a new device type for better categorization'
    },
    {
      img: BrandImg,
      component: <Create headerText={'Add brande'} fetchCallback={deviceApi.createBrand}/>,
      description: 'Add a new brand for specific manufacturer searches'
    },
    {
      img: DeviceImg,
      component: <Create headerText={'Add device'}
                         dropMenu={[
                           {
                             id: 1,
                             component: <DropMenu name={device.getSelectedType?.name || 'Select type'}
                                                  options={device.getTypes}
                                                  setSelected={device.setSelectedType}
                             />
                           },
                           {
                             id: 2,
                             component: <DropMenu name={device.getSelectedBrand?.name || 'Select brand'}
                                                  options={device.getBrands}
                                                  setSelected={device.setSelectedBrand}
                             />
                           }
                         ]}

                         optionsDropMenu={[
                           {name: 'name', placeholder: 'name device', type: 'text'},
                           {name: 'price', placeholder: 'price device', type: 'number'},
                           {name: 'file', placeholder: '', type: 'file'},
                         ]}
                         isInfo={true}
                         fetchCallback={deviceApi.createDevice}
      />,
      description: 'Add a new device with detailed specifications'
    },
  ]

  return (
    <section className={`containerApp paddingApp`}>
      ADMIN
      <div className={s.blockCreate}>
        {creationConfig.map(el =>
          <label key={el.img} className={s.item}>
            <div className={s.img}>
              <img src={el.img} alt=""/>
            </div>
            <div className={s.component}>
              <p>{el.description}</p>
              {el.component}
            </div>
          </label>
        )}
      </div>
    </section>
  );
});

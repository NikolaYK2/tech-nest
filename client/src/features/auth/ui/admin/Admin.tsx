import DeviceImg from '@/assets/img/device/device.jpg'
import TypeImg from '@/assets/img/device/types.jpg'
import BrandImg from '@/assets/img/device/brands.jpg'
import {Create} from "@/common/components/modals/creat/Create.tsx";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";
import s from './Admin.module.scss'
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {DropMenu} from "@/common/components/dropMenu/DropMenu.tsx";

export const Admin = () => {
  const {device} = useDevice();
  const arrCreate = [
    {
      img: TypeImg,
      component: <Create name={'add type'} fetchCallback={deviceApi.createType}/>,
      description: 'Add a new device type for better categorization'
    },
    {
      img: BrandImg,
      component: <Create name={'Add brande'} fetchCallback={deviceApi.createBrand}/>,
      description: 'Add a new brand for specific manufacturer searches'
    },
    {
      img: DeviceImg,
      component: <Create name={'Add device'}
                         dropMenu={[
                           <DropMenu name={'Select type'} options={device.getTypes}/>,
                           <DropMenu name={'Select brand'} options={device.getBrands}/>
                         ]}
                         optionsDropMenu={[
                           {placeholder: 'name device', type: 'text'},
                           {placeholder: 'price device', type: 'text'},
                           {type: 'file'},
                         ]}
                         isInfo={true}
      />,
      description: 'Add a new device with detailed specifications'
    },
  ]

  return (
    <section className={`containerApp paddingApp`}>
      ADMIN
      <div className={s.blockCreate}>
        {arrCreate.map(el =>
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
};

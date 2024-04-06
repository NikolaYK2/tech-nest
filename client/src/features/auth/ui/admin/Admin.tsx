import {CreateDevice} from "@/common/components/modals/device/CreateDevice.tsx";
import DeviceImg from '@/assets/img/device/device.jpg'
import TypeImg from '@/assets/img/device/types.jpg'
import BrandImg from '@/assets/img/device/brands.jpg'
import {Create} from "@/common/components/modals/creat/Create.tsx";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";
import s from './Admin.module.scss'

export const Admin = () => {

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
      component: <CreateDevice name={'Add device'}/>,
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

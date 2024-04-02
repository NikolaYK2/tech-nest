import {CreateType} from "@/common/components/modals/type/CreateType.tsx";
import {CreateDevice} from "@/common/components/modals/device/CreateDevice.tsx";
import DeviceImg from '@/assets/img/device/device.jpg'
import TypeImg from '@/assets/img/device/types.jpg'
import s from './Admin.module.scss'

export const Admin = () => {

  const arrCreate = [
    {img: TypeImg, component: <CreateType name={'Add type'}/>, description:''},
    {img: DeviceImg, component: <CreateDevice name={'Add device'}/>, description:'Add a description, upload an image'}
  ]

  return (
    <section className={`containerApp paddingApp`}>
      ADMIN
      <div className={s.blockCreate}>
        {arrCreate.map(el =>
          <label className={s.item}>
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

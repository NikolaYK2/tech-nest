import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {observer} from "mobx-react-lite";
import {DropMenu} from "@/common/components/dropMenu/DropMenu.tsx";
import {useState} from "react";
import {v1} from "uuid";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import s from './CreateDevice.module.scss'

type DeviceDataType = {
  name: string,
  placeholder?: string,
  type: 'text' | 'file' | 'number',
}
type DescriptionDevice = {
  title: string,
  description: string,
  number: string,
}
type Props={
  name:string,
}
export const CreateDevice = observer(({name}:Props) => {
  const {device} = useDevice();
  const [info, setInfo] = useState<DescriptionDevice[]>([])
  const deviceData: DeviceDataType[] = [
    {name: 'Name device', placeholder: 'TV', type: 'text'},
    {name: 'price device', placeholder: '2500', type: 'number'},
    {name: 'device image', type: 'file'},
  ]

  const addInfoHandle = () => {
    setInfo([...info, {title: '', description: '', number: v1()}])
  }
  const deleteInfoHandle = (number: string) => {
    setInfo(info.filter(info => info.number !== number))
  }

  return (
    <ModalContainer name={name}>
      <DropMenu name={'Select type'} options={device.getTypes}/>
      <DropMenu name={'Select brand'} options={device.getBrands}/>

      {deviceData.map(input =>
        <fieldset key={input.name} className={s.container}>
          <label htmlFor={input.name.toLowerCase()}>
            {input.name}
          </label>
          {input.type === 'file'
            ? <input type="file" className={s.inputFIle}/>
            : <input className={'inputApp'} id={input.name.toLowerCase()} defaultValue={input.placeholder}/>
          }
        </fieldset>
      )}

      <button className={'btnApp'} onClick={addInfoHandle}>add info</button>
      {info.map(el =>
        <div key={el.number} className={s.containerInfo}>
          <input className={'inputApp'} type={'text'} placeholder={'name'}/>
          <input className={'inputApp'} type={'text'} placeholder={'describe'}/>
          <PolyElement variant={'error'} onClick={() => deleteInfoHandle(el.number)}>delete</PolyElement>
        </div>
      )}
    </ModalContainer>
  );
});

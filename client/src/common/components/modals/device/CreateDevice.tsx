import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {observer} from "mobx-react-lite";
import {DropMenu} from "@/common/components/dropMenu/DropMenu.tsx";
import s from "@/common/components/modals/type/CreateType.module.scss";
import {useState} from "react";
import {v1} from "uuid";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";

type DescriptionDevice = {
  title: string,
  description: string,
  number: string,
}
export const CreateDevice = observer(() => {
  const {device} = useDevice();
  const [info, setInfo] = useState<DescriptionDevice[]>([])
  const deviceData = [
    {name: 'Name device', placeholder: 'TV', type: 'text'},
    {name: 'price device', placeholder: '2500', type: 'number'},
    {name: 'device image', type: 'file'},
  ]

  const addInfoHandle = () => {
    setInfo([...info, {title: '', description: '', number: v1()}])
  }

  return (
    <ModalContainer name={'Add device'}>
      <DropMenu name={'Select type'} options={device.getTypes}/>
      <DropMenu name={'Select brand'} options={device.getBrands}/>
      {deviceData.map(input =>
        <fieldset className={s.container}>
          <label htmlFor={input.name.toLowerCase()}>
            {input.name}
          </label>
          {input.type === 'file'
            ? <input type="file" className={s.inputFIle}/>
            : <input className={'inputApp'} id={input.name.toLowerCase()} defaultValue={input.placeholder}/>
          }
        </fieldset>
      )}
      <PolyElement  className={'btnApp'} onClick={addInfoHandle}>add info</PolyElement>
      {info.map(el =>
        <div>
          <input type="text"/>
          <button>dell</button>
        </div>
      )}
    </ModalContainer>
  );
});

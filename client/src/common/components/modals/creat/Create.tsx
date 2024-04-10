import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {useInput} from "@/common/hooks/useInput.ts";
import {ReactElement, useEffect, useState} from "react";
import {v1} from "uuid";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import s from './Create.module.scss'
import {AxiosResponse} from "axios";
import {CreateType, deviceApi} from "@/features/shop/api/deviceApi.ts";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {observer} from "mobx-react-lite";

type DeviceDataType = {
  name: string,
  placeholder: string,
  type: 'text' | 'file' | 'number',
}
type InfoType = {
  title: string,
  description: string,
  number: string,
}
type DropMenuType = {
  id: number;
  component: ReactElement;
}

type fetchForm = (value: FormData) => Promise<AxiosResponse<any, any>>;
type fetchType = (value: CreateType) => Promise<AxiosResponse<any, any>>;

type Props = {
  headerText: 'Add type' | 'Add device' | 'Add brande',
  fetchCallback: fetchForm | fetchType,
  dropMenu?: DropMenuType[],
  optionsDropMenu?: DeviceDataType[],
  isInfo?: boolean,
}
export const Create = observer(({
                                  headerText,
                                  fetchCallback,
                                  dropMenu,
                                  isInfo = false,
                                  optionsDropMenu = [{name: 'name', placeholder: 'Enter text', type: 'text'}]
                                }: Props) => {

  const {device} = useDevice();
  const [info, setInfo] = useState<InfoType[]>([]);
  console.log(info)
  const {values, setValues, onChange, selectFile, file} = useInput({});

  const addDevice = async () => {

    try {
      if (headerText === 'Add device') {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('price', `${values.price}`);
        if (file) formData.append('img', file);
        formData.append('brandId', String(device.getSelectedBrand?.id));
        formData.append('typeId', String(device.getSelectedType?.id));
        formData.append('info', JSON.stringify(info));

        await (fetchCallback as fetchForm)(formData);
      } else {
        if (fetchCallback) {
          const res = await (fetchCallback as fetchType)(values)
          if (res) setValues({})
        }

      }

    } catch (e) {
      console.log(e)
    }

  }

  const addInfoHandle = () => {
    setInfo([...info, {title: '', description: '', number: v1()}])
  }
  const deleteInfoHandle = (number: string) => {
    setInfo(info.filter(info => info.number !== number))
  }

  const changeInfo = (key: string, value: string, number: string) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }


  useEffect(() => {
    deviceApi.fetchBrands()
      .then(res => device.setBrands(res));
    deviceApi.fetchTypes()
      .then(res => device.setTypes(res));
  }, []);


  return (
    <ModalContainer name={headerText} callback={addDevice}>

      {dropMenu?.map(dropMenu => <div key={dropMenu.id}>{dropMenu.component}</div>)}

      {optionsDropMenu?.map((input) =>
        <div key={input.placeholder}>
          <label htmlFor='type'>
            Type
          </label>
          {input.type === 'file'
            ? <input type="file" className={s.inputFIle} onChange={selectFile}/>
            : <input className={'inputApp'}
                     type={input.type}
                     name={input.name}
                     placeholder={input.placeholder}
                     value={values[input.name] || ''}
                     onChange={onChange}/>
          }
        </div>
      )}

      {isInfo &&
          <>
              <button className={'btnApp'} onClick={addInfoHandle}>add info</button>
            {info?.map((el) =>
              <div key={el.number} className={s.containerInfo}>
                <input className={'inputApp'}
                       type={'text'}
                       placeholder={'name'}
                       name={el.title}
                       value={el.title}
                       onChange={(e) => changeInfo('title', e.currentTarget.value, el.number)}/>

                <input className={'inputApp'}
                       type={'text'}
                       placeholder={'describe'}
                       name={el.description}
                       value={el.description}
                       onChange={(e) => changeInfo('description', e.currentTarget.value, el.number)}/>

                <PolyElement variant={'error'} onClick={() => deleteInfoHandle(el.number)}>delete</PolyElement>
              </div>
            )}
          </>
      }

    </ModalContainer>
  );
});



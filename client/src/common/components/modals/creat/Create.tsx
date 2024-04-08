import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {useInput} from "@/common/hooks/useInput.ts";
import {ReactElement, useState} from "react";
import {v1} from "uuid";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import s from './Create.module.scss'
import {AxiosResponse} from "axios";
import {CreateType} from "@/features/shop/api/deviceApi.ts";

type DeviceDataType = {
  name: string,
  placeholder: string,
  type: 'text' | 'file' | 'number',
}
type DescriptionDevice = {
  title: string,
  description: string,
  number: string,
}
type DropMenuType = {
  id: number;
  component: ReactElement;
}
type Props = {
  headerText: string,
  fetchCallback?: (value: CreateType) => Promise<AxiosResponse<any, any>>
  dropMenu?: DropMenuType[],
  optionsDropMenu?: DeviceDataType[],
  isInfo?: boolean,
}
export const Create = ({
                         headerText,
                         fetchCallback,
                         dropMenu,
                         isInfo = false,
                         optionsDropMenu = [{name: 'name', placeholder: 'Enter text', type: 'text'}]
                       }: Props) => {

  const [info, setInfo] = useState<DescriptionDevice[]>([]);

  const {values, setValues, onChange} = useInput({});

  const addType = async () => {
    console.log(values)
    try {

      if (fetchCallback) {
        await fetchCallback(values)
          .then(_ => setValues({}))
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

  return (
    <ModalContainer name={headerText} callback={addType}>

      {dropMenu?.map(dropMenu => <div key={dropMenu.id}>{dropMenu.component}</div>)}

      {optionsDropMenu?.map((input) =>
        <div key={input.placeholder}>
          <label htmlFor='type'>
            Type
          </label>
          {input.type === 'file'
            ? <input type="file" className={s.inputFIle}/>
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
                <input className={'inputApp'} type={'text'} placeholder={'name'}
                       name={`name${el.number}`} value={values[el.number]} onChange={onChange}/>
                <input className={'inputApp'} type={'text'} placeholder={'describe'}
                       name={`describe${el.number}`} value={values[el.number]} onChange={onChange}/>
                <PolyElement variant={'error'} onClick={() => deleteInfoHandle(el.number)}>delete</PolyElement>
              </div>
            )}
          </>
      }

    </ModalContainer>
  );
};

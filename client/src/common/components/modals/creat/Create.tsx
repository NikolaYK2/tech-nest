import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {useInput} from "@/common/hooks/useInput.ts";
import {useState} from "react";
import {v1} from "uuid";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import s from './Create.module.scss'

type DeviceDataType = {
  placeholder?: string,
  type: 'text' | 'file' | 'number',
}
type DescriptionDevice = {
  title: string,
  description: string,
  number: string,
}

type ValueType = {
  name: string,
}
type Props = {
  name: string,
  fetchCallback?: (value: ValueType) => Promise<any>,
  dropMenu?: any[],
  optionsDropMenu?: DeviceDataType[],
  isInfo?: boolean,
}
export const Create = ({
                         name,
                         fetchCallback,
                         dropMenu,
                         isInfo = false,
                         optionsDropMenu = [<input type='text'/>]
                       }: Props) => {
  const {value, onChange, setValue} = useInput('');

  const [info, setInfo] = useState<DescriptionDevice[]>([])

  const addType = async () => {
    fetchCallback && await fetchCallback({name: value})
      .then(_ => setValue(''))
  }

  const addInfoHandle = () => {
    setInfo([...info, {title: '', description: '', number: v1()}])
  }
  const deleteInfoHandle = (number: string) => {
    setInfo(info.filter(info => info.number !== number))
  }

  return (
    <ModalContainer name={name} callback={addType}>

      {dropMenu?.map(dropMenu => dropMenu)}

      {optionsDropMenu?.map(input =>
        <fieldset>
          <label htmlFor='type'>
            Type
          </label>
          {input.type === 'file'
            ? <input type="file" className={s.inputFIle}/>
            : <input className={'inputApp'}
                     type={input.type}
                     placeholder={input.placeholder}
                     value={value}
                     onChange={onChange}/>
          }
        </fieldset>
      )}

      {isInfo &&
          <>
              <button className={'btnApp'} onClick={addInfoHandle}>add info</button>
            {info?.map(el =>
              <div key={el.number} className={s.containerInfo}>
                <input className={'inputApp'} type={'text'} placeholder={'name'} value={value} onChange={onChange}/>
                <input className={'inputApp'} type={'text'} placeholder={'describe'} value={value} onChange={onChange}/>
                <PolyElement variant={'error'} onClick={() => deleteInfoHandle(el.number)}>delete</PolyElement>
              </div>
            )}
          </>
      }

    </ModalContainer>
  );
};

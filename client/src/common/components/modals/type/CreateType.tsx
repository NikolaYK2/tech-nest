import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import s from './CreateType.module.scss'
import {useInput} from "@/common/hooks/useInput.ts";
import {deviceApi} from "@/features/shop/api/deviceApi.ts";
import {observer} from "mobx-react-lite";

type Props = {
  name: string
}
export const CreateType = observer(({name}: Props) => {
  const {value, onChange, setValue} = useInput('');

  const addType = () => {
    deviceApi.createType({name: value})
      .then(_ => setValue(''))
  }

  return (
    <ModalContainer name={name} callback={addType}>
      <fieldset className={s.container}>
        <label htmlFor='type'>
          Type
        </label>
        <input className={'inputApp'} id='type' value={value} onChange={onChange}/>
      </fieldset>
    </ModalContainer>
  );
});

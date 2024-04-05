import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import s from './CreateType.module.scss'

type Props = {
  name: string
}
export const CreateType = ({name}: Props) => {

  const addType = () => {

  }
  return (
    <ModalContainer name={name}>
      <fieldset className={s.container}>
        <label htmlFor='type'>
          Type
        </label>
        <input className={'inputApp'} id='type' defaultValue='Laptop'/>
      </fieldset>
    </ModalContainer>
  );
};

import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import s from './CreateType.module.scss'

export const CreateType = () => {

  return (
    <ModalContainer name={'add type'}>
      <fieldset className={s.container}>
        <label htmlFor='type'>
          Type
        </label>
        <input className={'inputApp'} id='type' defaultValue='Laptop'/>
      </fieldset>
    </ModalContainer>
  );
};

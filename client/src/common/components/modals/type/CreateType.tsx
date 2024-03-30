import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";

export const CreateType = () => {

  return (
    <ModalContainer name={'add type'}>
      <fieldset>
        <label htmlFor='type'>
          Type
        </label>
        <input id='type' defaultValue='Laptop'/>
      </fieldset >
    </ModalContainer>
  );
};

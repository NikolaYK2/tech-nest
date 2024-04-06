import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {useInput} from "@/common/hooks/useInput.ts";

type ValueType = {
  name: string
}
type Props = {
  name: string
  fetchCallback: (value: ValueType) => Promise<any>
}
export const Create = ({name, fetchCallback}: Props) => {
  const {value, onChange, setValue} = useInput('');

  const addType = () => {
    fetchCallback({name: value})
      .then(_ => setValue(''))
  }

  return (
    <ModalContainer name={name} callback={addType}>
      <fieldset>
        <label htmlFor='type'>
          Type
        </label>
        <input className={'inputApp'} id='type' value={value} onChange={onChange}/>
      </fieldset>
    </ModalContainer>
  );
};

import {ChangeEvent, useState} from "react";

export type InputType={
  [key:string]:string,
}
export const useInput = (initValue: InputType) => {
  const [values, setValues] = useState<InputType>(initValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return {values, onChange, setValues}
};

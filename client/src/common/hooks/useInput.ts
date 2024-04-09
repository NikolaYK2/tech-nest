import {ChangeEvent, useState} from "react";

export type InputType = {
  [key: string]: string,
}
export const useInput = (initValue: InputType) => {
  const [values, setValues] = useState<InputType>(initValue);
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) setFile(e.currentTarget.files[0]);
  }

  return {values, onChange, setValues, file, selectFile};
};

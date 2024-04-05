import {ChangeEvent, useState} from "react";

export const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  return {value, onChange, setValue}
};

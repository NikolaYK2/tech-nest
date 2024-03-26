import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import s from './Auth.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {observer} from "mobx-react-lite";
import {useState} from "react";

type AuthType = {
  name: string,
  type: string,
  required?: boolean,
  validate?: (value: string) => true | "Passwords do not match";
}
export const Auth = observer(() => {
  const [switchForm, setSwitchForm] = useState(false)

  const {} = useAuth()
  const {handleSubmit, register, watch, formState: {errors}} = useForm();

  const loginData: AuthType[] = [
    {name: 'Username or email address *', type: 'text'},
    {name: 'Password *', type: 'password'},
    {name: 'Remember me', type: 'checkbox', required: false},
  ]
  const registerData: AuthType[] = [
    {name: 'Username *', type: 'text'},
    {name: 'Email address *', type: 'email'},
    {name: 'Password *', type: 'password'},
    {
      name: 'Repeat Password *',
      type: 'password',
      validate: (value: string) => value === watch('Password *') || "Passwords do not match"
    }
  ]

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data)
  }

  return (
    <div className={`containerApp ${s.containerAuth}`}>
      <div className={s.blockForm}>
        <div className={`${s.nameForm}`}>
          <h2 className={`${s.h2} ${switchForm && s.reversName}`}>{switchForm ? 'Register' : 'Login'}</h2>
        </div>
        <form className={`${s.form} ${switchForm && s.reversForm}`} onSubmit={handleSubmit(onSubmit)}>

          {(switchForm ? registerData : loginData).map(inp =>
            <label key={inp.name} className={`${s.input} ${inp.type === 'checkbox' ? s.flex : ''}`}>
              <p>{inp.name}</p>{errors[inp.name] && <span>{(errors[inp.name]?.message) as string}</span>}
              <input type={inp.type} autoComplete={'on'} {...register(inp.name,
                {required: inp.type === 'checkbox' ? false : 'Fill in the box', validate: inp.validate})}
              />
            </label>)}

          <PolyElement variant={"primary"}>{switchForm ? 'Register' : 'Log in'}</PolyElement>
        </form>
      </div>
      <button className={`${s.btn} ${switchForm && s.reversBtn}`} onClick={() => setSwitchForm(!switchForm)}>
        <p>or</p>
      </button>
    </div>
  );
});
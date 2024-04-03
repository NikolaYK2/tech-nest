import {SubmitHandler, useForm} from "react-hook-form";
import s from './Auth.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {authApi} from "@/features/auth/api/authApi.ts";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "@/common/utils/constRout.ts";

type AuthType = {
  label: string,
  name: "email" | "password" | "remember me" | "repeat password" | 'name',
  type?: string,
  required?: boolean,
  validate?: (value: string | boolean) => true | "Passwords do not match";
}
type FormType = {
  "name": string,
  "email": string,
  "password": string,
  "repeat password": string,
  'remember me': boolean
}
export const Auth = observer(() => {
  const [switchForm, setSwitchForm] = useState(false)
  const {user} = useAuth()

  const navigate = useNavigate();
  const {handleSubmit, register, watch, formState: {errors}} = useForm<FormType>();

  const loginData: AuthType[] = [
    {label: 'Username or email address *', name: 'email', type: 'text'},
    {label: 'Password *', name: 'password', type: 'password'},
    {label: 'Remember me', name: 'remember me', type: 'checkbox', required: false},
  ]
  const registerData: AuthType[] = [
    {label: 'Username *', name: 'name', type: 'text'},
    {label: 'Email address *', name: 'email', type: 'email'},
    {label: 'Password *', name: 'password', type: 'password'},
    {
      label: 'Repeat Password *',
      name: 'repeat password',
      type: 'password',
      validate: (value: string | boolean) => value === watch('password') || "Passwords do not match"
    }
  ]

  const onSubmit: SubmitHandler<FormType> = async data => {
    try {
      if (switchForm) {
        const res = await authApi.registration(data.email, data.password);
        user.setUser(res)
        user.setIsAuth(true)
      } else {
        const res = await authApi.login(data.email, data.password)
        user.setUser(res)
        user.setIsAuth(true)
      }
      navigate(SHOP_ROUTE)
    } catch (e: any) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className={`containerApp ${s.containerAuth}`}>
      <div className={s.blockForm}>
        <div className={`${s.nameForm}`}>
          <h2 className={`${s.h2} ${switchForm && s.reversName}`}>{switchForm ? 'Register' : 'Login'}</h2>
        </div>
        <form className={`${s.form} ${switchForm && s.reversForm}`} onSubmit={handleSubmit(onSubmit)}>

          {(switchForm ? registerData : loginData).map(inp =>
            <label key={inp.label} className={`${s.input} ${inp.type === 'checkbox' ? s.flex : ''}`}>
              <p>{inp.label}</p>{errors[inp.name] && <span>{(errors[inp.name]?.message) as string}</span>}

              <input className={'inputApp'} type={inp.type} autoComplete={'on'} {...register(inp.name,
                {
                  required: inp.type === 'checkbox' ? false : 'Fill in the box',
                  validate: inp.validate,
                })}
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
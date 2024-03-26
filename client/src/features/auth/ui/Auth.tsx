import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import s from './Auth.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {observer} from "mobx-react-lite";

type AuthType = {
  name: string,
  type: string,
  required?: boolean,
  validate?: (value: string) => true | "Passwords do not match";
}
export const Auth = observer(() => {

  const {user} = useAuth()
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
          <h2 className={`${s.h2} ${user.getIsAuth && s.reversName}`}>{user.getIsAuth ? 'Register' : 'Login'}</h2>
        </div>
        <form className={`${s.form} ${user.getIsAuth && s.reversForm}`} onSubmit={handleSubmit(onSubmit)}>

          {(user.getIsAuth ? registerData : loginData).map(inp =>
            <label key={inp.name} className={`${s.input} ${inp.type === 'checkbox' ? s.flex : ''}`}>
              <p>{inp.name}</p>{errors[inp.name] && <span>{(errors[inp.name]?.message) as string}</span>}
              <input type={inp.type} autoComplete={'on'} {...register(inp.name,
                {required: inp.type === 'checkbox' ? false : 'Fill in the box' , validate: inp.validate})}
              />
            </label>)}

          <PolyElement variant={"primary"}>{user.getIsAuth ? 'Register' : 'Log in'}</PolyElement>
        </form>
      </div>
      <button className={`${s.btn} ${user.getIsAuth && s.reversBtn}`} onClick={() => user.setIsAuth(!user.getIsAuth)}>
        <p>or</p>
      </button>
    </div>
  );
});
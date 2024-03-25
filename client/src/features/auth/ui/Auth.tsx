import {SubmitHandler, useForm} from "react-hook-form";
import s from './Auth.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {observer} from "mobx-react-lite";

export const Auth = observer(() => {

  const {user} = useAuth()

  const loginData = [
    {name: 'Username or email address *', type: 'text'},
    {name: 'Password *', type: 'password'}
  ]
  const regostrationData = [
    {name: 'Username *', type: 'text'},
    {name: 'Email address *', type: 'email'},
    {name: 'Password *', type: 'password'}
  ]


  const {handleSubmit, register} = useForm();
  const onSubmit: SubmitHandler<any> = dara => {
  }

  return (
    <div className={`containerApp ${s.containerAuth}`}>
      <div className={s.blockForm}>
        <div className={`${s.nameForm}`}>
          <h2 className={`${s.h2} ${user.getIsAuth && s.reversName}`}>{user.getIsAuth ? 'Register' : 'Login'}</h2>
        </div>
        <form className={`${s.form} ${user.getIsAuth && s.reversForm}`} onSubmit={handleSubmit(onSubmit)}>

          {(user.getIsAuth ? regostrationData : loginData).map(input =>
            <label key={input.name} className={s.input}>
              <p>{input.name}</p>
              <input {...register(input.type,
                {required: 'Fill in the box'})}
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
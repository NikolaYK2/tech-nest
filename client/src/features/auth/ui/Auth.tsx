import {SubmitHandler, useForm} from "react-hook-form";
import s from './Auth.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
export const Auth = () => {

  const loginData = [
    {name:'Username or email address *',type: 'text'},
    {name:'Password *',type: 'password'}
  ]
  const regostrationData = [
    {name:'Username *',type: 'text'},
    {name:'Email address *',type: 'email'},
    {name:'Password *',type: 'password'}
  ]

  const {handleSubmit, register} = useForm();
  const onSubmit: SubmitHandler<any> = dara => {
  }

  return (
    <div className={`containerApp ${s.containerAuth}`}>
      <div className={s.nameForm}>
        <h2 >Login</h2>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {loginData.map(input =>
          <label className={s.input} key={input.name}>
            <p>{input.name}</p>
            <input {...register(input.type,
              {required: 'Fill in the box'})}
            />
          </label>)}
        <PolyElement variant={"primary"}>Login</PolyElement>
      </form>
      {/*<button className={s.btn}>or</button>*/}
    </div>
  );
};
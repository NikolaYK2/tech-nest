import {useAuth} from "@/features/auth/lib/useAuth.ts";
import s from './NavBar.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";

//observer - mobx Отслеживает состояние
export const NavBar = observer(() => {

  const {user} = useAuth();

  const adminUser = ['Admin panel', 'Sign in']

  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        {
          user.getIsAuth
          ?
          adminUser.map(el => <li key={el} className={s.li}><PolyElement variant={"secondary"}>{el}</PolyElement></li>)
          :
          <li className={s.li}><PolyElement variant={"secondary"}>Authorisation</PolyElement></li>
        }
      </ul>
    </nav>
  );
});

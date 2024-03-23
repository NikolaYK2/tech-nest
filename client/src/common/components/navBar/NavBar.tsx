import {useAuth} from "@/features/auth/lib/useAuth.ts";
import s from './NavBar.module.scss'
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";
import {Logo} from "@/common/components/logo/Logo.tsx";

//observer - mobx Отслеживает состояние
export const NavBar = observer(() => {

  const {user} = useAuth();

  const adminUser = ['Admin panel', 'Sign in']

  return (
    <nav>
      <Logo/>
      <ul className={s.ul}>
        {user.getIsAuth
          ?
          adminUser.map(el => <li className={s.li}><PolyElement variant={"secondary"}>{el}</PolyElement></li>)
          :
          <li className={s.li}><PolyElement variant={"secondary"}>Authorisation</PolyElement></li>
        }
      </ul>
    </nav>
  );
});

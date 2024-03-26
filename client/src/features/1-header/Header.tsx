import s from './Header.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import {Logo} from "@/common/components/logo/Logo.tsx";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import {useState} from "react";

// const shopCategories = []

export const Header = observer(() => {
  const [navIsActive, setNavIsActive] = useState(false);

  const {user} = useAuth();
  const {device} = useDevice();

  const adminUser = [{name: 'Admin panel'}, {name: 'Sign in'}]
  const publicUser = [{name: 'Authorization'}]

  return (
    <header className={`${s.header}`}>
      <section className={`${s.blockAuth} containerApp`}>
        <Logo/>

        <NavBar variant={"secondary"} fullWidth={false} navigation={user.getIsAuth ? adminUser : publicUser}/>
      </section>
      <section className={s.blockFind}>
        <button>Shop By Department</button>
      </section>
      <section className={s.blockNav}>
        <NavBar className={s.nav} fullWidth={true} navigation={toJS(device.getTypes)}/>
      </section>
    </header>
  );
});

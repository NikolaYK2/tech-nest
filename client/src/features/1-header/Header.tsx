import s from './Header.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import {Logo} from "@/common/components/logo/Logo.tsx";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";

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
        <NavBar variant={"secondary"} navigation={user.getIsAuth ? adminUser : publicUser}/>
      </section>

      <section className={`${s.blockFind}`}>
        <div className={'containerApp'}>
          <PolyElement variant={"link"} onClick={() => setNavIsActive(!navIsActive)}>
            Shop By Department <span className={`${s.span} ${navIsActive && s.isActive}`}></span>
          </PolyElement>
        </div>
      </section>

      <section className={`containerApp`}>
        <div className={`${s.blockNav} ${navIsActive && s.activeNav}`}>
          <NavBar className={s.nav}
                  fullWidth={true}
                  navigation={device.getTypes}
                  selected={device.getSelectedType}
                  setSelected={device.setSelectedType}
          />
        </div>
      </section>
    </header>
  );
});

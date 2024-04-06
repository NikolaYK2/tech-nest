import s from './Header.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import {Logo} from "@/common/components/logo/Logo.tsx";
import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {useLocation} from "react-router-dom";
import {ADMIN_ROUTE} from "@/common/utils/constRout.ts";

export const Header = observer(() => {

  const {user} = useAuth();
  const {device} = useDevice();

  const [navIsActive, setNavIsActive] = useState(false);

  const location = useLocation();
  const ofShopBtn = location.pathname.includes(ADMIN_ROUTE) ? '' : s.activeShopBtn

  const adminUser = [{name: 'Admin panel'}, {name: 'Logout'}]
  const publicUser = [{name: 'Authorization'}]

  useEffect(() => {

    if (location.pathname === ADMIN_ROUTE) setNavIsActive(false);

  }, [location.pathname]);

  return (
    <header className={`${s.header}`}>
      <section className={`${s.blockAuth} containerApp`}>
        <Logo/>
        <NavBar variant={"secondary"} className={s.auth} navigation={user.getIsAuth ? adminUser : publicUser}/>
      </section>

      <section className={`${s.blockFind}`}>
        <div className={'containerApp'}>
          <PolyElement variant={"link"} className={`${s.shopBtn} ${ofShopBtn}`}
                       onClick={() => setNavIsActive(!navIsActive)}>
            Shop By Department <span className={`${s.span} ${navIsActive && s.isActive}`}></span>
          </PolyElement>
        </div>
      </section>

      <section className={`containerApp`}>
        <div className={`${s.blockNav} ${navIsActive && s.activeNav}`}>
          <NavBar className={s.nav}
                  variant={"primary"}
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

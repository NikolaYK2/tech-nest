import s from './Header.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";
import {Logo} from "@/common/components/logo/Logo.tsx";

export const Header = () => {

  return (
    <header className={`${s.header}`}>
      <section className={`${s.containerHeader} containerApp`}>
        <Logo/>

        <NavBar/>
      </section>
    </header>
  );
};

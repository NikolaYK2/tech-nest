import s from './Header.module.scss'
import {NavBar} from "@/common/components/navBar/NavBar.tsx";

export const Header = () => {

  return (
    <header className={`${s.header}`}>
      <section className={`${s.containerHeader} containerApp`}>
        <NavBar/>
      </section>
    </header>
  );
};

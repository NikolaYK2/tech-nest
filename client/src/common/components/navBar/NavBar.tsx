import s from './NavBar.module.scss'
import {ButtonProps, PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";

type Props= Omit<ButtonProps, 'as'>&{
  navigation: { id?: number; name: string; }[],
}
export const NavBar = observer(({navigation, className, fullWidth, variant}:Props) => {

  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${className}`}>
        {navigation.map(el => <li key={el.name} className={s.li}><PolyElement variant={variant} fullWidth={fullWidth}>{el.name}</PolyElement></li>)}
      </ul>
    </nav>
  );
});

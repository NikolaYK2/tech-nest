import s from './NavBar.module.scss'
import {ButtonProps, PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";
import {SelectedType} from "@/features/shop/model/DeviceStore.ts";

type Props = Omit<ButtonProps, 'as'> & {
  navigation: { id?: number; name: string; }[],
  selected?: SelectedType,
  setSelected?: (data: SelectedType) => void
}
export const NavBar = observer(({navigation, className, fullWidth, variant, selected, setSelected}: Props) => {

  const setSelectHandle = (el: SelectedType) => {
    setSelected && setSelected(el)
  }

  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${className}`}>
        {navigation.map(el =>
          <li key={el.name}
              className={`${s.li} ${selected && selected.id === el.id && s.activeLi}`}
              onClick={() => setSelectHandle(el)}>
            <PolyElement variant={variant}
                         className={`${selected && selected.id === el.id && s.asctivBtn}`}
                         fullWidth={fullWidth}>{el.name}</PolyElement>
          </li>)}
      </ul>
    </nav>
  );
});

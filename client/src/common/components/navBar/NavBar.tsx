import s from './NavBar.module.scss'
import {ButtonProps, PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";
import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {SelectedType} from "@/features/shop/model/DeviceStore.ts";

type Props = Omit<ButtonProps, 'as'> & {
  navigation: { id?: number; name: string; }[],
  selected?: SelectedType
}
export const NavBar = observer(({navigation, className, fullWidth, variant, selected,}: Props) => {
  const {device} = useDevice()
  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${className}`}>
        {navigation.map(el =>
          <li key={el.name}
              className={`${s.li} ${selected && selected.id === el.id && s.activeLi}`}
              onClick={() => device.setSelectedType(el)}>
            <PolyElement variant={variant}
                         className={`${selected && selected.id === el.id && s.asctivBtn}`}
                         fullWidth={fullWidth}>{el.name}</PolyElement>
          </li>)}
      </ul>
    </nav>
  );
});

import s from './NavBar.module.scss'
import {ButtonProps, PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";
import {SelectedType} from "@/features/shop/model/DeviceStore.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, AUTHORIZATION_ROUTE} from "@/common/utils/constRout.ts";


type Props = Omit<ButtonProps, 'as'> & {
  navigation: { id?: number; name: string; }[],
  selected?: SelectedType,
  setSelected?: (data: SelectedType) => void,
}
/**
 * @param {object} Props
 * @param {Array<{id: number, name: string}>} navigation - An array of navigation items.
 * @param {SelectedType} [selected] - The currently selected item.
 * @param {(data: SelectedType) => void} [setSelected] - Function to set the selected item.
 * @param {string} [className] - The CSS class name for the component.
 * @param {boolean} [fullWidth] - Whether the component should take up the full width of its container.
 * @param {'link' | 'primary' | 'secondary' | 'tertiary'} [variant] - The variant of the component.
 */
export const NavBar = observer(({
                                  navigation,
                                  className,
                                  fullWidth,
                                  variant,
                                  selected,
                                  setSelected,
                                }: Props) => {

  const navigate = useNavigate();
  const location = useLocation()

  const setSelectHandle = (el: SelectedType) => {
    setSelected && setSelected(el)
  }

  const admin = 'Admin panel'.toLowerCase();
  const signIn = 'Logout'.toLowerCase();

  const routes = {[admin]: ADMIN_ROUTE, [signIn]: AUTHORIZATION_ROUTE}

  const navigateClickHandle = (name: string) => {
    if (name && location.pathname !== name) navigate(routes[name.toLowerCase()])
  }

  const isActiveBtn = variant === 'primary' ? s.primaryIsActive :
    variant === 'link' ? s.tertiaryIsActive : ''

  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${className}`}>
        {navigation.map(el =>
          <li key={el.name}
              className={`${s.li} ${selected && selected.id === el.id && s[variant ? variant : '']}`}
              onClick={() => setSelectHandle(el)}>
            <PolyElement variant={variant}
                         className={`${selected && selected.id === el.id && isActiveBtn}`}
                         fullWidth={fullWidth}
                         onClick={() => navigateClickHandle(el.name)}
            >
              {el.name}
            </PolyElement>
          </li>)}
      </ul>
    </nav>
  );
});

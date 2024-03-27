import s from './NavBar.module.scss'
import {ButtonProps, PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";
import {SelectedType} from "@/features/shop/model/DeviceStore.ts";


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
export const NavBar = observer(({navigation, className, fullWidth, variant, selected, setSelected}: Props) => {

  const setSelectHandle = (el: SelectedType) => {
    setSelected && setSelected(el)
  }

  const isActiveBtn = variant ? s.black : ''

  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${className}`}>
        {navigation.map(el =>
          <li key={el.name}
              className={`${s.li} ${selected && selected.id === el.id && s[variant ? variant : '']}`}
              onClick={() => setSelectHandle(el)}>
            <PolyElement variant={variant}
                         className={`${selected && selected.id === el.id && isActiveBtn}`}
                         fullWidth={fullWidth}>{el.name}
            </PolyElement>
          </li>)}
      </ul>
    </nav>
  );
});

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from './DropMenu.module.scss'
import {Type} from "@/features/shop/model/DeviceStore.ts";

type Props = {
  name: string,
  options: Type[],
  setSelected: (type: Type)=>void,
}
export const DropMenu = ({name, options, setSelected}: Props) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={'btnApp'} aria-label="Customise options">{name}</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content  className={s.content} sideOffset={5}>
            {options.map(option =>
              <DropdownMenu.Item key={option.id} className={s.item} onClick={()=>setSelected(option)}>
                {option.name}
              </DropdownMenu.Item>
            )}
            <DropdownMenu.Arrow className={s.arrow}/>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

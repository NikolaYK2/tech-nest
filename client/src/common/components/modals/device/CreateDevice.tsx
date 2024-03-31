import {useDevice} from "@/features/shop/lib/useDevice.ts";
import {ModalContainer} from "@/common/components/modals/modalContainer/ModalContainer.tsx";
import {useState} from "react";
import {Type} from "@/features/shop/model/DeviceStore.ts";
import {observer} from "mobx-react-lite";
import {DropMenu} from "@/common/components/dropMenu/DropMenu.tsx";

type OptionsType = {
  [keys: string]: Type[];
}
export const CreateDevice = observer(() => {
  const {device} = useDevice();

  const routes: string[] = ['Select type'.toLowerCase(), 'Select brand'.toLowerCase()]
  const [selected, setSelected] = useState(routes[0]);
  console.log(selected)
  const selectedOptions: OptionsType = {
    [routes[0]]: device.getTypes,
    [routes[1]]: device.getBrands
  }


  return (
    <ModalContainer name={'Add device'}>
      <DropMenu name={'Select type'} options={device.getTypes}/>
    </ModalContainer>
  );
});

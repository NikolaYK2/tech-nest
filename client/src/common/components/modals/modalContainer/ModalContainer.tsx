import {ReactNode} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from './ModalContainer.module.scss';
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {observer} from "mobx-react-lite";

type Props = {
  name: string,
  description?: string,
  callback?: () => void,
  children: ReactNode
}

export const ModalContainer = observer(({name, children, callback}: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {name}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.containerBC}/>
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.title}>{name}</Dialog.Title>
          <Dialog.Description/>
          {children}
          <Dialog.Close asChild>
            <PolyElement className={s.buttonSave} variant={'tertiary'} onClick={callback}>save</PolyElement>
          </Dialog.Close>
          <Dialog.Close asChild aria-label='Close'>
            <PolyElement className={s.buttonClose} variant={'tertiary'}>Х</PolyElement>
          </Dialog.Close>
        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  )
})

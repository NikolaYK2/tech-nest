import {ReactNode} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from './ModalContainer.module.scss';
import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";

type Props = {
  name: string,
  description?: string
  children: ReactNode
}

export const ModalContainer = ({name, children}: Props) => {
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
              <PolyElement className={s.buttonSave}>save</PolyElement>
            </Dialog.Close>
            <Dialog.Close asChild aria-label='Close'>
              <PolyElement className={s.buttonClose}>Х</PolyElement>
            </Dialog.Close>
          </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>
  )
}

import {ReactNode} from "react";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  name: string,
  description?: string
  children: ReactNode
}

export const ModalContainer = ({name, children}: Props) => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          {name}
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay/>

          <Dialog.Content>
            <Dialog.Title>{name}</Dialog.Title>
            <Dialog.Description/>
            {children}
            <Dialog.Close/>
          </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

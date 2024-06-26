import {ComponentPropsWithoutRef, ElementType} from "react";
import s from './PolyElement.module.scss'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string,
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary' | 'error',
} & ComponentPropsWithoutRef<T>

export const PolyElement = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {as: Component = 'button', className, fullWidth, variant = 'primary', item, ...rest} = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}

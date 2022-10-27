import classNames from 'classnames'
import style from './style.module.scss'

export type Props = {
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (params: any) => void
  style?: React.CSSProperties
  primary?: boolean
}

export function Button({ type = 'button', ...props }: Props) {
  return (
    <button
      className={classNames(
        style.Button,
        { [style.Primary]: props.primary },
        props.className
      )}
      type={type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  )
}

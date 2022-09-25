import classNames from 'classnames'
import style from './style.module.scss'

export type Props = {
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (params: any) => void
  style?: React.CSSProperties
}

export function Button(props: Props) {
  return (
    <button
      className={classNames(style.Button, props.className)}
      type={props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  )
}

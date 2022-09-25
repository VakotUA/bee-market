import style from './style.module.scss'
import classNames from 'classnames'

export type Props = {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Primary(props: Props) {
  return (
    <span
      className={classNames(style.Primary, props.className)}
      style={props.style}
    >
      {props.children}
    </span>
  )
}

import classNames from 'classnames'
import style from './style.module.scss'

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

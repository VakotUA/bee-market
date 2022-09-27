import classNames from 'classnames'
import style from './style.module.scss'

export type Props = {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Container(props: Props) {
  return (
    <div
      className={classNames(style.Container, props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

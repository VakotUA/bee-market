import classNames from 'classnames'
import style from './style.module.scss'

export type Props = {
  value: number
  className?: string
  style?: React.CSSProperties
}

export function DiscountMark(props: Props) {
  return (
    <div
      className={classNames(style.Discount, props.className)}
      style={props.style}
    >
      Знижка {props.value}%
    </div>
  )
}

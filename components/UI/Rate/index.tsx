import style from './style.module.scss'
import classNames from 'classnames'

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export type Props = {
  value: number
  style?: React.CSSProperties
  className?: string
}

export function Rate(props: Props) {
  return (
    <div
      style={props.style}
      className={classNames(style.Rate, props.className)}
    >
      <Star value={props.value} />
      <Star value={props.value - 1} />
      <Star value={props.value - 2} />
      <Star value={props.value - 3} />
      <Star value={props.value - 4} />
    </div>
  )
}

export function Star({ value }: { value: number }) {
  return value >= 1 ? (
    <BsStarFill />
  ) : value == 0.5 ? (
    <BsStarHalf />
  ) : (
    <BsStar />
  )
}

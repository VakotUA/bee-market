import classNames from 'classnames'
import style from './style.module.scss'

export type Props = {
  className?: string
  onClick: () => void
  isActive: boolean
  style?: React.CSSProperties
}

export function BurgerMenu(props: Props) {
  return (
    <div
      className={classNames(
        style.BurgerMenu,
        {
          [style.Active]: props.isActive,
        },
        props.className
      )}
      style={props.style}
    >
      <button onClick={props.onClick}>
        <span />
        <span />
        <span />
      </button>
    </div>
  )
}

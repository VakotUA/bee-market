import classNames from 'classnames'
import { useState } from 'react'
import style from './style.module.scss'

export type Props = {
  value: string
  onSelect: (params: any) => void
  options: { value: string; lable: string }[]
  className?: string
  style?: React.CSSProperties
  hideOnSelect?: boolean
}

export function Select(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={classNames(style.Select, props.className)}>
      <div className={style.Value} onClick={() => setIsOpen(!isOpen)}>
        {props.options.find((item) => props.value === item.value)?.lable}
      </div>

      <ul className={classNames(style.Options, { [style.Open]: isOpen })}>
        {props.options?.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              props.hideOnSelect && setIsOpen(false)
              props.onSelect(item.value)
            }}
          >
            {item.lable}
          </li>
        ))}
      </ul>
    </div>
  )
}

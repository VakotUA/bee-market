import classNames from 'classnames'
import Link from 'next/link'
import style from './style.module.scss'

export type Props = {
  className?: string
  onClick?: () => void
  href: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function NavLink(props: Props) {
  return (
    <Link href={props.href}>
      <a
        className={classNames(style.Link, props.className)}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </a>
    </Link>
  )
}

import classNames from 'classnames'
import style from './style.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import NotFound from '../../../../assets/images/image_not_found.png'
import { ICategory } from '../../../../modules/models/Category'

export type Props = {
  category: ICategory
  className?: string
  style?: React.CSSProperties
}

export function Card(props: Props) {
  return (
    <div
      className={classNames(style.Card, props.className)}
      style={props.style}
    >
      <Link href={'/catalog/' + props.category.link}>
        <a>
          <Image
            src={props.category.image || NotFound.src}
            alt="category"
            style={{ opacity: props.category.image ? 1 : 0.25 }}
            layout="fill"
            className={style.Image}
          />

          <p>{props.category.name}</p>
        </a>
      </Link>
    </div>
  )
}

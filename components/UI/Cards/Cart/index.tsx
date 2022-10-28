import classNames from 'classnames'
import style from './style.module.scss'

import { DiscountMark } from '../../../UI/Discount'

import Image from 'next/image'
import Link from 'next/link'

import NotFound from '../../../../assets/images/image_not_found.png'

import { IProduct } from '../../../../modules/models/Product'

export type Props = {
  product: IProduct
  className?: string
  style?: React.CSSProperties
}

export function Card(props: Props) {
  // const {data} = useGetCategoryByProductId(props.product.id)
  const category = 'paint_materials' // .link
  const sub_category = 'paints' // .link

  return (
    <div
      className={classNames(style.Card, props.className)}
      style={props.style}
    >
      <Link
        href={{
          pathname: '/catalog/[category]/[sub_category]/[product]',
          query: {
            category: category,
            sub_category: sub_category,
            product: props.product.id,
          },
        }}
      >
        <a>
          <div className={style.Image}>
            <Image
              src={props.product.image || NotFound.src}
              alt="product"
              width={512}
              height={512}
              style={{ opacity: props.product.image ? 1 : 0.25 }}
              layout="responsive"
              objectPosition="top center"
              objectFit="contain"
            />

            {props.product.discount && (
              <DiscountMark
                value={props.product.discount}
                className={style.DiscountMark}
              />
            )}
          </div>

          <div className={style.Description}>
            <p>{props.product.name}</p>
            <div>
              <p>{props.product.id}</p>
              <span>
                <p>{props.product.price}грн</p>

                <p>{'total'}</p>
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

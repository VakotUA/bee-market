import classNames from 'classnames'
import style from './style.module.scss'

import { Button } from '../../../UI/Button'
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
  return (
    <div
      className={classNames(style.Card, props.className)}
      style={props.style}
    >
      <Link href={props.product.link}>
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

            {props.product.discount ? (
              <DiscountMark
                value={props.product.discount}
                className={style.DiscountMark}
              />
            ) : (
              ''
            )}
          </div>

          <div className={style.Description}>
            <p>{props.product.name}</p>
            <div>
              <p>{props.product.id}</p>
              <span>
                <p>{props.product.price}грн</p>
                <Button
                  className={style.Button}
                  onClick={(e) => {
                    e.preventDefault()
                    // TODO: some logic
                  }}
                >
                  В кошик
                </Button>
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

import classNames from 'classnames'
import style from './style.module.scss'

import { Button } from '../../../UI/Button'
import { DiscountMark } from '../../../UI/Discount'

import Image from 'next/image'
import Link from 'next/link'

import NotFound from '../../../../assets/images/image_not_found.png'

import { IProduct } from '../../../../modules/models/Product'
import { ICategory } from '../../../../modules/models/Category'

import { useAppDispatch } from '../../../../modules/store/hooks'
import { modalsSlice } from '../../../../modules/store/reducers/modalsSlice'
import { useGetProductDetailByIdQuery } from '../../../../api/productApi/product.api'

export type Props = {
  product: IProduct
  className?: string
  style?: React.CSSProperties
}

export function Card(props: Props) {
  const { product } = props
  const { data: details } = useGetProductDetailByIdQuery(product?.id)

  const dispatch = useAppDispatch()
  const { toggleCartModal } = modalsSlice.actions

  return (
    <div
      className={classNames(style.Card, props.className)}
      style={props.style}
    >
      <Link
        href={{
          pathname: '/catalog/1/[id]',
          query: {
            id: product?.id,
          },
        }}
      >
        <a>
          <div className={style.Image}>
            <Image
              src={details?.data?.photos[0]?.url || NotFound.src}
              alt="product"
              width={512}
              height={512}
              style={{ opacity: details?.data?.photos[0]?.url ? 1 : 0.25 }}
              layout="responsive"
              objectPosition="top center"
              objectFit="contain"
            />

            {/* {props.product.discount && (
              <DiscountMark
                value={props.product.discount}
                className={style.DiscountMark}
              />
            )} */}
          </div>

          <div className={style.Description}>
            <p>{product?.title}</p>
            <div>
              <p>{product?.id}</p>
              <span>
                <p>
                  {details?.data?.stockrecords?.price}
                  {details?.data?.stockrecords?.price_currency}
                </p>
                <Button
                  className={style.Button}
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch(toggleCartModal())
                    // TODO: logic
                  }}
                  primary
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

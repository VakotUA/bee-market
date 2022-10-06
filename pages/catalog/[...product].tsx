import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Filters } from '../../components/UI/Filters'

import ADSImage1 from '../../assets/images/ads_1.png'
import ADSImage2 from '../../assets/images/ads_2.png'
import ADSImage3 from '../../assets/images/ads_3.png'
import ADSImage4 from '../../assets/images/ads_4.png'
import ADS from '../../components/ADS'

import Form from '../../components/Form'
import { Container } from '../../components/Layout/Container'
import style from './style.module.scss'
import History from '../../components/History'
import Products from '../../components/Products'

import { IProduct } from '../../modules/models/Product'

import MOCImage from '../../assets/images/moc/moc_product.png'
import NotFoundImage from '../../assets/images/image_not_found.png'
import Image from 'next/image'
import { DiscountMark } from '../../components/UI/Discount'

export type Props = {
  product: IProduct
}

const moc_similarProducts: IProduct[] = [
  {
    id: '1234567890',
    name: 'same Product 1',
    price: 400,
  },
  {
    id: '0987654321',
    name: 'same Product 2',
    price: 500,
  },
  {
    id: '9826515230',
    name: 'same Product 3',
    price: 600,
  },
  {
    id: '2078723465',
    name: 'same Product 4',
    price: 700,
  },
  {
    id: '9017235818',
    name: 'same Product 5',
    price: 700,
  },
]

export default function SigleProductPage(props: Props) {
  const router = useRouter()

  return (
    <>
      <History />

      <Container className={style.Product}>
        <div className={style.Title}>
          {/* <h1>{data?.data?.name}</h1> */}
          <h1>ФАРБА-ГРУНТ УНІВЕРСАЛЬНА FARBEX 4.2КГ</h1>
        </div>

        <div className={style.Product}>
          <DiscountMark value={10} className={style.Discount} />

          <div className={style.Description}>
            <div className={style.Image}>
              {/* <Image src={data?.data?.image || } alt={data?.data?.name} layout='fill'/> */}
              <Image
                src={MOCImage}
                alt="ФАРБА-ГРУНТ УНІВЕРСАЛЬНА FARBEX 4.2К"
                layout="responsive"
              />
            </div>
            <div className={style.Parameters}>
              <div>
                <div>
                  <p>В наявності</p>
                  <div>
                    <button>Додати до обраних</button>
                    {/* <Rate /> */}
                  </div>
                </div>
                <div>
                  <p>00000000</p>
                  <p>Відгуків count</p>
                </div>
              </div>

              <div></div>

              <div></div>
            </div>
          </div>
          <div className={style.About}>
            <div>selection</div>
            <div>display</div>
          </div>
        </div>
      </Container>

      <ADS image_s={ADSImage2.src} image_l={ADSImage1.src} />
      <Products data={moc_similarProducts} />
      <ADS image_s={ADSImage3.src} image_l={ADSImage4.src} reverse />
      <Form />
    </>
  )
}

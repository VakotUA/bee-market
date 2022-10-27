import { useEffect, useState } from 'react'

import classNames from 'classnames'
import style from './style.module.scss'

import Link from 'next/link'

import { IProduct } from '../../modules/models/Product'
import Products from '../Products'

import MOCImage from '../../assets/images/moc/moc_product.png'

import { Container } from '../Layout/Container'
import { Button } from '../UI/Button'

const moc_categories = [
  {
    id: 1,
    lable: 'Ручний інструмент',
  },
  {
    id: 2,
    lable: 'Лакофарбові матеріали',
  },
  {
    id: 3,
    lable: 'Штукатурки та шпаклівки',
  },
  {
    id: 4,
    lable: 'Витратні матеріали',
  },
]
const moc_products = [
  {
    id: '1111111111',
    name: 'qДиск для тріммера',
    link: '/123',
    price: 150,
    discount: 1,
  },
  {
    id: '2222222222',
    name: 'wДиск для тріммера Gartner 255x25,4 мм 40',
    link: '/123',
    price: 250,
    discount: 5,
  },
  {
    id: '33333333333',
    name: 'eДиск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    image: MOCImage.src,
    link: '/123',
    price: 350,
    discount: 3,
  },
  {
    id: '44444444444',
    name: 'rДиск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    image: MOCImage.src,
    link: '/123',
    price: 550,
    discount: 2,
  },
  {
    id: '55555555555',
    name: '',
    image: MOCImage.src,
    link: '/123',
    price: 450,
    discount: 7,
  },
  {
    id: '66666666666',
    name: 'tДиск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    link: '/123',
    price: 950,
    discount: 4,
  },
  {
    id: '77777777777',
    name: 'yДиск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    link: '/123',
    price: 750,
    discount: 9,
  },
  {
    id: '888888888888',
    name: 'uДиск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    image: MOCImage.src,
    link: '/123',
    price: 850,
    discount: 15,
  },
  {
    id: '999999999999',
    name: 'iДиск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців',
    link: '/123',
    price: 650,
    discount: 7,
  },
  {
    id: '000000000000',
    name: 'oДиск для тріммера Gartner 255x25,4',
    image: MOCImage.src,
    link: '/123',
    price: 50,
    discount: 8,
  },
]

export default function Discount() {
  const defaultData = moc_products
  const [data, setData] = useState<IProduct[]>(defaultData)

  // filter [0] = filter by all categories
  // filter [category_id] = filter by specific category
  const [filter, setFilter] = useState(0)

  // useEffect(() => {}, [defaultData, setFilteredData, filter])

  return (
    <section className={style.Discount}>
      <Container className={style.Content}>
        <div className={style.Title}>
          <div>
            <p>%</p>
            <p>%</p>
            <p>%</p>
            <h2>Акційні товари</h2>
          </div>
        </div>

        <div className={style.Filters}>
          <ul>
            <li
              className={classNames({ [style.Active]: filter === 0 })}
              onClick={() => setFilter(0)}
            >
              Всі
            </li>
            {moc_categories.map((item) => (
              <li
                className={classNames({ [style.Active]: filter === item.id })}
                onClick={() => setFilter(item.id)}
                key={item.id}
              >
                {item.lable}
              </li>
            ))}
          </ul>
        </div>

        <Products data={data} sort />

        <div className={style.Button}>
          <div />
          <Button className={style.Button} primary>
            <Link href="/">БІЛЬШЕ ТОВАРІВ</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

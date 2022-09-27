import { useEffect, useState } from 'react'

import classNames from 'classnames'
import style from './style.module.scss'

import Link from 'next/link'

import { IProduct } from '../../modules/models/Product'

import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import MOCImage from '../../assets/images/moc/moc_product.png'

import { UI } from '../UI'
const { Container, Card, Button, Select } = UI
const { ProductCard } = Card

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
    name: 'Диск для тріммера',
    link: '/123',
    price: 150,
    discount: 1,
  },
  {
    id: '2222222222',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40',
    link: '/123',
    price: 250,
    discount: 5,
  },
  {
    id: '33333333333',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    image: MOCImage.src,
    link: '/123',
    price: 350,
    discount: 3,
  },
  {
    id: '44444444444',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
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
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    link: '/123',
    price: 950,
    discount: 4,
  },
  {
    id: '77777777777',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    link: '/123',
    price: 750,
    discount: 9,
  },
  {
    id: '888888888888',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448)',
    image: MOCImage.src,
    link: '/123',
    price: 850,
    discount: 15,
  },
  {
    id: '999999999999',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців',
    link: '/123',
    price: 650,
    discount: 7,
  },
  {
    id: '000000000000',
    name: 'Диск для тріммера Gartner 255x25,4',
    image: MOCImage.src,
    link: '/123',
    price: 50,
    discount: 8,
  },
]

export default function Discount() {
  const defaultData = moc_products
  const [filteredData, setFilteredData] = useState<IProduct[]>(defaultData)
  const [sortedData, setSortedData] = useState<IProduct[]>(filteredData)

  // filter [0] = filter by all categories
  // filter [category_id] = filter by specific category
  const [filter, setFilter] = useState(0)

  // sorting {
  // order: [Ціна, Назва, Знижка...],
  // direction: [за зростанням, за спаданням]
  // }
  const [sorting, setSorting] = useState<{
    order: keyof IProduct
    direction: boolean
  }>({ order: 'name', direction: true })

  // useEffect(() => {}, [defaultData, setFilteredData, filter])

  useEffect(() => {
    setSortedData([
      ...(sorting.direction
        ? filteredData.sort(
            (a, b) => (a[sorting.order] as any) - (b[sorting.order] as any)
          )
        : filteredData.sort(
            (b, a) => (a[sorting.order] as any) - (b[sorting.order] as any)
          )),
    ])
  }, [filteredData, setSortedData, sorting])

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

        <div className={style.Sorting}>
          <div />
          <div>
            <p>Сортування:</p>

            <Select
              className={style.Select}
              options={[
                {
                  value: 'name',
                  lable: 'Назва',
                },
                {
                  value: 'price',
                  lable: 'Ціна',
                },
                {
                  value: 'discount',
                  lable: 'Знижка',
                },
              ]}
              value={sorting.order}
              onSelect={(newValue: keyof IProduct) =>
                setSorting({ ...sorting, order: newValue })
              }
              hideOnSelect
            />

            <button
              onClick={() =>
                setSorting({ ...sorting, direction: !sorting.direction })
              }
            >
              {sorting.direction ? <BiChevronUp /> : <BiChevronDown />}
            </button>
          </div>
        </div>

        <div className={style.List}>
          <ul>
            {sortedData.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} className={style.Card} />
              </li>
            ))}
          </ul>
        </div>

        <div className={style.Button}>
          <div />
          <Button className={style.Button}>
            <Link href="/">БІЛЬШЕ ТОВАРІВ</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

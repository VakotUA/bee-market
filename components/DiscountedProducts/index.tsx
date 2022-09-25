import { Container } from '../UI/Container'
import { Button } from '../UI/Button'
import { DiscountMark } from '../UI/Discount'
import { Select } from '../UI/Select'
import style from './style.module.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import { BiChevronUp, BiChevronDown } from 'react-icons/bi'

import MOCImage from '../../assets/images/moc/moc_product.png'
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
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    link: '/123',
    price: 150,
    discount: 1,
  },
  {
    id: '2222222222',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    link: '/123',
    price: 250,
    discount: 5,
  },
  {
    id: '33333333333',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    image: MOCImage.src,
    link: '/123',
    price: 350,
    discount: 3,
  },
  {
    id: '44444444444',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    image: MOCImage.src,
    link: '/123',
    price: 550,
    discount: 2,
  },
  {
    id: '55555555555',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    image: MOCImage.src,
    link: '/123',
    price: 450,
    discount: 7,
  },
  {
    id: '66666666666',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    link: '/123',
    price: 950,
    discount: 4,
  },
  {
    id: '77777777777',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    link: '/123',
    price: 750,
    discount: 9,
  },
  {
    id: '888888888888',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    image: MOCImage.src,
    link: '/123',
    price: 850,
    discount: 0,
  },
  {
    id: '999999999999',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    link: '/123',
    price: 650,
    discount: 7,
  },
  {
    id: '000000000000',
    name: 'Диск для тріммера Gartner 255x25,4 мм 40 ТВЗ зубців (40023448) ',
    image: MOCImage.src,
    link: '/123',
    price: 50,
    discount: 8,
  },
]
interface IProduct {
  id: string | number
  name: string
  image?: string
  link: string
  price: number
  discount: number | 0
}

export default function Discount() {
  const defaultData = moc_products
  const [data, setData] = useState<IProduct[]>(defaultData)

  // filter [0] = filter by all categories
  // filter [category_id] = filter by specific category
  const [filter, setFilter] = useState(0)

  // sorting {
  // order: [Ціна, кількість, популярність...],
  // direction: [за зростанням, за спаданням]
  // }
  const [sorting, setSorting] = useState<{
    order: keyof IProduct
    direction: boolean
  }>({ order: 'name', direction: true })

  // useEffect(() => {}, [defaultData, setData, filter])

  useEffect(() => {
    setData([
      ...(sorting.direction
        ? data.sort(
            (a, b) => (a[sorting.order] as any) - (b[sorting.order] as any)
          )
        : data.sort(
            (b, a) => (a[sorting.order] as any) - (b[sorting.order] as any)
          )),
    ])
  }, [data, setData, sorting])

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
            {data.map((item) => (
              <li key={item.id} className={style.Card}>
                <Link href={item.link}>
                  <a>
                    <div
                      className={style.Image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <DiscountMark
                        value={item.discount}
                        className={style.DiscountMark}
                      />
                    </div>

                    <div className={style.Description}>
                      <p>{item.name}</p>
                      <div>
                        <p>{item.id}</p>
                        <span>
                          <p>{item.price}грн</p>
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

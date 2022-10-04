import { IProduct } from '../../modules/models/Product'
import style from './style.module.scss'
import { Card } from '../UI/Cards/Product'
import { Container } from '../Layout/Container'
import { useState, useEffect } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { Select } from '../UI/Select'

export type Props = {
  data?: IProduct[]
}

export default function Products(props: Props) {
  const [data, setData] = useState(props.data)

  // order: [Ціна, Назва, Знижка...],
  // direction: [за зростанням, за спаданням]
  const [sorting, setSorting] = useState<{
    order: keyof IProduct
    direction: boolean
  }>({ order: 'name', direction: true })

  useEffect(() => {
    if (!props.data) return

    setData([
      ...(sorting.direction
        ? props.data.sort(
            (a, b) => (a[sorting.order] as any) - (b[sorting.order] as any)
          )
        : props.data.sort(
            (b, a) => (a[sorting.order] as any) - (b[sorting.order] as any)
          )),
    ])
  }, [props.data, setData, sorting])

  if (!data)
    return (
      <section className={style.Products}>
        <Container>
          <h1 style={{ fontSize: 48, fontWeight: 800 }}>
            No products found :(
          </h1>
        </Container>
      </section>
    )

  return (
    <section className={style.Products}>
      <Container>
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
              <li key={item.id}>
                <Card product={item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

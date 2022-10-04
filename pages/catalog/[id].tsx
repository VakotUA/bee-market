import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Discount from '../../components/Promotional'
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

export interface IFilter {
  title: string
  values: {
    value: string
    selected: boolean
  }[]
}

const moc_filters: IFilter[] = [
  {
    title: 'foo',
    values: [
      {
        value: 'bar',
        selected: true,
      },
    ],
  },
  {
    title: 'foo',
    values: [
      {
        value: 'bar',
        selected: false,
      },
    ],
  },
  {
    title: 'foo',
    values: [
      {
        value: 'bar',
        selected: true,
      },
    ],
  },
  {
    title: 'foo',
    values: [
      {
        value: 'bar',
        selected: false,
      },
      {
        value: 'foobar',
        selected: true,
      },
    ],
  },
  {
    title: 'foo',
    values: [
      {
        value: 'bar',
        selected: false,
      },
      {
        value: 'foobar',
        selected: true,
      },
    ],
  },
]

export default function CategoryPage() {
  const router = useRouter()
  const [filters, setFilters] = useState<IFilter[]>(moc_filters)

  // const {data} = getCategoryByNameQuery(router.query('category') )

  // useEffect((
  //   TODO: filtering
  // ) => {},[setFilters, data, filters])

  return (
    <>
      <History />
      <Container>
        <div className={style.Title}>
          {/* <h1>{data?.data?.name}</h1> */}
          <h1>Лакофарбові матеріали</h1>
        </div>
      </Container>
      <Filters filters={filters} setFilters={setFilters} />

      {/* <ADS image_s={ADSImage2.src} image_l={ADSImage1.src} /> */}
      <Products />
      <ADS image_s={ADSImage3.src} image_l={ADSImage4.src} reverse />
      <Form />
    </>
  )
}

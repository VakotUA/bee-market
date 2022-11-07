import { useRouter } from 'next/router'
import { useState } from 'react'
import { Filters } from '../../components/UI/Filters'

import ADSImage3 from '../../assets/images/banner/Banner_3.png'
import ADSImage4 from '../../assets/images/banner/Banner_4.png'
import ADS from '../../components/ADS'

import Form from '../../components/Form'
import { Container } from '../../components/Layout/Container'
import style from './style.module.scss'
import History from '../../components/History'
import Products from '../../components/Products'
import {
  useGetAllCategoriesQuery,
  useGetProductsBySlugQuery,
} from '../../api/categoryApi/category.api'

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
  const [filters, setFilters] = useState<IFilter[]>(moc_filters)

  const router = useRouter()
  const slug = router?.query?.slug

  const { data: categoriesData } = useGetAllCategoriesQuery('')
  const { data: productsData } = useGetProductsBySlugQuery(slug)

  const category = categoriesData?.find((x) => x.slug === slug)

  // useEffect(() => {
  //   TODO: filtering
  // }, [setFilters, data, filters])

  return (
    <>
      <History path={['Головна', 'Каталог', category?.name]} />
      <Container>
        <div className={style.Title}>
          <h1>{category?.name}</h1>
        </div>
      </Container>
      <Filters filters={filters} setFilters={setFilters} />
      <Products data={productsData} />
      <ADS image_s={ADSImage3.src} image_l={ADSImage4.src} reverse />
      <Form />
    </>
  )
}

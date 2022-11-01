import { useRouter } from 'next/router'
import { useState } from 'react'

import ADSImage1 from '../../assets/images/banner/banner_1.png'
import ADSImage2 from '../../assets/images/banner/banner_2.png'
import ADSImage3 from '../../assets/images/banner/banner_3.png'
import ADSImage4 from '../../assets/images/banner/banner_4.png'
import ADS from '../../components/ADS'

import Form from '../../components/Form'
import { Container } from '../../components/Layout/Container'
import style from './style.module.scss'
import History from '../../components/History'
import Products from '../../components/Products'

import { IProduct } from '../../modules/models/Product'

import NotFoundImage from '../../assets/images/image_not_found.png'
import Image from 'next/image'
import { DiscountMark } from '../../components/UI/Discount'
import { Button } from '../../components/UI/Button'
import { Rate } from '../../components/UI/Rate'
import Link from 'next/link'
import classNames from 'classnames'

import { useAppDispatch } from '../../modules/store/hooks'
import { modalsSlice } from '../../modules/store/reducers/modalsSlice'

const moc_product: { data: IProduct } = {
  data: {
    id: '000000000',
    name: 'ФАРБА-ГРУНТ УНІВЕРСАЛЬНА FARBEX 4.2КГ',
    price: 308,
    count: 10,
    discount: 10,
    reviews: [
      {
        id: '00124124',
        author_id: '124124635372',
        text: 'Review 1',
        rating: 3,
      },
      {
        id: '12546215',
        author_id: '246125123537',
        text: 'Review 2',
        rating: 5,
      },
      {
        id: '1254612412215',
        author_id: '24612125155123537',
        text: 'Review 3',
        rating: 5,
      },
    ],
  },
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

export default function SigleProductPage() {
  const data = moc_product
  const [count, setCount] = useState<number>(1)
  const [active, setActive] = useState<string>('')

  const dispatch = useAppDispatch()
  const { toggleCartModal } = modalsSlice.actions

  const calculateRating = () => {
    if (!data?.data?.reviews) return 0

    const total = data?.data?.reviews.reduce(
      (previous, current) => previous + current?.rating,
      0
    )
    const average = total / data?.data?.reviews.length

    // round to 0.5 step
    return Math.round(average * 2) / 2
  }

  return (
    <>
      <History />

      <Container className={style.Product}>
        <div className={style.Title}>
          <h1>{data?.data?.name}</h1>
        </div>

        <div className={style.Product}>
          {data?.data?.discount && (
            <DiscountMark
              value={data?.data?.discount}
              className={style.Discount}
            />
          )}

          <div className={style.Description}>
            <div className={style.Image}>
              <Image
                src={data?.data?.image || NotFoundImage}
                alt={data?.data?.name}
                style={{ opacity: data?.data?.image ? 1 : 0.25 }}
                layout="responsive"
              />
            </div>
            <div className={style.Parameters}>
              <div>
                <div>
                  {data?.data?.count ? (
                    <p style={{ color: '#8cbf23' }}>В наявності</p>
                  ) : (
                    <p style={{ color: '#f76b53' }}>Немає в наявності</p>
                  )}
                  <div>
                    <button>Додати до обраних</button>

                    <Rate value={calculateRating()} />
                  </div>
                </div>

                <div>
                  <p>00000000</p>
                  <p>Відгуків {data?.data?.reviews?.length || 0}</p>
                </div>
              </div>

              <div>
                <p>
                  308<span>грн./шт.</span>
                </p>

                <div>
                  <div className={style.Input}>
                    x
                    <div>
                      <input
                        type="number"
                        value={count}
                        onChange={(e) =>
                          setCount(
                            Math.min(
                              Math.max(Math.trunc(Number(e.target.value)), 1),
                              999
                            )
                          )
                        }
                      />
                      {/* <span>шт.</span> */}
                    </div>
                  </div>

                  <Button
                    className={classNames(style.Button, {
                      [style.Disable]: !data?.data?.count,
                    })}
                    onClick={() => {
                      dispatch(toggleCartModal())
                      // TODO: logic
                    }}
                    primary
                  >
                    В кошик
                  </Button>
                </div>
              </div>

              <p>
                <Link href="/return">Умови обміну і повернення товару...</Link>
              </p>

              <div>
                <Line title="foo" value="bar" />
                <Line title="foofoofoofoofoo" value="bar" />
                <Line title="foo" value="barbarbarbarbarbar" />
                <Line title="foo" value="bar" />
                <Line title="foo" value="bar" />
                <Line title="foofoofoofoofoofoofoofoofoofoofoofoofoofoofoo" />
                <Line title="foo" />
                <Line
                  title="foofoofoofoofoofoofoofoofoofoofoofoofoofoofoo"
                  value="barbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbar"
                />
                <Line title="foo" value="bar" />
                <Line title="foo" value="bar" />
                <Line
                  title="foo"
                  value="barbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbarbar"
                />
              </div>
            </div>
          </div>

          {/* TODO: to component */}
          <div className={style.Select}>
            <div
              className={classNames({
                [style.Active]: active == '' || active == 'About',
              })}
              onClick={() => setActive('About')}
            >
              Основна інформація
            </div>
            <div
              className={classNames({ [style.Active]: active == 'Values' })}
              onClick={() => setActive('Values')}
            >
              Характеристики
            </div>
            <div
              className={classNames({ [style.Active]: active == 'Reviews' })}
              onClick={() => setActive('Reviews')}
            >
              Відгуки ({data?.data?.reviews?.length})
            </div>
          </div>

          <div className={style.Selected}>
            {(active == '' || active == 'About') && (
              <div className={style.About}>
                <div>
                  <h4>Lorem, ipsum:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, eveniet ut quam sed doloremque in aperiam molestias
                    doloribus iusto quas praesentium tenetur voluptates
                    quibusdam quidem quasi fuga temporibus harum dolores illo?
                    Alias magnam, error facere neque delectus maiores dicta sint
                    ut magni cum nostrum, fuga fugit sunt? Excepturi, molestias
                    incidunt.
                  </p>
                </div>
                <div>
                  <h4>Lorem ipsum dolor sit:</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, iure.
                  </p>
                </div>
                <div>
                  <h4>Lorem:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi consectetur quaerat cupiditate reiciendis maxime,
                    iste debitis sapiente, quisquam quam repellendus odio
                    ducimus provident aspernatur praesentium. Doloremque quis
                    vel magni, ut quidem deleniti. Quasi nesciunt enim provident
                    explicabo tenetur dolorem aperiam est deserunt, soluta
                    vitae. Repellendus quae, in ea facere harum dolorum, alias
                    sed nostrum commodi laudantium recusandae ipsa. Aspernatur
                    ratione, hic sint voluptatem qui quibusdam ullam, expedita
                    animi iusto earum molestias eligendi officia ducimus porro
                    vero vel nesciunt provident error, fugiat voluptatibus.
                    Expedita sapiente, delectus ducimus eum quaerat cumque!
                    Facilis possimus enim vel cupiditate voluptate accusantium
                    eveniet illo consectetur dignissimos pariatur! Quibusdam
                    odio debitis quaerat soluta dolore, quod, ipsum accusamus
                    error aut tenetur, molestiae inventore nemo aspernatur?
                    Animi sequi dolores delectus molestias officia. Amet odio
                    architecto in! Ea sequi labore cumque temporibus amet
                    maxime! Dicta pariatur molestias harum magni assumenda
                    numquam nemo ducimus, praesentium aspernatur minima
                    similique id quisquam nesciunt ut sapiente itaque quis atque
                    dolore excepturi alias quos! Eius culpa adipisci, tenetur
                    blanditiis commodi quod non, excepturi voluptatum
                    consequuntur nobis quisquam eos ullam? Esse ut, sapiente
                    nulla quaerat vero accusamus possimus quasi voluptate dolor
                    aut hic officia aspernatur consectetur voluptas obcaecati
                    voluptatum doloremque at temporibus molestiae vel. Autem,
                    suscipit.
                  </p>
                </div>
              </div>
            )}
            {active == 'Values' && (
              <div className={style.Values}>Характеристики</div>
            )}
            {active == 'Reviews' && (
              <div className={style.Reviews}>Відгуки</div>
            )}
          </div>
        </div>
      </Container>

      <ADS image_s={ADSImage2.src} image_l={ADSImage1.src} />
      <Container>
        <div className={style.Title}>
          <h2>Подібні товари</h2>
        </div>
        <Products data={moc_similarProducts} className={style.Products} />
      </Container>
      <ADS image_s={ADSImage3.src} image_l={ADSImage4.src} reverse />
      <Form />
    </>
  )
}

export function Line({ title, value }: { title?: string; value?: string }) {
  return (
    <div className={style.Line}>
      <p>{title}</p>
      <span className={style.Separator} />
      <p>{value}</p>
    </div>
  )
}

import style from './style.module.scss'
import { Container } from '../UI/Container'
import { Primary } from '../UI/PrimaryText'
import Link from 'next/link'
import Image from 'next/image'

import MOCImage from '../../assets/images/moc_category.png'
const config = [
  {
    id: 1,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 2,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 3,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 4,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 5,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 6,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 7,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 8,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 9,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 10,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 11,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 12,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 13,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 14,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 15,
    lable: 'test moc category',
    image: MOCImage.src,
    link: '123124',
  },
]

export default function Catalog() {
  return (
    <section className={style.Catalog}>
      <Container className={style.Content}>
        <div className={style.Title}>
          <h2>Наш каталог</h2>
          <p>
            В інтернет магазині{' '}
            <span className={style.Logo}>
              <Primary>BEE</Primary> MARKET
            </span>{' '}
            ви можете знайти всі необхідні інструменти і товари.
          </p>
        </div>

        <div className={style.List}>
          <ul>
            {config.map((item) => (
              <li key={item.id} className={style.Card}>
                <Link href={item.link}>
                  <a style={{ backgroundImage: `url(${item.image})` }}>
                    <p>{item.lable}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

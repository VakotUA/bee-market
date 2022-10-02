import style from './style.module.scss'

import MOCImage from '../../assets/images/moc/moc_category.png'

import { UI } from '../UI'
const { Container, Primary, Card } = UI
const { CategoryCard } = Card

const config = [
  {
    id: 1,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 2,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 3,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 4,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 5,
    name: 'test moc category',
    link: '',
  },
  {
    id: 6,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 7,
    name: 'test moc category',
    link: '',
  },
  {
    id: 8,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 9,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 10,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 11,
    name: 'test moc category',
    link: '',
  },
  {
    id: 12,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 13,
    name: 'test moc category',
    link: '',
  },
  {
    id: 14,
    name: 'test moc category',
    image: MOCImage.src,
    link: '',
  },
  {
    id: 15,
    name: 'test moc category',
    link: '123124',
  },
]

export default function Catalog({
  hideTitle = false,
}: {
  hideTitle?: boolean
}) {
  return (
    <section className={style.Catalog}>
      <Container className={style.Content}>
        {hideTitle || (
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
        )}

        <div className={style.List}>
          <ul>
            {config.map((item) => (
              <li key={item.id}>
                <CategoryCard category={item} className={style.Card} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

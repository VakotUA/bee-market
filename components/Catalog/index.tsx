import style from './style.module.scss'

import { UI } from '../UI'
import { useGetAllCategoriesQuery } from '../../api/categoryApi/category.api'
import { ICategory } from '../../modules/models/Category'

const { Container, Primary, Card } = UI
const { CategoryCard } = Card

export default function Catalog({
  hideTitle = false,
}: {
  hideTitle?: boolean
}) {
  const { data: categoriesData } = useGetAllCategoriesQuery('')

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

        {categoriesData && (
          <div className={style.List}>
            <ul>
              {categoriesData?.map((item: ICategory) => (
                <li key={item.id}>
                  <CategoryCard category={item} className={style.Card} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  )
}

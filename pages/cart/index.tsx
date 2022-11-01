import History from '../../components/History'

import { Container } from '../../components/Layout/Container'
import { Button } from '../../components/UI/Button'
import style from './style.module.scss'

export default function CatalogPage() {
  return (
    <>
      <History />
      <Container className={style.Content}>
        <div className={style.Title}>
          <h1>ВАШ КОШИК</h1>
        </div>

        <div className={style.Cart}>
          <div className={style.Collumn}>
            <div className={style.Title}>
              <p>ТОВАРИ В ЗАМОВЛЕННІ</p>
              <Button className={style.Button}>Редагувати</Button>
            </div>

            <div className={style.Row}>
              <div className={style.List}>
                <ul>
                  {/* map */}
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>

            <div className={style.Row}>
              <div className={style.Total}>
                <p>
                  Всього: <span>{4}</span> товари на суму <span>{1308}</span>грн
                </p>

                <Button className={style.Button}>Залишити коментар</Button>

                <p>
                  Переконайтесь у правильності внесених даних. Замовлення може
                  бути підтверджене без дзвінка.
                </p>
                <p>
                  Підтверджуючи замовлення, Ви приймаєте{' '}
                  <a>умови користувацької угоди</a>.
                </p>
              </div>
            </div>
          </div>

          <div className={style.Collumn}>
            <div className={style.Title}>
              <p>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</p>
            </div>

            <div className={style.Groups}>
              <div className={style.Group}>
                <div className={style.Title}>Отримувач</div>
                <div className={style.Inputs}></div>
              </div>

              <div className={style.Group}>
                <div className={style.Title}>
                  Оберіть населений пункт отримувача
                </div>
                <div className={style.Inputs}></div>
              </div>

              <div className={style.Group}>
                <div className={style.Title}>Сросіб отримання замовлення</div>
                <div className={style.Inputs}></div>
              </div>

              <div className={style.Group}>
                <div className={style.Title}>Сросіб оплати</div>
                <div className={style.Inputs}></div>
              </div>
            </div>
          </div>

          <Button className={style.Button} primary>
            Купити
          </Button>
        </div>
      </Container>
    </>
  )
}

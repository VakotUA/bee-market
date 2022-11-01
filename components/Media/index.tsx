import { Container } from '../Layout/Container'
import { Button } from '../UI/Button'

import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.scss'

import BgImage from '../../assets/images/Graf.png'

import { MEDIA_LINKS } from '../../lib/constants'
import { Facebook } from '../../assets/svgs/facebook'
import { Instagram } from '../../assets/svgs/instagram'
import { Telegram } from '../../assets/svgs/telegram'

export default function Media() {
  return (
    <section className={style.Media}>
      <Container className={style.Content}>
        <div className={style.Block}>
          <div className={style.Background}>
            <Image
              src={BgImage}
              alt="background"
              width={1006}
              height={806}
              layout="fixed"
              quality={100}
              unoptimized
            />
          </div>

          <h2>Вітаю дорогий відвідувач</h2>

          <div className={style.Text}>
            <p>
              Хочеться заощадити твій дорогоцінний час і коротко розповісти про
              нашу багаторічну роботу.
            </p>
            <p>
              Компанія Bee Market задовольняє потреби клієнтів у сфері
              будівельних матеріалів та інструментів. У Bee Market ти можеш
              знайти все з відділів: лаки і фарби, електрика, ручний інструмент,
              електроінструмент, хімія і суміші, господарські товари та багато
              інших.
            </p>
            <p>
              Наш колектив складається з професіоналів з багаторічним стажем,
              які якісно обслуговуватимуть і проконсультують кожного клієнта. Ми
              працюємо чисто і прозоро, і доставимо вам замовлення будь-яким
              зручним для вас способом в найкоротші терміни.
            </p>
            <p>
              За нашими плечима тисячі задоволених клієнтів. Переходь на головну
              сторінку і замовляй необхідний товар.
            </p>
            <p>З повагою, команда Bee Market !</p>
          </div>

          <div className={style.Links}>
            <div>
              <a
                href={MEDIA_LINKS.TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <Telegram.Hexagon width={50} height={50} />
              </a>

              <a
                href={MEDIA_LINKS.INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram.Hexagon width={50} height={50} />
              </a>

              <a
                href={MEDIA_LINKS.FACEBOOK_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook.Hexagon width={50} height={50} />
              </a>
            </div>

            <Link href="/blog">
              <a>
                <Button className={style.Button} primary>
                  НАШ БЛОГ
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '../Layout/Container'
import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { Dispatch, SetStateAction, useState } from 'react'

import Background from '../../assets/images/footer_background.png'
import { Logo } from '../../assets/svgs/logo'
import { Primary } from '../UI/PrimaryText'

import { Facebook } from '../../assets/svgs/facebook'
import { Telegram } from '../../assets/svgs/telegram'
import { Instagram } from '../../assets/svgs/instagram'

import { Button } from '../UI/Button'

import { MEDIA_LINKS } from '../../lib/constants'

const moc_data = [
  {
    category: 'Лакофарбові матеріали',
    subCategories: [
      {
        title: 'Емалі',
        link: '',
      },
      {
        title: 'Фарби',
        link: '',
      },
      {
        title: 'Грунти малярні',
        link: '',
      },
      {
        title: 'Лаки',
        link: '',
      },
      {
        title: 'Деревозахисні засоби',
        link: '',
      },
      {
        title: 'Лазурі',
        link: '',
      },
      {
        title: 'Розчинники',
        link: '',
      },
      {
        title: 'Барвники',
        link: '',
      },
      {
        title: 'Аерозольні емалі, лаки, грунти',
        link: '',
      },
      {
        title: 'Емульсії і грунтовки',
        link: '',
      },
      {
        title: 'Столярні клеї',
        link: '',
      },
    ],
  },
  {
    category: 'Штукатурки та шпаклівки',
    subCategories: [],
  },
  {
    category: 'Комплектуючі до тріммера',
    subCategories: [],
  },
  {
    category: 'Масла',
    subCategories: [],
  },
  {
    category: 'Огороджувальні будівельні сітки',
    subCategories: [],
  },
  {
    category: 'Кріпильні вироби',
    subCategories: [],
  },
  {
    category: 'Скотч, плівка, клей',
    subCategories: [],
  },
  {
    category: 'Витратні матеріали',
    subCategories: [],
  },
  {
    category: 'Ручний інструмент',
    subCategories: [],
  },
  {
    category: 'Тенти',
    subCategories: [],
  },
  {
    category: 'Ємності',
    subCategories: [],
  },
  {
    category: 'Побутова техніка',
    subCategories: [],
  },
  {
    category: 'Взуття',
    subCategories: [],
  },
  {
    category: 'Термоси, термокружки і чашки',
    subCategories: [],
  },
  {
    category: 'Обігрівачі',
    subCategories: [],
  },
  {
    category: 'Вапно',
    subCategories: [],
  },
  {
    category: 'Підкладки',
    subCategories: [],
  },
  {
    category: 'Для опалення',
    subCategories: [],
  },
]

export default function Footer() {
  const data = moc_data
  const [active, setActive] = useState<string>('')

  return (
    <footer className={style.Footer}>
      <div className={style.Content}>
        <Image
          src={Background}
          alt="background"
          className={style.Background}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
        />

        <Container className={classNames(style.Container, style.Desktop)}>
          <div>
            <LogoAndMedia />
          </div>

          <div>
            <div>
              <Navigation />
            </div>

            {/* Accordeon parts */}
            <>
              <div className={style.AccordeonPart}>
                <CategoryAccordeon
                  data={data.slice(0, 6)}
                  active={active}
                  setActive={setActive}
                />
              </div>
              <div className={style.AccordeonPart}>
                <CategoryAccordeon
                  data={data.slice(6, 12)}
                  active={active}
                  setActive={setActive}
                />
              </div>
              <div className={style.AccordeonPart}>
                <CategoryAccordeon
                  data={data.slice(12, 18)}
                  active={active}
                  setActive={setActive}
                />
              </div>
            </>

            <div>
              <Contacts />
            </div>
          </div>
        </Container>

        <Container className={classNames(style.Container, style.Mobile)}>
          <div>
            <LogoAndMedia />
          </div>

          <div>
            <div>
              <Navigation />
              <Contacts />
            </div>
            <div className={style.Accordeon}>
              <CategoryAccordeon
                data={data}
                active={active}
                setActive={setActive}
              />
            </div>
          </div>
        </Container>
      </div>

      <div className={style.Content}>
        <Container className={style.Container}>
          <Primary>
            <p>2022 all rights reserved</p>
          </Primary>
        </Container>
      </div>
    </footer>
  )
}

export function Navigation() {
  return (
    <ul className={style.Navigation}>
      <li>
        <Link href="">
          <a>Партнерам</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Оплата та Доставка</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Сертифікати</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Гарантії</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Новини</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Контакти</a>
        </Link>
      </li>
    </ul>
  )
}
export function Contacts() {
  return (
    <div className={style.Contacts}>
      <a>
        вул. Малинська 1, індекс 10002,
        <br />
        Житомир, Україна
      </a>

      <span>
        <a href="tel:+38(063)5028874">+38 (063) 502 88 74</a>

        <a href="tel:+38(068)6293173">+38 (068) 629 31 73</a>
      </span>

      <a href="mailto:info@bee.market">info@bee.market</a>

      <a href="tel:+38(063)5028874">+38 (063) 502 88 74</a>

      <a href="tel:+38(063)5028874">+38 (063) 502 88 74</a>

      <Button className={style.Button} primary>
        ЗАМОВИТИ ДЗВІНОК
      </Button>
    </div>
  )
}
export function LogoAndMedia() {
  return (
    <>
      <Link href="/">
        <a className={style.Logo}>
          <div className={style.Image}>
            <Logo.White />
          </div>
          <p>
            <Primary className={style.Bee}>BEE</Primary> MARKET
          </p>
        </a>
      </Link>

      <div className={style.Media}>
        <a href={MEDIA_LINKS.TELEGRAM_LINK} target="_blank" rel="noreferrer">
          <Telegram.Single width={20} height={20} />
        </a>

        <a href={MEDIA_LINKS.INSTAGRAM_LINK} target="_blank" rel="noreferrer">
          <Instagram.Single width={20} height={20} />
        </a>

        <a href={MEDIA_LINKS.FACEBOOK_LINK} target="_blank" rel="noreferrer">
          <Facebook.Single width={20} height={20} />
        </a>
      </div>
    </>
  )
}

export type Props = {
  data: {
    category: string
    subCategories: {
      title: string
      link: string
    }[]
  }[]
  active: string
  setActive: Dispatch<SetStateAction<string>>
}
export function CategoryAccordeon({ data, active, setActive }: Props) {
  return (
    <>
      {data && (
        <ul className={style.Categories}>
          {data.map((item, index) => (
            <li key={index}>
              <a
                onClick={() =>
                  setActive(item.category !== active ? item.category : '')
                }
              >
                {item.category}
              </a>
              <ul
                className={classNames(style.SubCategory, {
                  [style.Active]: active === item.category,
                })}
              >
                {item.subCategories.map((subItem, index) => (
                  <li key={index}>
                    <Link href={subItem.link}>
                      <a>{subItem.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

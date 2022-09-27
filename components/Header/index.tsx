import style from './style.module.scss'

import Link from 'next/link'

import { UI } from '../UI'
const { Container, BurgerMenu, Button, NavLink, Primary } = UI

import { BsPersonFill } from 'react-icons/bs'
import { IoMdSearch } from 'react-icons/io'

import BgImage from '../../assets/images/header_background.png'
import Logo from '../../assets/images/logo_header.png'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Facebook from '../../assets/images/facebook.png'
import HexagonCart from '../../assets/images/hexagon_cart.png'
import HexagonSmall from '../../assets/images/hexagon_small.png'
import Instagram from '../../assets/images/instagram.png'
import Telegram from '../../assets/images/telegram.png'
import { useDebounce } from '../../modules/hooks/useDebounce'

import classNames from 'classnames'

import { useAppDispatch } from '../../modules/store/hooks'
import { searchSlice } from '../../modules/store/reducers/searchSlice'

import { useSession } from 'next-auth/react'

const count = 0 // temporary products in cart count

export default function Header() {
  const { data: session } = useSession()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const [search, setSearch] = useState<string>('')
  const debounce = useDebounce<string>(search)
  const dispatch = useAppDispatch()
  const { setSearch: reduxSetSearch } = searchSlice.actions

  useEffect(() => {
    dispatch(reduxSetSearch(debounce))
  }, [debounce, dispatch, reduxSetSearch])

  return (
    <header className={style.Header}>
      <div className={classNames(style.Menu, { [style.Active]: isVisible })}>
        <div className={style.Contacts}>
          <a href="tel:+38(067)7776653">+38 (067) 777 66 53</a>
          <a href="tel:+38(063)6667753">+38 (063) 666 77 53</a>
          <a href="mailto:info@bee.market">info@bee.market</a>
        </div>

        <nav className={style.Navigation}>
          <NavLink href="" onClick={() => setIsVisible(false)}>
            Каталог
          </NavLink>
          <NavLink href="" onClick={() => setIsVisible(false)}>
            Партнерам
          </NavLink>
          <NavLink href="" onClick={() => setIsVisible(false)}>
            Новини
          </NavLink>
          <NavLink href="" onClick={() => setIsVisible(false)}>
            Оплата та Доставка
          </NavLink>
          <NavLink href="" onClick={() => setIsVisible(false)}>
            Контакти
          </NavLink>
        </nav>
      </div>

      <Image
        src={BgImage}
        alt="background"
        className={style.Background}
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
      />

      <div className={style.Content}>
        <div className={style.SubHeader}>
          <Container className={style.Container}>
            <span className={style.Search}>
              <IoMdSearch className={style.Icon} />
              <input
                type="text"
                placeholder="Пошук"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
            <span className={style.Contacts}>
              <a href="mailto:info@bee.market">info@bee.market</a>
              <p style={{ opacity: 0.5 }}>/</p>
              <a href="tel:+38(067)7776653">
                <Primary>+38 (067) 777 66 53</Primary>
              </a>
              <p style={{ opacity: 0.5 }}>/</p>
              <a href="tel:+38(063)6667753">
                <Primary>+38 (063) 666 77 53</Primary>
              </a>
            </span>
          </Container>
        </div>

        <div className={style.SubHeader}>
          <Container className={style.Container}>
            <div className={style.Block}>
              <Link href="/">
                <a className={style.Logo}>
                  <div className={style.Image}>
                    <Image src={Logo} alt="logo" />
                  </div>
                  <p>
                    <Primary className={style.Bee}>BEE</Primary> MARKET
                  </p>
                </a>
              </Link>

              <div className={style.Socials}>
                <div className={style.Particle}>
                  <Image src={HexagonSmall} alt="hex" />
                </div>
                <div className={style.Particle}>
                  <Image src={HexagonSmall} alt="hex" />
                </div>
                <a href="" target="_blank">
                  <Image src={Telegram} alt="telegram" />
                </a>
                <a href="" target="_blank">
                  <Image src={Instagram} alt="instagram" />
                </a>
                <a href="" target="_blank">
                  <Image src={Facebook} alt="facebook" />
                </a>
              </div>
            </div>

            <div className={style.Block}>
              <nav className={style.Navigation}>
                <NavLink href="/catalog">Каталог</NavLink>
                <NavLink href="/partners">Партнерам</NavLink>
                <NavLink href="/news">Новини</NavLink>
                <NavLink href="/delivery">Оплата та Доставка</NavLink>
                <NavLink href="/contacts">Контакти</NavLink>
              </nav>
            </div>

            <div className={style.Block}>
              <BurgerMenu
                className={style.BurgerMenu}
                isActive={isVisible}
                onClick={() => setIsVisible(!isVisible)}
              />

              <Button className={style.Button}>
                <Link href="/profile">
                  <a>
                    <BsPersonFill className={style.Icon} />
                    <p>{session ? session?.user?.name : 'Мій кабінет'}</p>
                  </a>
                </Link>
              </Button>

              <div className={style.Cart}>
                <div className={style.Particle}>
                  <Image src={HexagonSmall} alt="hex" />
                </div>
                <p>Кошик</p>
                <div className={style.Image}>
                  <Image src={HexagonCart} alt="hex" />
                </div>
                <p className={style.Count}>
                  {Math.min(Math.max(0, count), 999)}
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}

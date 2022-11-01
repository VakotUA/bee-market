import { useEffect, useState } from 'react'

import style from './style.module.scss'

import Link from 'next/link'

import { UI } from '../UI'
const { Container, BurgerMenu, Button, NavLink, Primary } = UI

import Image from 'next/image'
import Background from '../../assets/images/head_line.png'

import { Search } from '../../assets/svgs/search'
import { Logo } from '../../assets/svgs/logo'
import { Facebook } from '../../assets/svgs/facebook'
import { Telegram } from '../../assets/svgs/telegram'
import { Instagram } from '../../assets/svgs/instagram'

import { useDebounce } from '../../modules/hooks/useDebounce'

import classNames from 'classnames'

import { useAppDispatch } from '../../modules/store/hooks'
import { searchSlice } from '../../modules/store/reducers/searchSlice'
import { modalsSlice } from '../../modules/store/reducers/modalsSlice'

import { useSession } from 'next-auth/react'

import { MEDIA_LINKS } from '../../lib/constants'
import CartModal from '../ModalWindows/Cart'
import { User } from '../../assets/svgs/user'
import { Hexagon } from '../../assets/svgs/hexagon'

const count = 0 // temporary products in cart count

export default function Header() {
  const { data: session } = useSession()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const [search, setSearch] = useState<string>('')
  const debounce = useDebounce<string>(search)
  const dispatch = useAppDispatch()
  const { setSearch: reduxSetSearch } = searchSlice.actions
  const { toggleCartModal } = modalsSlice.actions

  useEffect(() => {
    dispatch(reduxSetSearch(debounce))
  }, [debounce, dispatch, reduxSetSearch])

  return (
    <>
      <header className={style.Header}>
        <div className={classNames(style.Menu, { [style.Active]: isVisible })}>
          <div className={style.Contacts}>
            <a href="tel:+38(067)7776653">+38 (067) 777 66 53</a>
            <a href="tel:+38(063)6667753">+38 (063) 666 77 53</a>
            <a href="mailto:info@bee.market">info@bee.market</a>
          </div>

          <span />

          <nav className={style.Navigation}>
            <NavLink onClick={() => setIsVisible(false)} href="/catalog">
              Каталог
            </NavLink>
            <NavLink onClick={() => setIsVisible(false)} href="/partners">
              Партнерам
            </NavLink>
            <NavLink onClick={() => setIsVisible(false)} href="/news">
              Новини
            </NavLink>
            <NavLink onClick={() => setIsVisible(false)} href="/delivery">
              Оплата та Доставка
            </NavLink>
            <NavLink onClick={() => setIsVisible(false)} href="/contacts">
              Контакти
            </NavLink>
          </nav>
        </div>

        <div>
          <Image
            src={Background}
            alt="background"
            className={style.Background}
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
          />
        </div>

        <div className={style.Content}>
          <div className={style.SubHeader}>
            <Container className={style.Container}>
              <span className={style.Search}>
                <Search className={style.Icon} />
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
                      <Logo.Black />
                    </div>
                    <p>
                      <Primary className={style.Bee}>BEE</Primary> MARKET
                    </p>
                  </a>
                </Link>

                <div className={style.Socials}>
                  <div className={style.Particle}>
                    <Hexagon.Yellow width={26} height={20} />
                  </div>
                  <div className={style.Particle}>
                    <Hexagon.Yellow width={34} height={20} />
                  </div>
                  <a
                    href={MEDIA_LINKS.TELEGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Telegram.Hexagon width={30} height={30} />
                  </a>
                  <a
                    href={MEDIA_LINKS.INSTAGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram.Hexagon width={30} height={30} />
                  </a>
                  <a
                    href={MEDIA_LINKS.FACEBOOK_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook.Hexagon width={30} height={30} />
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

                <Button className={style.Button} primary>
                  <Link href="/profile">
                    <a>
                      <User />
                      <p>{session ? session?.user?.name : 'Мій кабінет'}</p>
                    </a>
                  </Link>
                </Button>

                <div
                  className={style.Cart}
                  onClick={() => dispatch(toggleCartModal())}
                >
                  <div className={style.Particle}>
                    <Hexagon.Yellow width={20} height={20} />
                  </div>
                  <p>Кошик</p>
                  <div className={style.Image}>
                    <Hexagon.Black width={36} height={36} />
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

      <CartModal />
    </>
  )
}

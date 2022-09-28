import style from './style.module.scss'
import { Container } from '../Layout/Container'
import { useState, useEffect, useCallback } from 'react'
import Hex from '../../assets/svgs/hex'
import classNames from 'classnames'
import { IUser } from '../../modules/models/User'
import Image from 'next/image'

import { LongArrow } from '../../assets/svgs/longArrows'
import { DoubleChevron } from '../../assets/svgs/doubleChevrones'

import User1MocImage from '../../assets/images/moc/moc_user1.jpg'
import User2MocImage from '../../assets/images/moc/moc_user2.png'
import User3MocImage from '../../assets/images/moc/moc_user3.jpg'

const moc_data = [
  {
    user: '1241252325',
    date: '19 серпня 2022р.',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod ullam eum ratione dicta consectetur quia pariatur! Suscipit, quod ducimus dolores soluta vel dolore repudiandae a. Temporibus sint, unde quasi molestias tempore reiciendis dolorum voluptatem accusamus, alias, adipisci quos natus dolorem ab nihil placeat! Eum doloremque nam tempore optio?',
  },
  {
    user: '1241252325',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod',
  },
  {
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod ullam eum ratione dicta consectetur quia pariatur! Suscipit, quod ducimus dolores soluta vel dolore repudiandae a. Temporibus sint, unde quasi molestias tempore reiciendis dolorum voluptatem accusamus, alias, adipisci quos natus dolorem ab nihil placeat! Eum doloremque nam tempore optio?',
  },
  {
    user: '1241251241242325',
    date: '20 серпня 2022р.',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod ullam eum ratione dicta consectetur quia pariatur! Suscipit, quod ducimus dolores soluta vel dolore repudiandae a.',
  },
  {
    user: '32623512345',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod ullam eum ratione dicta consectetur quia pariatur! Suscipit, quod ducimus dolores soluta vel dolore repudiandae a. Temporibus sint, unde quasi molestias tempore reiciendis dolorum voluptatem accusamus, alias, adipisciLorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod ullam eum ratione dicta consectetur quia pariatur! Suscipit, quod ducimus dolores soluta vel dolore repudiandae a. Temporibus sint, unde quasi molestias tempore reiciendis dolorum voluptatem accusamus, alias, adipisciLorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ut quod ullam eum ratione dicta consectetur quia pariatur! Suscipit, quod ducimus dolores soluta vel dolore repudiandae a. Temporibus sint, unde quasi molestias tempore reiciendis dolorum voluptatem accusamus, alias, adipisci',
  },
]
const moc_users: IUser[] = [
  {
    _id: '1241252325',
    name: 'Suzune Harikita',
    email: '',
    image: User1MocImage.src,
  },
  {
    _id: '32623512345',
    name: 'Takina',
    email: '',
    image: User2MocImage.src,
  },
  {
    _id: '1241251241242325',
    name: 'Misaka Mikoto',
    email: '',
    image: User3MocImage.src,
  },
]

export default function Reviews() {
  const data = moc_data

  const [user, setUser] = useState<IUser>()

  const [active, setActive] = useState<number>(0)
  const toggleActive = useCallback(
    (a: number) => {
      setActive(a > data.length - 1 ? 0 : a < 0 ? data.length - 1 : a)
    },
    [data.length]
  )

  useEffect(() => {
    // select next review after [message.length * 200ms] delay
    // (200ms per letter)

    const timer = setTimeout(() => {
      toggleActive(active + 1)
    }, data[active].message.length * 200)

    return () => clearTimeout(timer)
  }, [data, active, toggleActive])

  useEffect(() => {
    // imitation of API request getUserByIdQuery
    setUser(moc_users.find((user) => user._id === data[active].user))
  }, [active, data, setUser])

  return (
    <section className={style.Reviews}>
      <Container className={style.Content}>
        <div className={style.Title}>
          <h2>Відгуки наших клієнтів</h2>
        </div>

        <div className={style.Slider}>
          <div className={style.Block}>
            {data.map((item, index) => (
              <div
                key={index}
                className={classNames(style.Item, {
                  [style.Active]: active === index,
                })}
              >
                <div className={style.ItemContent}>
                  <div className={style.ImageBlock}>
                    <Hex width={160} height={160} className={style.Hex} />
                    <div className={style.Image}>
                      {user?.image && (
                        <Image
                          src={user?.image}
                          alt="user"
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className={style.Message}>
                    <h4 className={style.User}>
                      {user?.name || 'Anonim user'}
                    </h4>
                    <p className={style.Date}>{item.date || 'unknown date'}</p>
                    <p className={style.Text}>
                      <DoubleChevron.Left className={style.Chevron} />{' '}
                      {item.message}{' '}
                      <DoubleChevron.Right className={style.Chevron} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.Controls}>
            <LongArrow.Left
              className={style.Arrow}
              onClick={() => toggleActive(active - 1)}
            />
            <div className={style.Options}>
              {data.map((_, index) => (
                <div
                  key={index}
                  className={classNames({ [style.Active]: active === index })}
                  onClick={() => toggleActive(index)}
                >
                  <Hex />
                </div>
              ))}
            </div>
            <LongArrow.Right
              className={style.Arrow}
              onClick={() => toggleActive(active + 1)}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '../Layout/Container'
import style from './style.module.scss'
import { useState, useEffect, useRef } from 'react'
import { LongArrow } from '../../assets/svgs/longArrows'
import Image from 'next/image'
import { Primary } from '../UI/PrimaryText'

const data = [
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
  { image: '', link: '' },
]

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState<number>(0)

  const changeOffset = (a: number) => {
    const min = 0
    const max = data.length * 210 - ref.current?.offsetWidth! - 10

    if (a > max && a - max < 210) setOffset(max)
    else if (a < 0 && min - a < 210) setOffset(min)
    else setOffset(a > max ? min : a < min ? max : a)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      changeOffset(offset + 210)
    }, 3000)

    return () => clearTimeout(timer)
  }, [offset, changeOffset])

  return (
    <section className={style.Partners}>
      <Container className={style.Content}>
        <div className={style.Title}>
          <h2>Наші партнери</h2>
        </div>

        <div className={style.Slider}>
          <div
            className={style.Arrow}
            onClick={() => changeOffset(offset - 210)}
          >
            <LongArrow.Left />
          </div>
          <div className={style.PartnersList} ref={ref}>
            <div
              className={style.List}
              style={{
                translate: `-${offset}px`,
              }}
            >
              {data.map((item, index) => (
                <a key={index} className={style.Item} href={item.link}>
                  {item.image ? (
                    <Image src={item.image} layout="fill" />
                  ) : (
                    <Primary className={style.Primary}>Partner</Primary>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div
            className={style.Arrow}
            onClick={() => changeOffset(offset + 210)}
          >
            <LongArrow.Right />
          </div>
        </div>
      </Container>
    </section>
  )
}

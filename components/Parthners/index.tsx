import { Container } from '../Layout/Container'
import style from './style.module.scss'
import { useState, useEffect, useRef, useCallback } from 'react'
import { LongArrow } from '../../assets/svgs/longArrows'
import Image from 'next/image'
import { Primary } from '../UI/PrimaryText'

import Parthner1 from '../../assets/images/parthner/Parthner_1.png'
import Parthner2 from '../../assets/images/parthner/Parthner_2.png'
import Parthner3 from '../../assets/images/parthner/Parthner_3.png'
import Parthner4 from '../../assets/images/parthner/Parthner_4.png'
import Parthner5 from '../../assets/images/parthner/Parthner_5.png'

const data = [
  { image: Parthner1, link: '' },
  { image: Parthner2, link: '' },
  { image: Parthner3, link: '' },
  { image: Parthner4, link: '' },
  { image: Parthner5, link: '' },
]
const width = 310

export default function Parthners() {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState<number>(0)

  const changeOffset = useCallback((a: number) => {
    const min = 0
    const max = data.length * width - (ref.current?.offsetWidth || 0) - 10

    if (a > max && a - max < width) setOffset(max)
    else if (a < 0 && min - a < width) setOffset(min)
    else setOffset(a > max ? min : a < min ? max : a)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      changeOffset(offset + width)
    }, 5000)

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
            onClick={() => changeOffset(offset - width)}
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
                    <Image
                      src={item.image}
                      alt="partner"
                      layout="fill"
                      objectFit="contain"
                    />
                  ) : (
                    <Primary className={style.Primary}>Partner</Primary>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div
            className={style.Arrow}
            onClick={() => changeOffset(offset + width)}
          >
            <LongArrow.Right />
          </div>
        </div>
      </Container>
    </section>
  )
}

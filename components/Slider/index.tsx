import style from './style.module.scss'
import { Container } from '../UI/Container'
import { Button } from '../UI/Button'
import { Primary } from '../UI/PrimaryText'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import { useState, useEffect } from 'react'

import SliderTransition from '../../assets/images/slider_paint_transition.png'

import PaintStrokes from '../../public/sliderImages/paint_strokes.png'
const sliderImages = [
  '/sliderImages/1.png',
  '/sliderImages/background_1.png',
  '/sliderImages/3.jpg',
] // any resolution

export default function Slider() {
  const [counter, setCounter] = useState<number>(0)
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 10000)
  }, [counter])

  return (
    <section className={style.Slider}>
      <div className={style.SliderImage}>
        {sliderImages.map((item, index) => (
          <Image
            className={classNames(style.Image, {
              [style.Active]: counter % sliderImages.length === index,
            })}
            key={index}
            src={item}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="slide"
          />
        ))}
      </div>

      <div className={style.Transition}>
        <Image
          src={SliderTransition}
          layout="fixed"
          width={1920}
          height={30}
          alt="transition"
        />
      </div>

      {/* TODO: Particles */}

      <Container className={style.Content}>
        <div className={style.Text}>
          <div className={style.Background}>
            <Image
              src={PaintStrokes}
              layout="intrinsic"
              width={725}
              height={334}
              alt="paint_strokes"
            />
          </div>

          <h1 className={style.Logo}>
            <Primary>BEE</Primary> MARKET
          </h1>
          <p>Знижки до 20%</p>
          <p>на всі групи лакофарбових матеріалів</p>

          <Button className={style.Button}>
            <Link href="/discount">ОТРИМАТИ ЗНИЖКУ</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

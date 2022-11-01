import classNames from 'classnames'

import Image from 'next/image'
import Link from 'next/link'

import { UI } from '../UI'
const { Container, Button, Primary } = UI

import style from './style.module.scss'

import { useEffect, useState } from 'react'

import SliderTransition from '../../assets/images/slider/Slide_line.png'
import PaintStrokes from '../../assets/images/slider/Slider_Splash.png'

import Slide_1 from '../../assets/images/slider/Slide_1.png'
import Slide_2 from '../../assets/images/slider/Slide_2.png'

const sliderImages = [Slide_1, Slide_2] // any resolution

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
          layout="fill"
          objectFit="contain"
          objectPosition="center bottom"
          alt="transition"
        />
      </div>

      <Container className={style.Content}>
        <div className={style.Text}>
          <div className={style.Background}>
            <Image
              src={PaintStrokes}
              layout="intrinsic"
              width={725}
              height={334}
              alt="paint_strokes"
              priority
            />
          </div>

          <h1 className={style.Logo}>
            <Primary>BEE</Primary> MARKET
          </h1>
          <p>Знижки до 20%</p>
          <p>на всі групи лакофарбових матеріалів</p>

          <Button className={style.Button} primary>
            <Link href="/discount">ОТРИМАТИ ЗНИЖКУ</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

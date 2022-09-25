import { Container } from '../UI/Container'
import style from './style.module.scss'

import Image from 'next/image'

export type Props = {
  image_s: string
  image_l: string
}

export default function ADS({ image_s, image_l }: Props) {
  return (
    <section className={style.Ads}>
      <Container className={style.Content}>
        <div className={style.Block}>
          <Image src={image_l} width={823} height={273} alt="banner" />
        </div>
        <div className={style.Block}>
          <Image src={image_s} width={547} height={273} alt="banner" />
        </div>
      </Container>
    </section>
  )
}

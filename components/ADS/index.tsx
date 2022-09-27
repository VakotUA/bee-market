import classNames from 'classnames'
import { Container } from '../Layout/Container'
import style from './style.module.scss'

import Image from 'next/image'

export type Props = {
  image_s: string
  image_l: string
  reverse?: boolean
}

export default function ADS(props: Props) {
  return (
    <section className={style.Ads}>
      <Container className={style.Content}>
        {props.reverse ? (
          <>
            <div className={classNames(style.Block, style.Large)}>
              <Image
                src={props.image_l}
                width={823}
                height={273}
                alt="banner"
              />
            </div>
            <div className={classNames(style.Block, style.Small)}>
              <Image
                src={props.image_s}
                width={547}
                height={273}
                alt="banner"
              />
            </div>
          </>
        ) : (
          <>
            <div className={classNames(style.Block, style.Small)}>
              <Image
                src={props.image_s}
                width={547}
                height={273}
                alt="banner"
              />
            </div>
            <div className={classNames(style.Block, style.Large)}>
              <Image
                src={props.image_l}
                width={823}
                height={273}
                alt="banner"
              />
            </div>
          </>
        )}
      </Container>
    </section>
  )
}

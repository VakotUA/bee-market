import Catalog from '../../components/Catalog'
import Discount from '../../components/DiscountedProducts'
import History from '../../components/History'

import ADSImage1 from '../../assets/images/ads_1.png'
import ADSImage2 from '../../assets/images/ads_2.png'
import ADSImage3 from '../../assets/images/ads_3.png'
import ADSImage4 from '../../assets/images/ads_4.png'
import ADS from '../../components/ADS'

import Form from '../../components/Form'
import { Container } from '../../components/Layout/Container'
import style from './style.module.scss'

export default function CatalogPage() {
  return (
    <>
      <History />
      <div>
        {/* TODO: img */}

        <Container className={style.Title}>
          <h1>КАТАЛОГ ТОВАРІВ</h1>
        </Container>
      </div>
      <Catalog hideTitle />
      <ADS image_s={ADSImage2.src} image_l={ADSImage1.src} />
      <Discount />
      <ADS image_s={ADSImage3.src} image_l={ADSImage4.src} reverse />
      <Form />
    </>
  )
}

import type { NextPage } from 'next'
import Slider from '../components/Slider'
import Catalog from '../components/Catalog'
import ADS from '../components/ADS'
import Discount from '../components/DiscountedProducts'
import Media from '../components/Media'

import ADSImage1 from '../assets/images/ads_1.png'
import ADSImage2 from '../assets/images/ads_2.png'
import ADSImage3 from '../assets/images/ads_3.png'
import ADSImage4 from '../assets/images/ads_4.png'
import Reviews from '../components/Reviews'
import Partners from '../components/Partners'
import Form from '../components/Form'

const Main: NextPage = () => {
  return (
    <>
      <Slider />
      <Catalog />
      <ADS image_s={ADSImage2.src} image_l={ADSImage1.src} />
      <Discount />
      <Media />
      <ADS image_s={ADSImage3.src} image_l={ADSImage4.src} reverse />
      <Reviews />
      <Partners />
      <Form />
    </>
  )
}

export default Main

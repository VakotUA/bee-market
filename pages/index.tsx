import type { NextPage } from 'next'
import Slider from '../components/Slider'
import Catalog from '../components/Catalog'
import ADS from '../components/ADS'
import Discount from '../components/DiscountedProducts'

import ADSImage1 from '../assets/images/ads_1.png'
import ADSImage2 from '../assets/images/ads_2.png'

const Main: NextPage = () => {
  return (
    <>
      <Slider />
      <Catalog />
      <ADS image_s={ADSImage2.src} image_l={ADSImage1.src} />
      <Discount />
    </>
  )
}

export default Main

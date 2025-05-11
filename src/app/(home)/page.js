import { RevealClient } from '@/components/common';
import Banner from './banner';
import Benefit from './benefit';
import Category from './category';
import ChooseUs from './choose-us';
import Contact from './contact';
import Customer from './customer';
import FeaturedProduct from './featured-product';
import Feedback from './feedback';
import HotProduct from './hot-product';
import News from './news';
import Statistic from './statistic';

export default function Home() {
  return (
    <div>
      <Banner />
      <RevealClient>
        <Benefit />
      </RevealClient>

      <RevealClient pos="relative" zIndex={5}>
        <FeaturedProduct />
      </RevealClient>

      <RevealClient threshold={0.3} pos="relative" zIndex={1}>
        <Category />
        <ChooseUs />
      </RevealClient>

      <RevealClient>
        <Statistic />
      </RevealClient>

      <RevealClient threshold={0.3}>
        <HotProduct />
      </RevealClient>

      <RevealClient>
        <News />
      </RevealClient>

      <RevealClient>
        <Feedback />
      </RevealClient>

      <RevealClient>
        <Customer />
        <Contact />
      </RevealClient>
    </div>
  );
}

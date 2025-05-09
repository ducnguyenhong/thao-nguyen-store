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
      <Benefit />
      <FeaturedProduct />
      <Category />
      <ChooseUs />
      <Statistic />
      <HotProduct />
      <News />
      <Feedback />
      <Customer />
      <Contact />
    </div>
  );
}

import HeroSlider from '../../components/HeroSlider/HeroSlider'
import DealBanner from '../../components/DealBanner/DealBanner'
import LuxurySection from '../../components/LuxurySection/LuxurySection'
import MidCraftSection from '../../components/MidCraftSection/MidCraftSection'
import VintageSection from '../../components/VintageSection/VintageSection'
import DiscountSection from '../../components/DiscountSection/DiscountSection'
import SmartSection from '../../components/SmartSection/SmartSection'
import ServicesStrip from '../../components/ServicesStrip/ServicesStrip'
import ExploreLinks from '../../components/ExploreLinks/ExploreLinks'

function Home() {
  return (
    <>
      <HeroSlider />
      <DealBanner />
      <LuxurySection />
      <MidCraftSection />
      <VintageSection />
      <DiscountSection />
      <SmartSection />
      <ServicesStrip />
      <ExploreLinks />
    </>
  )
}

export default Home
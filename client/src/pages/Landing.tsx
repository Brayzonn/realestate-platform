import Hero from '@/components/layout/Hero';
import FeaturedListings from '@/components/layout/FeaturedListings';
import Footer from '@/components/layout/Footer';

const Landing = () => {
  
  return (
    <div className="text-mainTextBlack min-h-screen">
        <Hero />
        <FeaturedListings />
        <Footer />
    </div>
  )
}

export default Landing
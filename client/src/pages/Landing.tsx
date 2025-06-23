import Hero from '@/components/layout/Hero';
import FeaturedListings from '@/components/layout/FeaturedListings';
import Footer from '@/components/layout/Footer';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';


const Landing = () => {
  useScrollRestoration(); 
  
  return (
    <div className="text-mainTextBlack min-h-screen">
        <Hero />
        <FeaturedListings />
        <Footer />
    </div>
  )
}

export default Landing
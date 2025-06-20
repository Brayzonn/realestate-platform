import Hero from '@/components/layout/Hero'
import FeaturedListings from '@/components/layout/FeaturedListings'


const Landing = () => {
  return (
    <div className="text-mainTextBlack min-h-screen">
        <Hero />
        <FeaturedListings />
    </div>
  )
}

export default Landing
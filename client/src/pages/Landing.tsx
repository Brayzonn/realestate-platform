import { useState } from 'react';
import Hero from '@/components/layout/Hero';
import FeaturedListings from '@/components/layout/FeaturedListings';
import Faq from '@/components/layout/Faq';
import ContactSection from '@/components/layout/ContactSection';
import OurStory from '@/components/layout/OurStory';
import ClientsTestimonials from '@/components/layout/ClientsTestimonials';
import LandingPageCommunities from '@/components/layout/LandingPageCommunities';
import NewsUpdate from '@/components/layout/NewsUpdate';
import Footer from '@/components/layout/Footer';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`text-mainTextBlack min-h-screen ${isMenuOpen ? 'relative' : 'relative'}`}>
        <Hero isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu}/>
        <FeaturedListings />
        <OurStory />
        < LandingPageCommunities/>
        <ClientsTestimonials />
        <NewsUpdate />
        <ContactSection/>
        <Faq />
        <Footer />
    </div>
  )
}

export default Landing
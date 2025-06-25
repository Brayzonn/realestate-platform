import { useState } from 'react';
import Hero from '@/components/layout/Hero';
import FeaturedListings from '@/components/layout/FeaturedListings';
import Faq from '@/components/layout/Faq';
import ContactSection from '@/components/layout/ContactSection';
import OurStory from '@/components/layout/OurStory';
import Footer from '@/components/layout/Footer';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`text-mainTextBlack min-h-screen ${isMenuOpen ? 'fixed' : 'relative'}`}>
        <Hero isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu}/>
        <FeaturedListings />
        <OurStory />
        <Faq />
        <ContactSection/>
        <Footer />
    </div>
  )
}

export default Landing
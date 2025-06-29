import { useState } from 'react';
import Hero from '@/components/layout/landing/Hero';
import FeaturedListings from '@/components/layout/landing/FeaturedListings';
import Faq from '@/components/layout/landing/Faq';
import ContactSection from '@/components/layout/landing/ContactSection';
import OurStory from '@/components/layout/landing/OurStory';
import ClientsTestimonials from '@/components/layout/landing/ClientsTestimonials';
import LandingPageCommunities from '@/components/layout/landing/LandingPageCommunities';
import NewsUpdate from '@/components/layout/landing/NewsUpdate';
import Footer from '@/components/common/Footer';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <Hero isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} />
      <FeaturedListings />
      <OurStory />
      <LandingPageCommunities />
      <ClientsTestimonials />
      <NewsUpdate />
      <ContactSection />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;

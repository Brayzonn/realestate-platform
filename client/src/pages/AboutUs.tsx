import { useState } from 'react';
import Footer from '@/components/common/Footer';
import Nav from '@/components/common/Nav';
import NavMenu from '@/components/common/NavMenu';
import AboutHero from '@/components/layout/about-us/AboutHero';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import CompanyStory from '@/components/layout/about-us/CompanyStory';
import CompanyStats from '@/components/layout/about-us/CompanyStats';
import CoreValues from '@/components/layout/about-us/CoreValues';
import TeamSection from '@/components/layout/about-us/TeamSection';
import AboutCTA from '@/components/layout/about-us/AboutCTA';
import AwardsRecognition from '@/components/layout/about-us/AwardsRecognition';

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`text-mainTextBlack flex min-h-screen flex-col ${isMenuOpen ? 'h-screen overflow-hidden' : 'relative'}`}
    >
      <Nav
        defaultLogo={companylogoblack}
        scrolledLogo={companylogoblack}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
        showBorder={true}
        borderOnMobileOnly={false}
        className={`min-h-[100px] px-[1rem]`}
      />

      <main className="mx-auto max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <CompanyStory />

        <CompanyStats />
        <CoreValues />
        <TeamSection />
        <AwardsRecognition />
        <AboutCTA />
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default AboutUs;

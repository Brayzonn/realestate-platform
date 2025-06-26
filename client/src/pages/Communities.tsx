import { useState } from 'react';
import Footer from '@/components/common/Footer';
import SuburbanCTA from '@/components/layout/communities/SuburbanCTA';
import Nav from '@/components/common/Nav';
import NavMenu from '@/components/common/NavMenu';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import SubUrbanExpertise from '@/components/layout/communities/SubUrbanExpertise';
import AllComunities from '@/components/layout/communities/AllComunities';
import SuburbanHero from '@/components/layout/communities/SuburbanHero';
import SuburbanStats from '@/components/layout/communities/SuburbanStats';

const Communities = () => {
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
        <SuburbanHero />
        <SuburbanStats />

        <AllComunities />
        <SubUrbanExpertise />
        <SuburbanCTA />
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default Communities;

import { useState, useEffect } from 'react';
import Nav from '@/components/layout/Nav';
import NavMenu from '@/components/layout/NavMenu';
import Footer from '@/components/layout/Footer';
import AllListings from '@/components/layout/AllListings';
import companylogoblack from '@/assets/images/companylogoblack.svg';

const Properties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`text-mainTextBlack min-h-screen ${isMenuOpen ? 'h-screen overflow-hidden' : 'relative'}`}
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

      <main className="mx-auto flex max-w-7xl flex-1 flex-col space-y-[3rem] px-4 py-[4rem] sm:px-6 lg:px-8">
        <h1 className="w-full text-left text-[27px] font-[900] uppercase md:text-[36px]">
          Property Listings
        </h1>

        <AllListings />
      </main>

      <Footer />

      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default Properties;

import { useState, useEffect } from 'react';
import Nav from '@/components/common/Nav';
import NavMenu from '@/components/common/NavMenu';
import Footer from '@/components/common/Footer';
import AllListings from '@/components/layout/properties/AllListings';
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

      <main className="mx-auto flex max-w-7xl flex-1 flex-col space-y-20 px-6 py-24 md:py-32 lg:px-12">
        <div className="text-left">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Properties
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Property <span className="font-medium">Listings</span>
          </h1>
        </div>

        <AllListings />
      </main>

      <Footer />

      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default Properties;

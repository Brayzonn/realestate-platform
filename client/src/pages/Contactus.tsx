import { useEffect, useState } from 'react';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import NavMenu from '@/components/common/NavMenu';
import ContactHero from '@/components/layout/contact-us/ContactHero';
import OfficeLocationMap from '@/components/layout/contact-us/OfficeLocationMap';
import ContactMethods from '@/components/layout/contact-us/ContactMethods';
import ContactFormSection from '@/components/layout/contact-us/ContactFormSection';

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      />

      <main className="mx-auto max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <ContactHero />
        <ContactFormSection />

        <ContactMethods />

        <OfficeLocationMap />
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default Contactus;

import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import NavMenu from '@/components/common/NavMenu';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import PropertyImageGallery from '@/components/layout/properties/PropertyImageGallery';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import PropertyNavigation from '@/components/layout/properties/PropertyNavigation';
import { propertiesData } from '@/store/data';
import PropertyDetails from '@/components/layout/properties/PropertyDetails';

const PropertyView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { id } = useParams<{ id: string }>();
  const property = propertiesData.find((selectedProperty) => selectedProperty.id === id);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  return (
    <div
      className={`flex min-h-screen flex-col ${isMenuOpen ? 'h-screen overflow-hidden' : 'relative'}`}
    >
      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        defaultLogo={companylogoblack}
        scrolledLogo={companylogoblack}
        toggleMenu={toggleMenu}
        showBorder={true}
        borderOnMobileOnly={false}
        className={`min-h-[100px] px-[1rem]`}
      />

      <main className="mx-auto flex min-h-screen max-w-7xl flex-1 flex-col items-center space-y-[2rem] px-[1rem] pt-[3rem]">
        <PropertyDetails />
        <PropertyImageGallery property={property} />
        <PropertyNavigation />
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default PropertyView;

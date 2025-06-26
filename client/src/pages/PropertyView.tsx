import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import NavMenu from '@/components/layout/NavMenu';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PropertyImageGallery from '@/components/layout/PropertyImageGallery';
import arrowRight from '@/assets/images/arrowright.svg';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import { HomeIcon } from '@/components/icons/Index';
import { ChevronRight } from '@/components/icons/Index';
import GoogleMap from '@/components/map/GoogleMap';
import { propertiesData } from '@/store/data';

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

  const mapMarkers = [
    {
      position: property.coordinates,
      title: property.title,
      info: `
          <div style="max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold;">${property.title}</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px;">${property.location}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${property.price}</p>
            <p style="margin: 0; font-size: 12px;">${property.bedrooms} Bedrooms • ${property.bathrooms} Bathrooms • ${property.squareFeet} sqft</p>
          </div>
        `,
    },
  ];

  const openDirections = () => {
    const destination = `${property.coordinates.lat},${property.coordinates.lng}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${encodeURIComponent(property.location)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const formatNumber = (num: number) => {
    const numbers = [
      'Zero',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
    ];
    return numbers[num] || num.toString();
  };

  return (
    <>
      <section className="flex min-h-screen flex-col space-y-[2rem]">
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

        <main className="mx-auto flex min-h-[400px] max-w-7xl flex-1 flex-col items-center space-y-[2rem] px-[1rem] pt-[3rem]">
          <div className="flex w-full flex-col space-y-[2rem]">
            <div className="flex w-full flex-col space-y-[1rem]">
              <h1 className="w-full text-left text-[27px] font-[900] uppercase md:text-[36px]">
                {property.title}{' '}
              </h1>
              <p className="w-full">{property.description}</p>
            </div>

            <div className="relative max-w-[500px] rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="bg-alternativePastelYellow absolute top-0 left-0 h-[2px] w-16 rounded-full"></div>

              <div className="mb-8 space-y-6">
                <div className="flex items-start justify-between border-b border-gray-100 py-3">
                  <span className="font-medium text-gray-600">Location</span>
                  <span className="max-w-[300px] text-right font-medium text-gray-900">
                    {property.location}
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-gray-100 py-3">
                  <span className="font-medium text-gray-600">Bedrooms</span>
                  <span className="text-right font-medium text-gray-900">
                    {formatNumber(property.bedrooms)}{' '}
                    <span className="text-gray-500">({property.bedrooms})</span>
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-gray-100 py-3">
                  <span className="font-medium text-gray-600">Bathrooms</span>
                  <span className="text-right font-medium text-gray-900">
                    {formatNumber(property.bathrooms)}{' '}
                    <span className="text-gray-500">({property.bathrooms})</span>
                  </span>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-600">Price</span>
                    <span className="text-xl font-bold tracking-wide text-black">
                      {property.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between py-3">
                  <span className="font-medium text-gray-600">Area</span>
                  <span className="text-right font-medium text-gray-900">
                    {property.squareFeet.toLocaleString()}{' '}
                    <span className="text-gray-500">sqft</span>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="unstyled"
                  size="unstyled"
                  onClick={() => console.log('rar')}
                  className="hover:bg-alternativePastelYellow flex w-full items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:text-black focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:outline-none"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Make Inquiry
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col space-y-[3rem] py-[1rem]">
            <h1 className="flex w-full items-center gap-4 text-left text-[27px] font-[900] uppercase md:text-[36px]">
              Photo Gallery
              <span className="block h-[2px] w-[60px] bg-black"></span>
            </h1>

            <div className="mb-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PropertyImageGallery property={property} />
            </div>
          </div>

          <div className="flex w-full flex-col space-y-[2rem] py-[1rem]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h1 className="flex w-full items-center gap-4 text-[27px] font-[900] uppercase md:text-[36px]">
                Location Map
                <span className="block h-[2px] w-[60px] bg-black"></span>
              </h1>

              <Button
                variant="unstyled"
                size="unstyled"
                onClick={openDirections}
                className="bg-alternativePastelYellow flex space-x-2 rounded-lg px-6 py-3 font-medium whitespace-nowrap text-black transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
              >
                <p>Get Directions</p>
                <img src={arrowRight} alt="arrowRight" />
              </Button>
            </div>

            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <GoogleMap
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                center={property.coordinates}
                zoom={16}
                markers={mapMarkers}
              />
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-700">
                <strong>Address:</strong> {property.location}
                <br />
                <strong>Coordinates:</strong> {property.coordinates.lat}, {property.coordinates.lng}
                <br />
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center pt-6">
            <Link
              to="/properties"
              className="group bg-alternativePastelYellow border-alternativePastelYellow focus:ring-alternativePastelYellow flex transform items-center gap-3 rounded-xl border-2 px-8 py-4 font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-2xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <HomeIcon />
              Explore More Properties
              <ChevronRight />
            </Link>
          </div>
        </main>

        <Footer />
      </section>

      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  );
};

export default PropertyView;

import { useEffect, useState } from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import ContactCard from '@/components/ui/ContactCard';
import NavMenu from '@/components/layout/NavMenu';
import GoogleMap from '@/components/map/GoogleMap';
import arrowRight from '@/assets/images/arrowright.svg';
import Button from '@/components/ui/Button';

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDirections = () => {
    const destination = `${{ lat: 4.8156, lng: 7.0498 }}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${encodeURIComponent(property.location)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div
      className={`text-mainTextBlack min-h-screen ${isMenuOpen ? 'fixed inset-0 overflow-hidden' : ''}`}
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

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Ready to find your dream property? Our expert team is here to guide you through every
              step of your real estate journey.
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Call Us</h3>
              <p className="mt-2 text-gray-600">Mon-Fri from 8am to 6pm</p>
              <p className="mt-1 text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Email Us</h3>
              <p className="mt-2 text-gray-600">We&apos;ll respond within 24 hours</p>
              <p className="mt-1 text-lg font-medium text-gray-900">info@company.com</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <svg
                  className="h-8 w-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Visit Us</h3>
              <p className="mt-2 text-gray-600">Come see us in person</p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                123 Real Estate Ave
                <br />
                Suite 100, City, ST 12345
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="py-16">
          <div className="grid min-h-screen grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form - Centered on small screens */}
            <div className="w-full lg:max-w-none">
              <ContactCard />
            </div>
            {/* Additional Info */}
            <div className="w-full lg:max-w-none lg:pl-8">
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-900">By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Frequently Asked Questions
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">How quickly do you respond?</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        We typically respond to all inquiries within 2-4 hours during business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Do you offer free consultations?
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Yes! We provide complimentary consultations for all potential clients.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">What areas do you serve?</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        We serve the entire metropolitan area and surrounding counties.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
                  <p className="mt-2 text-gray-600">
                    For urgent property matters outside business hours:
                  </p>
                  <p className="mt-2 text-lg font-medium text-gray-900">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex w-full flex-col space-y-[2rem] py-[4rem]">
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
              center={{ lat: 4.8156, lng: 7.0498 }}
              zoom={16}
            />
          </div>
        </div>
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default Contactus;

import { useEffect, useState } from 'react';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import NavMenu from '@/components/common/NavMenu';
import ContactCard from '@/components/layout/contact-us/ContactCard';
import ContactMethods from '@/components/layout/contact-us/ContactMethods';

const PropertyInquiry = () => {
  useEffect(() => {
    window.scrollTo(0, 400);
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
        className={`min-h-[100px] px-[1rem]`}
      />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Property Inquiry
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Interested in a property? Fill out the form below and we&apos;ll get back to you
                within 24 hours to discuss your requirements and schedule a viewing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-20">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-gray-50 to-white opacity-50"></div>
                  <div className="relative">
                    <ContactCard useStoredProperty={true} />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  <div className="rounded-lg border border-gray-200/60 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Why Choose Us?</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Expert local market knowledge
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        24-hour response guarantee
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Flexible viewing schedules
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Comprehensive property support
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200/60 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Next Steps</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-0.5 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Submit Your Inquiry</p>
                          <p className="text-xs text-gray-600">
                            Fill out the form with your details
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-0.5 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            We&apos;ll Contact You
                          </p>
                          <p className="text-xs text-gray-600">
                            Within 24 hours via your preferred method
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-0.5 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                          3
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Schedule Viewing</p>
                          <p className="text-xs text-gray-600">
                            Arrange a convenient time to visit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200/60 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">
                      Need Immediate Help?
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      For urgent inquiries or same-day viewings, call us directly.
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="inline-flex items-center text-sm font-medium text-gray-900 transition-colors duration-200 hover:text-gray-700"
                    >
                      <svg
                        className="mr-2 h-4 w-4"
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
                      {import.meta.env.VITE_C0MPANY_ADDRESS}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Other Ways to Reach Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Choose the method that works best for you
              </p>
            </div>
            <ContactMethods />
          </div>
        </section>
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default PropertyInquiry;

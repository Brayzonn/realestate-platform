import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const ContactSection = () => {
  return (
    <section className="py-[5rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start text-left">
          <div className="mb-4 flex items-center justify-start space-x-4">
            <div className="h-[2px] w-12 bg-yellow-400"></div>
            <h2 className="text-left text-sm font-semibold tracking-wider text-gray-900 uppercase">
              contact
            </h2>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-2xl text-base text-gray-600 md:text-lg">
            Ready to find your dream property or have questions about our services? Get in touch
            with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start justify-center">
          <div className="mx-auto w-full max-w-2xl space-y-6 md:mx-0">
            <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg lg:p-8">
              <div className="absolute top-0 left-0 h-[2px] w-16 rounded-full bg-yellow-400"></div>

              <h3 className="mb-6 text-2xl font-semibold text-gray-900">Get in Touch</h3>

              <div className="mb-6 space-y-5">
                <div className="flex flex-col gap-3 border-b border-gray-100 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex min-w-0 flex-shrink-0 items-center space-x-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                    <span className="font-medium text-gray-600">Phone</span>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-medium text-gray-900">(80) 535-010334</p>
                    <p className="text-sm text-gray-500">Call for assistance</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-b border-gray-100 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex min-w-0 flex-shrink-0 items-center space-x-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                    <span className="font-medium text-gray-600">Email</span>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-medium break-all text-gray-900 sm:break-normal">
                      info@yourcompany.com
                    </p>
                    <p className="text-sm text-gray-500">Send us an email</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-b border-gray-100 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex min-w-0 flex-shrink-0 items-center space-x-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                    <span className="font-medium text-gray-600">Location</span>
                  </div>
                  <div className="sm:max-w-xs sm:text-right">
                    <p className="font-medium text-gray-900">
                      24 Ademola Adetokumbo
                      <br />
                      Abuja, FCT
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="mb-3 flex items-center space-x-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                    <span className="font-medium text-gray-600">Business Hours</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-900">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="unstyled"
                  size="unstyled"
                  onClick={() => console.log('Call now clicked')}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="mx-auto grid max-w-md grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2">
              <div className="relative rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg">
                <div className="absolute top-0 left-1/2 h-[2px] w-8 -translate-x-1/2 transform rounded-full bg-yellow-400"></div>
                <div className="mb-1 text-2xl font-bold text-gray-900">24hrs</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="relative rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg">
                <div className="absolute top-0 left-1/2 h-[2px] w-8 -translate-x-1/2 transform rounded-full bg-yellow-400"></div>
                <div className="mb-1 text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

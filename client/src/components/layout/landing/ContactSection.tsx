import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const ContactSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-left">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Contact
            </span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Contact <span className="font-medium">Us</span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed font-light text-gray-600">
            Ready to find your dream property or have questions about our services? Get in touch
            with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start justify-center">
          <div className="mx-auto w-full max-w-2xl space-y-8 md:mx-0">
            <div className="rounded-sm border border-gray-200/60 bg-white p-8 lg:p-10">
              <h3 className="mb-8 text-2xl font-medium text-gray-900">Get in Touch</h3>

              <div className="mb-8 space-y-6">
                <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <span className="font-medium text-gray-600">Phone</span>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-medium text-gray-900">
                      {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
                    </p>
                    <p className="text-sm font-light text-gray-500">Call for assistance</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-yellow-400" />
                    <span className="font-medium text-gray-600">Email</span>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-medium break-all text-gray-900 sm:break-normal">
                      {import.meta.env.VITE_C0MPANY_EMAIL}
                    </p>
                    <p className="text-sm font-light text-gray-500">Send us an email</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-400" />
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

                <div className="rounded-sm border border-gray-200/60 bg-gray-50 p-6">
                  <div className="mb-4 flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <span className="font-medium text-gray-600">Business Hours</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-900">
                    <p className="flex justify-between">
                      <span className="font-light">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-light">Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-light">Sunday:</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="unstyled"
                  size="unstyled"
                  onClick={() => console.log('Call now clicked')}
                  className="flex w-full items-center justify-center gap-3 rounded-sm bg-gray-900 px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center">
                <div className="mb-2 text-3xl font-light text-gray-900">24hrs</div>
                <div className="text-sm font-light tracking-wide text-gray-500 uppercase">
                  Response Time
                </div>
              </div>
              <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center">
                <div className="mb-2 text-3xl font-light text-gray-900">500+</div>
                <div className="text-sm font-light tracking-wide text-gray-500 uppercase">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

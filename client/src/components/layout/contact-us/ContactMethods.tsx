import { MapPin, Mail, Phone } from '@/components/icons/Index';

const ContactMethods = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
            <Phone />
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">Call Us</h3>
          <p className="mt-2 text-gray-600">Mon-Fri from 8am to 6pm</p>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
            <Mail />
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900">Email Us</h3>
          <p className="mt-2 text-gray-600">We&apos;ll respond within 24 hours</p>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {import.meta.env.VITE_C0MPANY_EMAIL}
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
            <MapPin />
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
    </section>
  );
};

export default ContactMethods;

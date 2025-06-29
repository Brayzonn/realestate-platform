import { MapPin, Mail, Phone } from '@/components/icons';

const ContactMethods = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <Phone />
          </div>
          <h3 className="mt-6 text-lg font-medium text-gray-900">Call Us</h3>
          <p className="mt-3 font-light text-gray-600">Mon-Fri from 8am to 6pm</p>
          <p className="mt-2 font-medium text-gray-900">
            {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
          </p>
        </div>

        <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <Mail />
          </div>
          <h3 className="mt-6 text-lg font-medium text-gray-900">Email Us</h3>
          <p className="mt-3 font-light text-gray-600">We&apos;ll respond within 24 hours</p>
          <p className="mt-2 font-medium text-gray-900">{import.meta.env.VITE_C0MPANY_EMAIL}</p>
        </div>

        <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <MapPin />
          </div>
          <h3 className="mt-6 text-lg font-medium text-gray-900">Visit Us</h3>
          <p className="mt-3 font-light text-gray-600">Come see us in person</p>
          <p className="mt-2 leading-relaxed font-medium text-gray-900">
            {import.meta.env.VITE_C0MPANY_ADDRESS}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;

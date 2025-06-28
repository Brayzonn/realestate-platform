import ContactCard from '@/components/layout/contact-us/ContactCard';

const ContactFormSection = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="w-full">
          <ContactCard />
        </div>

        <div className="w-full space-y-8">
          <div className="rounded-sm border border-gray-200/60 bg-white p-8">
            <h3 className="mb-6 text-xl font-medium text-gray-900">Business Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="font-light text-gray-600">Monday - Friday</span>
                <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="font-light text-gray-600">Saturday</span>
                <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-light text-gray-600">Sunday</span>
                <span className="font-medium text-gray-900">By Appointment</span>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gray-200/60 bg-white p-8">
            <h3 className="mb-6 text-xl font-medium text-gray-900">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h4 className="mb-2 font-medium text-gray-900">How quickly do you respond?</h4>
                <p className="leading-relaxed font-light text-gray-600">
                  We typically respond to all inquiries within 2-4 hours during business days.
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h4 className="mb-2 font-medium text-gray-900">Do you offer free consultations?</h4>
                <p className="leading-relaxed font-light text-gray-600">
                  Yes! We provide complimentary consultations for all potential clients.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900">What areas do you serve?</h4>
                <p className="leading-relaxed font-light text-gray-600">
                  We serve the entire metropolitan area and surrounding counties.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gray-200/60 bg-gray-50 p-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">Emergency Contact</h3>
            <p className="mb-4 leading-relaxed font-light text-gray-600">
              For urgent property matters outside business hours:
            </p>
            <p className="text-lg font-medium text-gray-900">
              {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

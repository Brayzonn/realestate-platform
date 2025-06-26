import ContactCard from '@/components/layout/contact-us/ContactCard';

const ContactFormSection = () => {
  return (
    <section className="py-16">
      <div className="grid min-h-screen grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="w-full lg:max-w-none">
          <ContactCard />
        </div>

        <div className="w-full lg:max-w-none lg:pl-8">
          <div className="space-y-8">
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

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">How quickly do you respond?</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    We typically respond to all inquiries within 2-4 hours during business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Do you offer free consultations?</h4>
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

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
              <p className="mt-2 text-gray-600">
                For urgent property matters outside business hours:
              </p>
              <p className="mt-2 text-lg font-medium text-gray-900">
                {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

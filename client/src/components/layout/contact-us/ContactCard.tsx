import { useState } from 'react';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactCard = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mx-auto h-full w-full max-w-2xl rounded-sm border border-gray-200/60 bg-white p-8 shadow-sm">
      <h3 className="mb-8 text-2xl font-medium text-gray-900">Send us a Message</h3>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-600">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-sm border border-gray-200/60 bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-600">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-sm border border-gray-200/60 bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-3 block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-sm border border-gray-200/60 bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="(480) 555-0103"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-3 block text-sm font-medium text-gray-600">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-sm border border-gray-200/60 bg-white px-4 py-4 font-light text-gray-900 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
              >
                <option value="">Select a subject</option>
                <option value="property-inquiry">Property Inquiry</option>
                <option value="property-viewing">Schedule Viewing</option>
                <option value="financing">Financing Options</option>
                <option value="construction">Construction Quote</option>
                <option value="general">General Question</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-3 block text-sm font-medium text-gray-600">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="h-32 w-full resize-none rounded-sm border border-gray-200/60 bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none md:h-48"
              placeholder="Tell us about your property needs or ask us any questions..."
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="unstyled"
              size="unstyled"
              className="flex w-full items-center justify-center gap-3 rounded-sm bg-gray-900 px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;

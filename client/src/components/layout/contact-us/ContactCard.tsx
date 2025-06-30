import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { containsEmojis, isValidEmail } from '@/utils';
import { FormData, FormErrors } from '@/ts-types/contactUsTypes';
import { Property } from '@/ts-types/propertyTypes';

interface ContactCardProps {
  useStoredProperty: boolean;
}

const ContactCard = ({ useStoredProperty = true }: ContactCardProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 350);

    if (useStoredProperty) {
      try {
        const storedProperty = sessionStorage.getItem('selectedProperty');

        if (storedProperty) {
          const parsedProperty: Property = JSON.parse(storedProperty);
          setFormData((prev) => ({
            ...prev,
            subject: 'property-inquiry',
            message: `I am interested in the property "${parsedProperty.title}" located at ${parsedProperty.location}. I would like to schedule a viewing. Please contact me to arrange a suitable time.`,
          }));
        }
      } catch (error) {
        console.error('Failed to parse stored property:', error);
        setFormData((prev) => ({
          ...prev,
          subject: 'property-inquiry',
          message: 'Property inquiry',
        }));
      }
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (containsEmojis(formData.name)) {
      newErrors.name = 'Name cannot contain emojis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (containsEmojis(formData.email)) {
      newErrors.email = 'Email cannot contain emojis';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }

    if (isSuccess || isError) {
      setIsSuccess(false);
      setIsError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      sessionStorage.removeItem('selectedProperty');
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstError = Object.values(errors)[0];
  const hasValidationErrors = Object.keys(errors).length > 0;

  return (
    <div className="mx-auto h-full w-full max-w-2xl rounded-sm border border-gray-200/60 bg-white p-8 shadow-sm">
      <h3 className="mb-8 text-2xl font-medium text-gray-900">Send us a Message</h3>

      {isSuccess && (
        <div className="mb-6 flex items-center space-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 shadow-sm">
          <svg
            className="h-4 w-4 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm font-light text-gray-700">
            Thank you! Your submission has been received.
          </p>
        </div>
      )}

      {isError && (
        <div className="mb-6 flex items-center space-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 shadow-sm">
          <svg
            className="h-4 w-4 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <p className="text-sm font-light text-gray-700">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      {hasValidationErrors && (
        <div className="mb-6 flex items-center space-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 shadow-sm">
          <svg
            className="h-4 w-4 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <p className="text-sm font-light text-gray-700">{firstError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-600">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-sm border bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none ${
                  errors.name
                    ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                    : 'border-gray-200/60 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                }`}
                placeholder="Your name"
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
                className={`w-full rounded-sm border bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none ${
                  errors.email
                    ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                    : 'border-gray-200/60 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                }`}
                placeholder="youremail@example.com"
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
                className={`w-full cursor-pointer rounded-sm border bg-white px-4 py-4 font-light text-gray-900 transition-all duration-200 focus:outline-none ${
                  errors.subject
                    ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                    : 'border-gray-200/60 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                }`}
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
              className={`h-32 w-full resize-none rounded-sm border bg-white px-4 py-4 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none md:h-48 ${
                errors.message
                  ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                  : 'border-gray-200/60 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
              }`}
              placeholder="Tell us about your property needs or ask us any questions..."
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="unstyled"
              size="unstyled"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-sm bg-gray-900 px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Message
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;

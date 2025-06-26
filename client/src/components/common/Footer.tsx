import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import companylogo from '@/assets/images/companylogo.svg';
import { TwitterIcon, FacebookIcon, YouTubeIcon, InstagramIcon } from '@/components/icons/Index';

// interface NewsletterFormData {
//   email: string;
// }

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;
    setIsSubmitting(true);
    setIsError(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setEmail('');

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigationLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Communities', href: '/communities' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const utilityLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: "FAQ's", href: '/faqs' },
  ];

  const socialLinks = [
    { icon: TwitterIcon, href: 'https://twitter.com/brayzoney', label: 'Twitter' },
    { icon: FacebookIcon, href: 'https://facebook.com/', label: 'Facebook' },
    { icon: YouTubeIcon, href: 'https://youtube.com/brayzonn', label: 'YouTube' },
    { icon: InstagramIcon, href: 'https://instagram.com/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={companylogo}
                alt="Company Logo"
                className="h-10 w-auto brightness-0 invert filter"
              />
            </Link>

            <div className="max-w-md">
              <form
                onSubmit={handleNewsletterSubmit}
                className="focus-within:ring-alternativePastelYellow flex rounded-md focus-within:ring-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Signup for Updates"
                  required
                  disabled={isSubmitting}
                  className="flex-1 rounded-l-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-gray-700 focus:outline-none disabled:opacity-50"
                />
                <Button
                  variant="unstyled"
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="bg-alternativePastelYellow rounded-r-md border border-l-0 border-gray-700 px-6 py-2 text-black transition-colors duration-200 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? '...' : '→'}
                </Button>
              </form>

              {isSuccess && (
                <div className="mt-2 text-sm text-green-400">
                  Thank you! Your submission has been received!
                </div>
              )}

              {isError && (
                <div className="mt-2 text-sm text-red-400">
                  Oops! Something went wrong while submitting the form.
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <div className="text-gray-300">23 Gwarimpa Avenue, Abuja, Nigeria</div>

              <a
                href={import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
                className="hover:text-alternativePastelYellow block text-gray-300 transition-colors duration-200"
              >
                {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
              </a>

              <a
                href={import.meta.env.VITE_C0MPANY_EMAIL}
                className="hover:text-alternativePastelYellow block text-gray-300 transition-colors duration-200"
              >
                {import.meta.env.VITE_C0MPANY_EMAIL}
              </a>
            </div>

            <div className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-alternativePastelYellow block text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-alternativePastelYellow block text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center text-sm text-gray-400">
              Copyright © 2025 company. All rights reserved.
            </div>

            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="hover:text-alternativePastelYellow text-gray-400 transition-colors duration-200"
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

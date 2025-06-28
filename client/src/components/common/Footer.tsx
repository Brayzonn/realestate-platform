import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import companylogo from '@/assets/images/companylogo.svg';
import { TwitterIcon, FacebookIcon, YouTubeIcon, InstagramIcon } from '@/components/icons/Index';

const Footer = () => {
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
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Communities', href: '/communities' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const utilityLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: "FAQ's", href: '/' },
  ];

  const socialLinks = [
    { icon: TwitterIcon, href: 'https://twitter.com/brayzoney', label: 'Twitter' },
    { icon: FacebookIcon, href: 'https://facebook.com/', label: 'Facebook' },
    { icon: YouTubeIcon, href: 'https://youtube.com/brayzonn', label: 'YouTube' },
    { icon: InstagramIcon, href: 'https://instagram.com/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <img
                src={companylogo}
                alt="Company Logo"
                className="h-10 w-auto brightness-0 invert filter"
              />
            </Link>

            <div className="max-w-md space-y-4">
              <h3 className="text-lg font-medium text-white">Stay Updated</h3>
              <p className="text-sm leading-relaxed font-light text-gray-400">
                Get the latest property listings, market insights, and exclusive opportunities
                delivered to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex rounded-sm border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-colors duration-200 focus-within:border-gray-600">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                    className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none disabled:opacity-50"
                  />
                  <Button
                    variant="unstyled"
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="rounded-sm bg-yellow-400 px-6 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? '...' : 'Subscribe'}
                  </Button>
                </div>

                {isSuccess && (
                  <div className="text-sm font-light text-green-400">
                    Thank you! Your submission has been received!
                  </div>
                )}

                {isError && (
                  <div className="text-sm font-light text-red-400">
                    Oops! Something went wrong while submitting the form.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="space-y-6">
              <h4 className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
                Contact
              </h4>
              <div className="space-y-3">
                <p className="leading-relaxed font-light text-gray-300">
                  23 Gwarimpa Avenue, Abuja, Nigeria
                </p>

                <a
                  href={`tel:${import.meta.env.VITE_C0MPANY_PHONE_NUMBER}`}
                  className="block font-light text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  {import.meta.env.VITE_C0MPANY_PHONE_NUMBER}
                </a>

                <a
                  href={`mailto:${import.meta.env.VITE_C0MPANY_EMAIL}`}
                  className="block font-light text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  {import.meta.env.VITE_C0MPANY_EMAIL}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
                Navigation
              </h4>
              <div className="space-y-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block font-light text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
                Legal
              </h4>
              <div className="space-y-3">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block font-light text-gray-300 transition-colors duration-200 hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div className="text-sm font-light text-gray-400">
              Copyright © 2025 company. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-400 transition-all duration-200 hover:scale-110 hover:text-yellow-400"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

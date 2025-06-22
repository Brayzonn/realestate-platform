import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import companylogo from '@/assets/images/companylogo.png';
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
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            
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
        { label: "FAQ's", href: '/faqs' }
  ];

  const socialLinks = [
        { icon: TwitterIcon, href: 'https://twitter.com/', label: 'Twitter' },
        { icon: FacebookIcon, href: 'https://facebook.com/', label: 'Facebook' },
        { icon: YouTubeIcon, href: 'https://youtube.com/', label: 'YouTube' },
        { icon: InstagramIcon, href: 'https://instagram.com/', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
            <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
                <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img 
                                src={companylogo} 
                                alt="Company Logo" 
                                className="h-10 w-auto filter brightness-0 invert"
                            />
                        </Link>
                    
                        <div className="max-w-md">
                            <form onSubmit={handleNewsletterSubmit} className="flex focus-within:ring-2 focus-within:ring-alternativePastelYellow rounded-md">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Signup for Updates"
                                    required
                                    disabled={isSubmitting}
                                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-700 disabled:opacity-50"
                                />
                                <Button
                                    variant="unstyled"
                                    type="submit"
                                    disabled={isSubmitting || !email}
                                    className="px-6 py-2 bg-alternativePastelYellow text-black rounded-r-md hover:bg-yellow-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-l-0 border-gray-700"
                                >
                                    {isSubmitting ? '...' : '→'}
                                </Button>
                            </form>
                        
                            {isSuccess && (
                                <div className="mt-2 text-green-400 text-sm">
                                Thank you! Your submission has been received!
                                </div>
                            )}
                        
                            {isError && (
                                <div className="mt-2 text-red-400 text-sm">
                                Oops! Something went wrong while submitting the form.
                                </div>
                            )}
                        </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                

                    <div className="space-y-3">
                        <div className="text-gray-300">
                            23 Gwarimpa Avenue, Abuja, Nigeria
                        </div>

                        <a 
                            href="tel:(480)555-0103" 
                            className="block text-gray-300 hover:text-alternativePastelYellow transition-colors duration-200"
                        >
                            (480) 555-0103
                        </a>

                        <a 
                            href="mailto:hello@citadel.io" 
                            className="block text-gray-300 hover:text-alternativePastelYellow transition-colors duration-200"
                        >
                            hello@company.io
                        </a>
                    </div>

                    <div className="space-y-3">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="block text-gray-300 hover:text-alternativePastelYellow transition-colors duration-200"
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
                                className="block text-gray-300 hover:text-alternativePastelYellow transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                
                </div>
            </div>


            <div className="border-t border-gray-800 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    
                    <div className="text-gray-400 text-sm">
                        Copyright © 2025 company. All rights reserved.
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
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
                                        className="text-gray-400 hover:text-alternativePastelYellow transition-colors duration-200"
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
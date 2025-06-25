import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };


  return (
    <section className="py-[5rem] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-start items-center space-y-2 text-center mb-16">
            <h1 className="text-3xl uppercase md:text-4xl font-bold mb-4">
                Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                Ready to find your dream property or have questions about our services? Get in touch with our expert team today.
            </p>
        </div>

        {/* Main Content Grid - Stay horizontal until md breakpoint */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 items-start justify-center">
          
          {/* Contact Form */}
          <div className="w-full h-full max-w-2xl bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-lg relative mx-auto md:mx-0">
                <div className="absolute top-0 left-0 w-16 h-[2px] bg-yellow-400 rounded-full"></div>
                
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
            
            <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                                placeholder="Your full name"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                            placeholder="(480) 555-0103"
                        />
                    </div>
                
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                        </label>

                        <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-[200px] px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none md:h-[320px]"
                    placeholder="Tell us about your property needs or ask us any questions..."
                    />
                </div>

                <Button
                        type="submit"
                        variant="unstyled" 
                            size="unstyled"
                        onClick={handleSubmit}
                        className="w-full px-6 py-4 bg-black hover:bg-yellow-400 text-white hover:text-black font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
                >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Send Message
              </Button>
            </div>
          </div>

          <div className="space-y-6 w-full max-w-2xl mx-auto md:mx-0">
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-lg relative">
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-yellow-400 rounded-full"></div>
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
              
              <div className="space-y-5 mb-6">
    
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-100 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
                    <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">Phone</span>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-gray-900 font-medium">(480) 555-0103</p>
                    <p className="text-sm text-gray-500">Call for assistance</p>
                  </div>
                </div>

        
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-100 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">Email</span>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-gray-900 font-medium break-all sm:break-normal">info@yourcompany.com</p>
                    <p className="text-sm text-gray-500">Send us an email</p>
                  </div>
                </div>

        
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-100 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">Location</span>
                  </div>
                  <div className="sm:text-right sm:max-w-xs">
                    <p className="text-gray-900 font-medium">
                      123 Real Estate Avenue<br />
                      Phoenix, AZ 85001
                    </p>
                  </div>
                </div>

    
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">Business Hours</span>
                  </div>
                  <div className="text-gray-900 space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </p>
                  </div>
                </div>
              </div>

                <div className="pt-2">
                        <Button 
                            variant="unstyled" 
                            size="unstyled"
                            onClick={() => console.log('test')}
                            className="w-full px-6 py-4 bg-black hover:bg-yellow-400 text-white hover:text-black font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </Button>
                </div>
            </div>

            <div className="grid grid-cols-1  gap-4 max-w-md mx-auto sm:max-w-none sm:grid-cols-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg text-center relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-yellow-400 rounded-full"></div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">24hrs</div>
                    <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg text-center relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-yellow-400 rounded-full"></div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
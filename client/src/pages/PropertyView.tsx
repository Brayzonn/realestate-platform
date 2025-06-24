import { useState } from 'react';
import { Link, useParams , Navigate} from 'react-router-dom';
import Button from '@/components/ui/Button';
import NavMenu from '@/components/layout/NavMenu';
import Nav from "@/components/layout/Nav"
import Footer from '@/components/layout/Footer';
import PropertyImageGallery from '@/components/layout/PropertyImageGallery';
import arrowRight from '@/assets/images/arrowright.svg';
import { HomeIcon } from '@/components/icons/Index';
import { ChevronRight } from '@/components/icons/Index';
import GoogleMap from '@/components/map/GoogleMap';
import { propertiesData } from '@/store/data';

const PropertyView = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const { id } = useParams<{ id: string }>();
    const property = propertiesData.find(selectedProperty => selectedProperty.id === id);

    if (!property) {
      return <Navigate to="/properties" replace />;
    }

    const mapMarkers = [
      {
        position: property.coordinates,
        title: property.title,
        info: `
          <div style="max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold;">${property.title}</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px;">${property.location}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${property.price}</p>
            <p style="margin: 0; font-size: 12px;">${property.bedrooms} Bedrooms • ${property.bathrooms} Bathrooms • ${property.squareFeet} sqft</p>
          </div>
        `
      }
    ];

    const openDirections = () => {
      const destination = `${property.coordinates.lat},${property.coordinates.lng}`;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${encodeURIComponent(property.location)}`;
      window.open(googleMapsUrl, '_blank');
    };

    const formatNumber = (num: number) => {
      const numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
      return numbers[num] || num.toString();
    };

  return (
    <>
        <section className="min-h-screen flex flex-col space-y-[2rem]">
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
                  toggleMenu={toggleMenu} showBorder={true} borderOnMobileOnly={false} 
                  className ={`px-[1rem] min-h-[100px]`}
            />

            <main className='flex-1 min-h-[400px] max-w-7xl mx-auto pt-[3rem] px-[1rem] flex flex-col items-center space-y-[2rem] '>
                <div className='w-full flex flex-col space-y-[2rem]'>
                    <div className='w-full flex flex-col space-y-[1rem]'>
                        <h1 className='text-[27px] text-left w-full font-[900] uppercase md:text-[36px]'>{property.title} </h1> 
                        <p className='w-full'>{property.description}</p> 
                    </div>

                    <div className="max-w-[500px] bg-white border border-gray-200 rounded-xl p-8 shadow-lg relative">

                    <div className="absolute top-0 left-0 w-16 h-[2px] bg-alternativePastelYellow rounded-full"></div>
                    
                        <div className="space-y-6 mb-8">
                            <div className="flex justify-between items-start py-3 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">Location</span>
                                <span className="text-gray-900 text-right font-medium max-w-[300px]">{property.location}</span>
                            </div>
                            
                            <div className="flex justify-between items-start py-3 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">Bedrooms</span>
                                <span className="text-gray-900 text-right font-medium">
                                    {formatNumber(property.bedrooms)} <span className="text-gray-500">({property.bedrooms})</span>
                                </span>
                            </div>
                            
                            <div className="flex justify-between items-start py-3 border-b border-gray-100">
                                <span className="text-gray-600 font-medium">Bathrooms</span>
                                <span className="text-gray-900 text-right font-medium">
                                    {formatNumber(property.bathrooms)} <span className="text-gray-500">({property.bathrooms})</span>
                                </span>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium text-lg">Price</span>
                                    <span className="text-black text-xl font-bold tracking-wide">
                                        {property.price}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-start py-3">
                                <span className="text-gray-600 font-medium">Area</span>
                                <span className="text-gray-900 text-right font-medium">
                                    {property.squareFeet.toLocaleString()} <span className="text-gray-500">sqft</span>
                                </span>
                            </div>
                        </div>
                    
            
                        <div className="pt-2">
                            <Button 
                              variant="unstyled" 
                              size="unstyled"
                              onClick={()=>console.log('rar')}
                              className="w-full px-6 py-4 bg-black hover:bg-alternativePastelYellow text-white hover:text-black font-semibold text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 flex items-center justify-center gap-3"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              Make Inquiry
                            </Button>
                        </div>
                    </div>

                </div>

                <div className='w-full flex flex-col space-y-[3rem] py-[1rem]'>
                    <h1 className='text-[27px] text-left w-full font-[900] uppercase md:text-[36px] flex items-center gap-4'>
                        Photo Gallery 
                        <span className='block w-[60px] h-[2px] bg-black'></span>
                    </h1>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      <PropertyImageGallery property={property} />    
                    </div>
                </div>

                <div className='w-full flex flex-col space-y-[2rem] py-[1rem]'>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h1 className='text-[27px] w-full font-[900] uppercase md:text-[36px] flex items-center gap-4'>
                            Location Map
                            <span className='block w-[60px] h-[2px] bg-black'></span>
                        </h1>
                        
                        <Button 
                          variant="unstyled" 
                          size="unstyled"
                          onClick={openDirections}
                          className="flex space-x-2 px-6 py-3 bg-alternativePastelYellow text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 whitespace-nowrap"
                        >
                          <p>Get Directions</p>
                          <img src={arrowRight} alt="arrowRight" />
                        </Button>
                    </div>

                    <div className="w-full rounded-lg overflow-hidden shadow-lg">
                        <GoogleMap 
                            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                            center={property.coordinates}
                            zoom={16}
                            markers={mapMarkers}
                        />
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 text-sm">
                            <strong>Address:</strong> {property.location}<br/>
                            <strong>Coordinates:</strong> {property.coordinates.lat}, {property.coordinates.lng}<br/>
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center pt-6">
                    <Link 
                      to='/properties'
                      className="group px-8 py-4 bg-alternativePastelYellow border-2 border-alternativePastelYellow text-gray-800 font-semibold rounded-xl hover:border-black hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-alternativePastelYellow focus:ring-offset-2 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-3"
                    >
                      <HomeIcon />
                      Explore More Properties
                      <ChevronRight />
                    </Link>
                </div>
           
            </main>
              
            <Footer />
        </section>

        <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  )
}

export default PropertyView
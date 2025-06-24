import { useState } from 'react';
import { Link, useParams , Navigate} from 'react-router-dom';
import { propertiesData } from '@/store/data';
import Button from '@/components/ui/Button';
import NavMenu from '@/components/layout/NavMenu';
import Nav from "@/components/layout/Nav"
import Footer from '@/components/layout/Footer';
import PropertyImageGallery from '@/components/layout/PropertyImageGallery';
import arrowRight from '@/assets/images/arrowright.svg';
import { HomeIcon } from '@/components/icons/Index';
import { ChevronRight } from '@/components/icons/Index';
import GoogleMap from '@/components/map/GoogleMap';

const PropertyView = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const { id } = useParams<{ id: string }>();
    const property = propertiesData.find(p => p.id === id);

    if (!property) {
      return <Navigate to="/properties" replace />;
    }

    const propertyLocation = {
      lat: 9.0415,
      lng: 7.4950
    };

    const mapMarkers = [
      {
        position: propertyLocation,
        title: property.title,
        info: `
          <div style="max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold;">${property.title}</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px;">APO Resettlement, Abuja</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">₦170,000,000</p>
            <p style="margin: 0; font-size: 12px;">4 Bedrooms • 5 Bathrooms • 1476 sqft</p>
          </div>
        `
      }
    ];

    const openDirections = () => {
      const destination = `${propertyLocation.lat},${propertyLocation.lng}`;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=APO+Resettlement+Abuja`;
      window.open(googleMapsUrl, '_blank');
    };

  return (
    <>
        <section className="min-h-screen flex flex-col space-y-[2rem]">
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
                  toggleMenu={toggleMenu} showBorder={true} borderOnMobileOnly={false} 
                  className ={`px-[1rem] min-h-[100px]`}
            />

            <main className='flex-1 min-h-[400px] max-w-7xl mx-auto pt-[3rem] px-[1rem] flex flex-col items-center space-y-[2rem] '>
                <div className='flex flex-col space-y-[2rem]'>
                    <div className='w-full flex flex-col space-y-[1rem]'>
                        <h1 className='text-[27px] text-left w-full font-[900] uppercase md:text-[36px]'>{property.title} </h1> 
                        <p className='max-w-full'>Discover the perfect blend of style, convenience, and community in this meticulously designed townhouse. Nestled in a vibrant neighborhood, this urban oasis offers the best of city living with the comfort of a private residence. Boasting [4BHK] spacious bedrooms and [6 Bathrooms] well-appointed bathrooms, this townhouse provides ample space for families or professionals seeking a contemporary yet cozy home.</p> 
                    </div>

                    <div className="max-w-[500px] bg-black border border-gray-700 rounded-lg p-6 shadow-sm">
                        <div className="space-y-4 mb-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1">
                                <div className="text-white font-medium">Location</div>
                                <div className="text-gray-200 text-sm sm:text-right">APO Resettlement, Abuja</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1">
                                <div className="text-white font-medium">Bedrooms</div>
                                <div className="text-gray-200 text-sm sm:text-right">Four (4)</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1">
                                <div className="text-white font-medium">Bathrooms</div>
                                <div className="text-gray-200 text-sm sm:text-right">Five (5)</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1">
                                <div className="text-white font-medium">Price</div>
                                <div className="text-gray-200 text-sm font-semibold sm:text-right">₦170,000,000</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1">
                                <div className="text-white font-medium">Area</div>
                                <div className="text-gray-200 text-sm sm:text-right">1476 sqft</div>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <Button 
                              variant="unstyled" 
                              size="unstyled"
                              onClick={()=>console.log('rar')}
                              className="w-full px-4 py-3 bg-white border-2 border-white text-black font-medium rounded-lg hover:border-alternativePastelYellow hover:bg-alternativePastelYellow hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-alternativePastelYellow focus:ring-offset-2"
                            >
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
                      <PropertyImageGallery  />    
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
                            center={propertyLocation}
                            zoom={16}
                            markers={mapMarkers}
                        />
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 text-sm">
                            <strong>Address:</strong> APO Resettlement, Abuja, FCT, Nigeria<br/>
                            <strong>Coordinates:</strong> {propertyLocation.lat}, {propertyLocation.lng}<br/>
                            <strong>Nearby:</strong> Close to shopping centers, schools, and major roads
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center pt-6">
                    <Link 
                      to='/properties'
                      className="group px-8 py-4 bg-black border-2 border-black text-white font-semibold rounded-xl hover:border-alternativePastelYellow hover:bg-alternativePastelYellow hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-alternativePastelYellow focus:ring-offset-2 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center gap-3"
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
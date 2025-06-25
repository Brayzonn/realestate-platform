import { Link } from 'react-router-dom';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/layout/PropertyCard';
import { HomeIcon } from '@/components/icons/Index';


const FeaturedListings = () => {

  return (
    <section className="pt-[10rem] pb-[4rem] md:pt-[7rem] md:pb-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col items-center text-center mb-[5rem]">
            <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-[2px] bg-yellow-400"></div>
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                properties
                </h2>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Featured Properties
            </h1>
            <p className="text-base md:text-lg text-alternativeTextBlack">
                Explore a curated list of standout properties selected just for you.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {propertiesData.slice(0, 6).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <div className="text-center">
                <Link 
                    to="/properties" 
                    className="inline-flex space-x-2 items-center px-6 py-4 border border-black text-sm font-medium rounded-md text-white bg-black hover:bg-alternativePastelYellow hover:text-alternativeTextBlack hover:border-alternativePastelYellow transition-colors duration-200"
                >
                    <HomeIcon />
                    <p className='pl-1'>Explore All Listings</p> 
                </Link>
            </div>
                
        </div>
    </section>
  );
};

export default FeaturedListings;
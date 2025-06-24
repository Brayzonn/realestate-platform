import { Link } from 'react-router-dom';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/layout/PropertyCard';


const FeaturedListings = () => {

  return (
    <section className="w-full flex justify-center items-center py-[10rem] md:py-[7rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-start items-center space-y-2 text-center mb-[5rem]">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured properties
                </h1>

               <p className="text-base md:text-lg text-alternativeTextBlack">
                    Explore a curated list of standout properties selected just for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {propertiesData.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <div className="text-center">
                <Link 
                    to="/properties" 
                    className="inline-flex items-center px-6 py-4 border border-alternativePastelYellow text-sm font-medium rounded-md text-alternativeTextBlack bg-alternativePastelYellow hover:bg-gray-50 hover:text-alternativeTextBlack hover:border-gray-200 transition-colors duration-200"
                >
                    Explore All Listings
                </Link>
            </div>
                
        </div>
    </section>
  );
};

export default FeaturedListings;
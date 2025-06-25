import { Link } from 'react-router-dom';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/layout/PropertyCard';
import { HomeIcon } from '@/components/icons/Index';


const FeaturedListings = () => {

  return (
    <section className="pt-[10rem] pb-[4rem] md:pt-[7rem] md:pb-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-start items-center space-y-2 text-center mb-[5rem]">
                <h1 className="text-3xl uppercase md:text-4xl font-bold mb-4">
                    Featured properties
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
                    className="inline-flex space-x-2 items-center px-6 py-4 border border-alternativePastelYellow text-sm font-medium rounded-md text-alternativeTextBlack bg-alternativePastelYellow hover:bg-black hover:text-white hover:border-black transition-colors duration-200"
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
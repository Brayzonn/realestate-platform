import { Link } from 'react-router-dom';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/common/PropertyCard';
import { HomeIcon } from '@/components/icons/Index';

const FeaturedListings = () => {
  return (
    <section className="pt-[10rem] pb-[4rem] md:pt-[7rem] md:pb-[3rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-[5rem] flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center space-x-4">
            <div className="h-[2px] w-12 bg-yellow-400"></div>
            <h2 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
              properties
            </h2>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Featured Properties
          </h1>
          <p className="text-alternativeTextBlack text-base md:text-lg">
            Explore a curated list of standout properties selected just for you.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {propertiesData.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/properties"
            className="hover:bg-alternativePastelYellow hover:text-alternativeTextBlack hover:border-alternativePastelYellow inline-flex items-center space-x-2 rounded-md border border-black bg-black px-6 py-4 text-sm font-medium text-white transition-colors duration-200"
          >
            <HomeIcon />
            <p className="pl-1">Explore All Listings</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;

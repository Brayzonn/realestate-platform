import { Link } from 'react-router-dom';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/common/PropertyCard';
import { HomeIcon } from '@/components/icons';
import { FeaturedListingsLoading } from '@/components/ui/loading/Index';
import { useState, useEffect } from 'react';

const FeaturedListings = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);
  if (isLoading) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 text-center">
            <div className="mb-8 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-yellow-400"></div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
                Properties
              </span>
              <div className="h-px w-16 bg-yellow-400"></div>
            </div>

            <h2 className="mb-6 text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
              Featured <span className="font-medium">Properties</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-600">
              Explore a curated collection of exceptional properties, carefully selected to showcase
              the finest in luxury living and architectural excellence.
            </p>
          </div>
          <FeaturedListingsLoading />
        </div>
      </section>
    );
  } else {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 text-center">
            <div className="mb-8 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-yellow-400"></div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
                Properties
              </span>
              <div className="h-px w-16 bg-yellow-400"></div>
            </div>

            <h2 className="mb-6 text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
              Featured <span className="font-medium">Properties</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-600">
              Explore a curated collection of exceptional properties, carefully selected to showcase
              the finest in luxury living and architectural excellence.
            </p>
          </div>

          <div className="animate-fade-in mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {propertiesData.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="group inline-flex items-center space-x-3 rounded-sm bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
            >
              <div className="text-white/80 transition-colors duration-300 group-hover:text-white">
                <HomeIcon />
              </div>
              <span>Explore All Listings</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
};

export default FeaturedListings;

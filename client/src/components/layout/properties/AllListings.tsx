import { usePagination } from '@/hooks/usePagination';
import Button from '../../ui/Button';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/common/PropertyCard';
import arrowRight from '@/assets/images/arrowright.svg';
import arrowLeft from '@/assets/images/arrowleft.svg';
import { FeaturedListingsLoading } from '@/components/ui/loading/Index';
import { useEffect, useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';

const AllListings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    bedrooms: '',
    bathrooms: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);

  const filteredData = useMemo(() => {
    return propertiesData.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !filters.category || property.category === filters.category;

      const matchesBedrooms =
        !filters.bedrooms || property.bedrooms.toString() === filters.bedrooms;

      const matchesBathrooms =
        !filters.bathrooms || property.bathrooms.toString() === filters.bathrooms;

      return matchesSearch && matchesCategory && matchesBedrooms && matchesBathrooms;
    });
  }, [searchTerm, filters]);

  const { currentItems, hasNextPage, hasPrevPage, nextPage, prevPage, currentPage } = usePagination(
    {
      data: filteredData,
      itemsPerPage: 6,
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      category: '',
      bedrooms: '',
      bathrooms: '',
      minPrice: '',
      maxPrice: '',
    });
  };
  if (isLoading) {
    return (
      <section className="mb-12 space-y-6">
        <div className="text-left">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Properties
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Property <span className="font-medium">Listings</span>
          </h1>
        </div>
        <FeaturedListingsLoading />
      </section>
    );
  } else {
    return (
      <>
        <div className="mb-12 space-y-6">
          <div className="text-left">
            <div className="mb-8 flex items-center space-x-4">
              <div className="h-px w-16 bg-yellow-400"></div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
                Properties
              </span>
            </div>

            <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
              Property <span className="font-medium">Listings</span>
            </h1>
          </div>
          <div className="relative">
            <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties by title, description, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-sm border border-gray-200/60 bg-white py-4 pr-4 pl-12 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="unstyled"
              size="unstyled"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 rounded-sm border border-gray-200/60 bg-white px-4 py-3 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>

            {(searchTerm || Object.values(filters).some((filter) => filter !== '')) && (
              <Button
                variant="unstyled"
                size="unstyled"
                onClick={clearFilters}
                className="text-sm font-light text-gray-500 hover:text-gray-700"
              >
                Clear all
              </Button>
            )}
          </div>

          {showFilters && (
            <div className="rounded-sm border border-gray-200/60 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label
                    htmlFor="Category Filter"
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full rounded-sm border border-gray-200/60 bg-white px-3 py-2 font-light text-gray-900 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
                  >
                    <option value="">All Categories</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Bedrooms Filter "
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                    className="w-full rounded-sm border border-gray-200/60 bg-white px-3 py-2 font-light text-gray-900 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
                  >
                    <option value="">Any</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Bathrooms Filter "
                    className="mb-2 block text-sm font-medium text-gray-600"
                  >
                    Bathrooms
                  </label>
                  <select
                    value={filters.bathrooms}
                    onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
                    className="w-full rounded-sm border border-gray-200/60 bg-white px-3 py-2 font-light text-gray-900 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
                  >
                    <option value="">Any</option>
                    <option value="1">1 Bathroom</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="3">3 Bathrooms</option>
                    <option value="4">4+ Bathrooms</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <div className="text-sm font-light text-gray-500">
                    {filteredData.length} properties found
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg font-light text-gray-600">
              No properties found matching your criteria.
            </p>
            <Button
              variant="unstyled"
              size="unstyled"
              onClick={clearFilters}
              className="mt-4 text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Clear filters to see all properties
            </Button>
          </div>
        )}

        {!hasNextPage && hasPrevPage && (
          <div className="flex justify-start">
            <Button
              variant="unstyled"
              size="unstyled"
              onClick={prevPage}
              className="group border-alternativePastelYellow text-alternativeTextBlack bg-alternativePastelYellow hover:text-alternativeTextBlack flex items-center space-x-2 rounded-md border px-6 py-4 text-sm font-medium transition-colors duration-200 hover:border-gray-200 hover:bg-gray-50"
            >
              <p>Back</p>
              <img src={arrowLeft} alt="arrowLeft" />
            </Button>
          </div>
        )}

        {hasNextPage && (
          <div className="flex justify-end">
            <Button
              variant="unstyled"
              size="unstyled"
              onClick={nextPage}
              className="group border-alternativePastelYellow text-alternativeTextBlack bg-alternativePastelYellow hover:text-alternativeTextBlack flex items-center space-x-2 rounded-md border px-6 py-4 text-sm font-medium transition-colors duration-200 hover:border-gray-200 hover:bg-gray-50"
            >
              <p>Next</p>
              <img src={arrowRight} alt="arrowRight" />
            </Button>
          </div>
        )}
      </>
    );
  }
};

export default AllListings;

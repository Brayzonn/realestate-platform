import { useEffect } from 'react';
import { usePagination } from '@/hooks/usePagination';
import Button from '../../ui/Button';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/common/PropertyCard';
import arrowRight from '@/assets/images/arrowright.svg';
import arrowLeft from '@/assets/images/arrowleft.svg';

const AllListings = () => {
  const { currentItems, hasNextPage, hasPrevPage, nextPage, prevPage, currentPage } = usePagination(
    {
      data: propertiesData,
      itemsPerPage: 6,
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {!hasNextPage && hasPrevPage && (
        <Button
          variant="unstyled"
          size="unstyled"
          onClick={prevPage}
          className="group border-alternativePastelYellow text-alternativeTextBlack bg-alternativePastelYellow hover:text-alternativeTextBlack flex items-center space-x-2 rounded-md border px-6 py-4 text-sm font-medium transition-colors duration-200 hover:border-gray-200 hover:bg-gray-50"
        >
          <p>Back</p>
          <img src={arrowLeft} alt="arrowLeft" />
        </Button>
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
};

export default AllListings;

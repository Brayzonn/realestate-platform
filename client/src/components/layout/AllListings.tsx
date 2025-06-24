import { useEffect } from 'react';
import { usePagination } from '@/hooks/usePagination';
import Button from '../ui/Button';
import { propertiesData } from '@/store/data';
import PropertyCard from '@/components/layout/PropertyCard';
import arrowRight from '@/assets/images/arrowright.svg'
import arrowLeft from '@/assets/images/arrowleft.svg'



const AllListings = () => {

  const {
    currentItems,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    currentPage,
  } = usePagination({ 
    data: propertiesData, 
    itemsPerPage: 6 
  });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

  return (
    <section className="w-full flex justify-center items-center py-[5rem]">
        <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentItems.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            {!hasNextPage && hasPrevPage && (
                    <Button 
                        variant="unstyled" 
                        size="unstyled"
                        onClick={prevPage}
                        className="flex space-x-2 group items-center px-6 py-4 border border-alternativePastelYellow text-sm font-medium rounded-md text-alternativeTextBlack bg-alternativePastelYellow hover:bg-gray-50 hover:text-alternativeTextBlack hover:border-gray-200 transition-colors duration-200"
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
                        className="flex space-x-2 group items-center px-6 py-4 border border-alternativePastelYellow text-sm font-medium rounded-md text-alternativeTextBlack bg-alternativePastelYellow hover:bg-gray-50 hover:text-alternativeTextBlack hover:border-gray-200 transition-colors duration-200"
                    >
                        <p>Next</p>
                        <img src={arrowRight} alt="arrowRight" />
                    </Button>
                </div>
            )}
                
        </div>
    </section>
  )
}

export default AllListings
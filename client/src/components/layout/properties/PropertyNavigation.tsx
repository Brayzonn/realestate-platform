import { HomeIcon } from '@/components/icons';
import { ChevronRight } from '@/components/icons';
import { Link } from 'react-router-dom';

const PropertyNavigation = () => {
  return (
    <section className="flex w-full justify-center space-x-1 pb-[4rem]">
      <Link
        to="/properties"
        className="flex items-center space-x-3 rounded-sm bg-gray-900 px-6 py-4 font-medium whitespace-nowrap text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
      >
        <HomeIcon />
        <p>Explore More Properties</p>
        <ChevronRight />
      </Link>
    </section>
  );
};

export default PropertyNavigation;

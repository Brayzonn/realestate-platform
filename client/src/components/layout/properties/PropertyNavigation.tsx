import { HomeIcon } from '@/components/icons/Index';
import { ChevronRight } from '@/components/icons/Index';
import { Link } from 'react-router-dom';

const PropertyNavigation = () => {
  return (
    <section className="flex w-full justify-center pb-[4rem]">
      <Link
        to="/properties"
        className="group bg-alternativePastelYellow border-alternativePastelYellow focus:ring-alternativePastelYellow flex transform items-center gap-3 rounded-xl border-2 px-8 py-4 font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-2xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        <HomeIcon />
        Explore More Properties
        <ChevronRight />
      </Link>
    </section>
  );
};

export default PropertyNavigation;

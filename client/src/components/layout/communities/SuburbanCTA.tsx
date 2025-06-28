import { Link } from 'react-router-dom';

const SuburbanCTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Ready to Experience <span className="font-medium">Suburban Living?</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
            Let us help you find the perfect suburban home that matches your lifestyle and budget.
            Discover the comfort of suburban living today.
          </p>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              to="/contact-us"
              className="rounded-sm border border-gray-300 bg-white px-8 py-4 font-medium text-gray-900 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]"
            >
              Schedule a Tour
            </Link>
            <Link
              to="/properties"
              className="rounded-sm bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
            >
              View Listings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbanCTA;

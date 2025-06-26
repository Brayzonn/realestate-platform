import { Link } from 'react-router-dom';

const SuburbanCTA = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to Experience Suburban Living?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Let us help you find the perfect suburban home that matches your lifestyle and budget.
          Discover the comfort of suburban living today.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact-us"
            className="rounded-md bg-yellow-400 px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            Schedule a Tour
          </Link>
          <Link
            to="/properties"
            className="rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            View Listings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuburbanCTA;

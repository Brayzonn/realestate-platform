import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Ready to Work <span className="font-medium">Together?</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
            Whether you&apos;re buying, selling, or investing, we&apos;re here to make your real
            estate goals a reality.
          </p>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              to="/contact-us"
              className="rounded-sm border border-gray-300 bg-white px-8 py-4 font-medium text-gray-900 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]"
            >
              Contact Us Today
            </Link>
            <Link
              to="/properties"
              className="rounded-sm bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
            >
              View Our Listings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

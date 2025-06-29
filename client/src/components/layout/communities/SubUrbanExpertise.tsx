import { Building, Calendar, MapPin } from '@/components/icons/index';

const SubUrbanExpertise = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Suburban Real Estate <span className="font-medium">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <Building />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Family Home Specialists</h3>
            <p className="mt-3 leading-relaxed font-light text-gray-600">
              Expert knowledge of single-family homes, townhomes, and estate properties
            </p>
          </div>

          <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <Calendar />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">School District Analysis</h3>
            <p className="mt-3 leading-relaxed font-light text-gray-600">
              Detailed school ratings, enrollment data, and educational opportunity analysis
            </p>
          </div>

          <div className="rounded-sm border border-gray-200/60 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <MapPin />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Community Intelligence</h3>
            <p className="mt-3 leading-relaxed font-light text-gray-600">
              Deep knowledge of parks, recreation, and family-friendly amenities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubUrbanExpertise;

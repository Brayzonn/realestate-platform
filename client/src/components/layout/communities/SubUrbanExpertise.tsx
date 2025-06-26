import { Building, Calendar, MapPin } from '@/components/icons/Index';

const SubUrbanExpertise = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-gray-50 p-8">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
            Suburban Real Estate Expertise
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <Building />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Family Home Specialists</h3>
              <p className="mt-2 text-gray-600">
                Expert knowledge of single-family homes, townhomes, and estate properties
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <Calendar />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">School District Analysis</h3>
              <p className="mt-2 text-gray-600">
                Detailed school ratings, enrollment data, and educational opportunity analysis
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                <MapPin />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Community Intelligence</h3>
              <p className="mt-2 text-gray-600">
                Deep knowledge of parks, recreation, and family-friendly amenities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubUrbanExpertise;

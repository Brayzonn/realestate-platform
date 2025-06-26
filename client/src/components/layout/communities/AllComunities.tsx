import { communitiesData } from '@/store/data';

const AllComunities = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {communitiesData.map((community, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  src={community.image}
                  alt={community.name}
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{community.name}</h3>
                </div>

                <div className="mb-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Avg. Price:</span>
                    <p className="text-gray-600">{community.avgPrice}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Listings:</span>
                    <p className="text-gray-600">{community.activeListings} active</p>
                  </div>
                </div>

                <p className="mb-4 text-gray-600">{community.description}</p>

                <div className="mb-4">
                  <h4 className="mb-[1rem] font-medium text-gray-900">Community Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {community.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllComunities;

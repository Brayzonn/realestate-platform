import { communitiesData } from '@/store/data';

const AllComunities = () => {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {communitiesData.map((community, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-sm border border-gray-200/60 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  src={community.image}
                  alt={community.name}
                />
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-snug font-medium text-gray-900">
                    {community.name}
                  </h3>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-6 border-b border-gray-100 pb-6">
                  <div>
                    <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Avg. Price
                    </span>
                    <p className="mt-1 font-light text-gray-900">{community.avgPrice}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Listings
                    </span>
                    <p className="mt-1 font-light text-gray-900">
                      {community.activeListings} active
                    </p>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed font-light text-gray-600">
                  {community.description}
                </p>

                <div>
                  <h4 className="mb-4 text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
                    Community Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {community.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="rounded-sm border border-gray-200/60 bg-gray-50 px-3 py-1.5 text-sm font-light text-gray-700 transition-colors hover:bg-gray-100"
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

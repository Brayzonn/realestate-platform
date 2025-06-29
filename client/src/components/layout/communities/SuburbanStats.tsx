const SuburbanStats = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="rounded-sm border border-gray-200/60 bg-white p-12 shadow-sm">
          <h2 className="text-center text-4xl leading-tight font-light text-gray-900 md:text-5xl">
            Our Suburban <span className="font-medium">Expertise</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 lg:text-5xl">6</div>
              <div className="mt-3 text-sm font-light tracking-wide text-gray-500 uppercase lg:text-base">
                Suburban Communities
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 lg:text-5xl">108</div>
              <div className="mt-3 text-sm font-light tracking-wide text-gray-500 uppercase lg:text-base">
                Active Listings
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 lg:text-5xl">₦150M</div>
              <div className="mt-3 text-sm font-light tracking-wide text-gray-500 uppercase lg:text-base">
                Avg. Suburban Price
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 lg:text-5xl">9/10</div>
              <div className="mt-3 text-sm font-light tracking-wide text-gray-500 uppercase lg:text-base">
                Avg. School Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbanStats;

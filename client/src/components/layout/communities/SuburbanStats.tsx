const SuburbanStats = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-yellow-400 px-8 py-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black">
            Our Suburban Expertise
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-black lg:text-4xl">6</div>
              <div className="mt-2 text-sm font-medium text-black lg:text-base">
                Suburban Communities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black lg:text-4xl">108</div>
              <div className="mt-2 text-sm font-medium text-black lg:text-base">
                Active Listings
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black lg:text-4xl">N150M</div>
              <div className="mt-2 text-sm font-medium text-black lg:text-base">
                Avg. Suburban Price
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black lg:text-4xl">9/10</div>
              <div className="mt-2 text-sm font-medium text-black lg:text-base">
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

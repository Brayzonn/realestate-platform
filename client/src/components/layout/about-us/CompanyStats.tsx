const CompanyStats = () => {
  const stats = [
    { label: 'Properties Sold', value: '2,500+' },
    { label: 'Years in Business', value: '15+' },
    { label: 'Market Areas', value: '25+' },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="rounded-sm border border-gray-200/60 bg-white p-12 shadow-sm">
          <h2 className="text-center text-4xl leading-tight font-light text-gray-900 md:text-5xl">
            Our Track <span className="font-medium">Record</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light text-gray-900 lg:text-5xl">{stat.value}</div>
                <div className="mt-3 text-sm font-light tracking-wide text-gray-500 uppercase lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;

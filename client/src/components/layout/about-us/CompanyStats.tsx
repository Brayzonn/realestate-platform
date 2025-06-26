const CompanyStats = () => {
  const stats = [
    { label: 'Properties Sold', value: '2,500+' },
    { label: 'Years in Business', value: '15+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Market Areas', value: '25+' },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-yellow-400 px-8 py-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black">
            Our Track Record
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-black lg:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-black lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;

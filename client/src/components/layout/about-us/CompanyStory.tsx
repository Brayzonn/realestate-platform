const CompanyStory = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center justify-start space-x-4">
              <div className="h-[2px] w-12 bg-yellow-400"></div>
              <h2 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Our Story
              </h2>
              <div className="h-[2px] w-12 bg-yellow-400"></div>
            </div>
            <h3 className="w-full text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Trust Since 2009
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 2009 with a simple mission: to make real estate transactions stress-free
              and successful for every client. What started as a small team of passionate agents has
              grown into one of the region&apos;s most trusted real estate firms.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We&apos;ve weathered market changes, embraced new technologies, and always maintained
              our commitment to personalized service. Today, we&apos;re proud to serve buyers,
              sellers, and investors across the metropolitan area with the same dedication that
              built our reputation.
            </p>
          </div>
          <div className="relative">
            <img
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Company office exterior"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;

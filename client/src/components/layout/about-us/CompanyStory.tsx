const CompanyStory = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-px w-16 bg-yellow-400"></div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
                Our Story
              </span>
            </div>

            <h3 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
              Building Trust <span className="font-medium">Since 2009</span>
            </h3>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed font-light text-gray-600">
                Founded in 2009 with a simple mission: to make real estate transactions stress-free
                and successful for every client. What started as a small team of passionate agents
                has grown into one of the region&apos;s most trusted real estate firms.
              </p>

              <p className="text-lg leading-relaxed font-light text-gray-600">
                We&apos;ve weathered market changes, embraced new technologies, and always
                maintained our commitment to personalized service. Today, we&apos;re proud to serve
                buyers, sellers, and investors across the metropolitan area with the same dedication
                that built our reputation.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="aspect-[4/3] w-full rounded-sm border border-gray-200/60 object-cover shadow-sm"
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

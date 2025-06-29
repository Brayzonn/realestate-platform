import { StarIcon } from '@/components/icons';

const AwardsRecognition = () => {
  const awards = [
    {
      title: 'Top Producer Award 2023',
      organization: 'Regional Real Estate Board',
    },
    {
      title: 'Customer Service Excellence',
      organization: 'Better Business Bureau A+ Rating',
    },
    {
      title: 'Community Choice Award',
      organization: 'Local Business Journal',
    },
    {
      title: 'Certified Green Realtor',
      organization: 'National Association of Realtors',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Awards & <span className="font-medium">Recognition</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="rounded-sm border border-gray-200/60 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <StarIcon />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{award.title}</h3>
                  <p className="font-light text-gray-600">{award.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;

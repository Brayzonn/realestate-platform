import { CheckIcon, LightningIcon, HeartIcon } from '@/components/icons/index';

const CoreValues = () => {
  const values = [
    {
      title: 'Integrity',
      description:
        'We believe in honest, transparent communication and ethical business practices in every transaction.',
      icon: CheckIcon,
    },
    {
      title: 'Expertise',
      description:
        'Our team brings decades of combined experience and deep local market knowledge to every client relationship.',
      icon: LightningIcon,
    },
    {
      title: 'Client-Focused',
      description:
        'Your goals are our priority. We tailor our approach to meet your unique needs and timeline.',
      icon: HeartIcon,
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
        <div className="mb-16 space-y-6">
          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            What Sets Us <span className="font-medium">Apart</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
            Our core values guide every interaction and transaction
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-sm border border-gray-200/60 bg-white p-8 shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                <value.icon />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{value.title}</h3>
              <p className="mt-4 leading-relaxed font-light text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

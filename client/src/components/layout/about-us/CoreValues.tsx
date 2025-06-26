const CoreValues = () => {
  const values = [
    {
      title: 'Integrity',
      description:
        'We believe in honest, transparent communication and ethical business practices in every transaction.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Expertise',
      description:
        'Our team brings decades of combined experience and deep local market knowledge to every client relationship.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Client-Focused',
      description:
        'Your goals are our priority. We tailor our approach to meet your unique needs and timeline.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What Sets Us Apart
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our core values guide every interaction and transaction
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="rounded-lg bg-gray-50 p-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-black">
                {value.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-4 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

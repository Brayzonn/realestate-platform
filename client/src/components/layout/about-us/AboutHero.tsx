const AboutHero = () => {
  return (
    <section className="py-24 text-center">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
            About
          </span>
          <div className="h-px w-16 bg-yellow-400"></div>
        </div>

        <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          About Our <span className="font-medium">Company</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
          For over 15 years, we&apos;ve been helping families and investors find their perfect
          property while building lasting relationships in our community.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;

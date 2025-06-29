const ContactHero = () => {
  return (
    <section className="pt-[5rem] text-center">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
            Contact
          </span>
          <div className="h-px w-16 bg-yellow-400"></div>
        </div>

        <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          Get in <span className="font-medium">Touch</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
          Ready to find your dream property? Our expert team is here to guide you through every step
          of your real estate journey with personalized service.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;

const BlogHero = () => {
  return (
    <section className="pt-24 text-center">
      <div className="mx-auto max-w-4xl space-y-12 pt-[2rem]">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">Blog</span>
          <div className="h-px w-16 bg-yellow-400"></div>
        </div>

        <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          Real Estate <span className="font-medium">Insights</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
          Expert advice, market insights, and practical tips to help you navigate your real estate
          journey with confidence and make informed decisions.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;

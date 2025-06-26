const AwardsRecognition = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-gray-50 p-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Awards & Recognition
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Top Producer Award 2023</h3>
                <p className="text-gray-600">Regional Real Estate Board</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Customer Service Excellence</h3>
                <p className="text-gray-600">Better Business Bureau A+ Rating</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Community Choice Award</h3>
                <p className="text-gray-600">Local Business Journal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Certified Green Realtor</h3>
                <p className="text-gray-600">National Association of Realtors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;

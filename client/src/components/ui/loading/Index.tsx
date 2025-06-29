export const FeaturedListingsLoading = () => (
  <section className="mx-auto max-w-7xl px-6 py-24">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-white"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="h-48 bg-gray-200"></div>
          <div className="space-y-3 p-6">
            <div className="h-6 rounded bg-gray-200"></div>
            <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-6 w-20 rounded bg-gray-200"></div>
              <div className="h-8 w-16 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const NewsUpdatesLoading = () => (
  <section className="mx-auto max-w-7xl px-6 py-24">
    <div className="mb-16 text-center">
      <div className="mx-auto mb-4 h-12 max-w-md animate-pulse rounded bg-gray-200"></div>
      <div className="mx-auto h-6 max-w-lg animate-pulse rounded bg-gray-200"></div>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-white"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="h-48 bg-gray-200"></div>
          <div className="space-y-3 p-6">
            <div className="h-3 w-20 rounded bg-gray-200"></div>
            <div className="h-5 rounded bg-gray-200"></div>
            <div className="h-4 w-4/5 rounded bg-gray-200"></div>
            <div className="h-4 w-3/5 rounded bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const CommunitiesLoading = () => (
  <section className="mx-auto max-w-7xl px-6 py-24">
    <div className="mb-16 text-center">
      <div className="mx-auto mb-4 h-12 max-w-md animate-pulse rounded bg-gray-200"></div>
      <div className="mx-auto h-6 max-w-lg animate-pulse rounded bg-gray-200"></div>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-lg border border-gray-200 bg-white p-6"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="mb-4 h-32 rounded bg-gray-200"></div>
          <div className="mb-2 h-5 rounded bg-gray-200"></div>
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  </section>
);

export const ErrorState = ({
  message = 'Failed to load content',
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <div className="mb-2 text-red-600">⚠️</div>
    <p className="mb-4 text-gray-600">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="rounded bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800"
      >
        Try Again
      </button>
    )}
  </div>
);

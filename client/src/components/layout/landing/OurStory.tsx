import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { slideImages } from '@/store/data';

interface CounterData {
  value: string;
  label: string;
}

const OurStory: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const videoUrl = 'https://www.youtube.com/embed/GrG-Ee9rAzE';

  const counterData: CounterData[] = [
    { value: '10+', label: 'Years of Experience' },
    { value: '522+', label: 'Completed Projects' },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 6000);

    return () => clearInterval(interval);
  });

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = (): void => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = (): void => {
    setIsAutoPlaying(true);
  };

  const openVideoModal = (): void => {
    setIsVideoModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeVideoModal = (): void => {
    setIsVideoModalOpen(false);
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  return (
    <section id="about" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <div className="h-px w-16 bg-yellow-400"></div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
                Tailored For You
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
                Our Story & <span className="font-medium">Vision</span>
              </h2>

              <p className="max-w-3xl text-lg leading-relaxed font-light text-gray-600">
                With years of experience in real estate development, we specialize in creating
                properties that appreciate in value and inspire living. Our team blends market
                expertise with architectural excellence to deliver extraordinary developments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8 lg:grid-cols-4">
              {counterData.map((counter, index) => (
                <div key={index} className="text-center lg:text-left">
                  <h3 className="mb-2 text-3xl font-light text-gray-900 md:text-4xl">
                    {counter.value}
                  </h3>
                  <p className="text-sm font-light tracking-wide text-gray-500 uppercase">
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              {slideImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={image.url} alt={image.alt} className="h-full w-full object-cover" />
                </div>
              ))}

              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white md:h-20 md:w-20"
                  onClick={openVideoModal}
                  aria-label="Play video"
                >
                  <Play className="ml-1 h-6 w-6 text-gray-800 md:h-8 md:w-8" fill="currentColor" />
                </button>
              </div>

              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:bg-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:bg-white"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>

              <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'w-8 bg-white' : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
            aria-label="Close video modal"
            type="button"
          />

          <div className="relative mx-4 w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 hover:bg-black/70"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`${videoUrl}?autoplay=1`}
                title="Our Story Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurStory;

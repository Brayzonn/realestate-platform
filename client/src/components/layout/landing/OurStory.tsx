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

  const videoUrl = "https://www.youtube.com/embed/GrG-Ee9rAzE";

  const counterData: CounterData[] = [
    { value: "10+", label: "Years of Experience" },
    { value: "522+", label: "Completed Projects" },
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
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[2px] bg-yellow-400"></div>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Tailored For You
              </h2>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Story & Vision
            </h2>

            <div className="text-gray-600">
              <p className="text-lg leading-relaxed">
               With years of experience in real estate development, we specialize in creating properties that appreciate in value and inspire living. Our team blends market expertise with architectural excellence to deliver extraordinary developments.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {counterData.map((counter, index) => (
                <div key={index} className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {counter.value}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
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
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button 
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  onClick={openVideoModal}
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-1" fill="currentColor" />
                </button>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 z-30"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 z-30"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0" />
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
            onClick={closeVideoModal}
            aria-label="Close video modal"
            type="button"
          />
          
          <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
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
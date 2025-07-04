import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  review: string;
}

const ClientsTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Olivia Hartanto',
      title: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
      review:
        'The team exceeded my expectations. They took the time to understand my lifestyle and created a home that feels uniquely mine. Every corner feels intentional and beautiful.',
    },
    {
      id: 2,
      name: 'Adrian Lim',
      title: 'Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
      review:
        'I was amazed by their attention to detail and professionalism. From concept to execution, everything was seamless. The final result was better than I ever imagined.',
    },
    {
      id: 3,
      name: 'Juliana Silva',
      title: 'Property Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
      review:
        'As a busy entrepreneur, I needed someone who could handle everything — and they did. I now have a stunning workspace that inspires creativity every day.',
    },
  ];

  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);

    if (currentSlide === 0) {
      setCurrentSlide(testimonials.length);
    } else if (currentSlide === testimonials.length + 1) {
      setCurrentSlide(1);
    }
  }, [currentSlide, testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index: number): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1);
  };

  const handleMouseEnter = (): void => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = (): void => {
    setIsAutoPlaying(true);
  };

  const getCurrentDotIndex = () => {
    if (currentSlide === 0) return testimonials.length - 1;
    if (currentSlide === testimonials.length + 1) return 0;
    return currentSlide - 1;
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="testimonial-wrap">
          <div className="mb-20 text-center">
            <div className="mb-8 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-yellow-400"></div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
                Testimonials
              </span>
              <div className="h-px w-16 bg-yellow-400"></div>
            </div>

            <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
              Client <span className="font-medium">Reviews</span>
            </h2>
          </div>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="overflow-hidden">
              <div
                className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-content mx-auto max-w-5xl">
                      <div className="overflow-hidden rounded-sm border border-gray-200/60 bg-white shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="testimonial-slider_item relative">
                            <div className="relative aspect-[4/3] md:aspect-[3/4]">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                          </div>

                          <div className="flex flex-col justify-center p-10 md:p-12 lg:p-16">
                            <div className="space-y-8">
                              <blockquote className="text-xl leading-relaxed font-light text-gray-700 md:text-2xl">
                                &quot;{testimonial.review}&quot;
                              </blockquote>

                              <div className="border-t border-gray-100 pt-4">
                                <h3 className="mb-2 text-lg font-medium text-gray-900">
                                  {testimonial.name}
                                </h3>
                                <p className="text-sm font-light tracking-wide text-gray-500 uppercase">
                                  {testimonial.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="testimonial-slider_arrow group absolute top-1/2 left-4 hidden -translate-y-1/2 transition-opacity duration-200 disabled:opacity-50 md:block"
              aria-label="Previous testimonial"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200/60 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-gray-300 group-hover:bg-white group-hover:shadow-md">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </div>
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="testimonial-slider_arrow group absolute top-1/2 right-4 hidden -translate-y-1/2 transition-opacity duration-200 disabled:opacity-50 md:block"
              aria-label="Next testimonial"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200/60 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-gray-300 group-hover:bg-white group-hover:shadow-md">
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </div>
            </button>

            <div className="mt-12 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`h-2 w-8 rounded-full transition-all duration-300 disabled:opacity-50 ${
                    index === getCurrentDotIndex()
                      ? 'scale-110 bg-gray-800'
                      : 'bg-gray-300 hover:scale-105 hover:bg-gray-400'
                  }`}
                  aria-label={`Show slide ${index + 1} of ${testimonials.length}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;

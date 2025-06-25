import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  review: string;
}

const ClientsTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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

  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="testimonial-wrap">
          <div className="mb-12 flex flex-col items-start text-center">
            <div className="mb-4 flex items-center justify-center space-x-4">
              <div className="h-[2px] w-12 bg-yellow-400"></div>
              <h2 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                testimonials
              </h2>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Clients Reviews
            </h2>
          </div>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-content mx-auto max-w-4xl">
                      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="testimonial-slider_item relative">
                            <div className="relative aspect-[4/3] md:aspect-[3/4]">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                              <div className="testimonial-slider_overlay absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                          </div>

                          <div className="testimonial-ccright flex flex-col justify-center p-8 md:p-10 lg:p-12">
                            <div className="space-y-6">
                              <p className="review-text text-lg leading-relaxed text-gray-700 md:text-xl">
                                &quot;{testimonial.review}&quot;
                              </p>

                              <div>
                                <h3 className="mb-1 text-xl font-bold text-gray-900 md:text-2xl">
                                  {testimonial.name}
                                </h3>
                                <div className="opacity-60">
                                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                                </div>
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
              className="testimonial-slider_arrow group absolute top-1/2 left-4 hidden -translate-y-1/2 md:block"
              aria-label="Previous testimonial"
            >
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </div>
              </div>
            </button>

            <button
              onClick={nextSlide}
              className="testimonial-slider_arrow group absolute top-1/2 right-4 hidden -translate-y-1/2 md:block"
              aria-label="Next testimonial"
            >
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </div>
              </div>
            </button>

            <div className="hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`mx-1 h-3 w-3 rounded-full ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
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

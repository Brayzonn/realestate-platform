import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '@/components/common/NavMenu';
import { useHeader } from '@/hooks/useHeader';
import Nav from '@/components/common/Nav';
import arrowupright from '@/assets/images/arrowupright.svg';
import companylogoblack from '@/assets/images/companylogoblack.svg';

interface HeroProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

const CountUpAnimation = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(stepValue * currentStep), target));
      } else {
        clearInterval(timer);
        setCount(target);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Hero = ({ isMenuOpen, setIsMenuOpen, toggleMenu }: HeroProps) => {
  const { isScrolled } = useHeader();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury modern home"
            className="h-full w-full animate-[kenBurns_20s_ease-in-out_infinite_alternate] object-cover"
          />
          <div className="absolute inset-0 animate-[gradientShift_8s_ease-in-out_infinite_alternate] bg-gradient-to-br from-black/90 via-black/80 to-black/70"></div>
        </div>
        <Nav
          scrolledLogo={companylogoblack}
          logoAlt="Logo"
          menuIconColor={`${isScrolled ? 'text-black' : 'text-white'}`}
          showBorder={false}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleMenu={toggleMenu}
          className="bg-inherit px-4 sm:px-6 lg:px-8"
        />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col">
          <div className="flex flex-1 items-center justify-between px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col space-y-8 lg:w-1/2">
              <div
                className={`flex items-center space-x-3 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <div className="h-[2px] w-12 animate-[expandWidth_1.5s_ease-out_0.5s_both] bg-yellow-400"></div>
                <span className="animate-[shimmer_3s_ease-in-out_infinite] text-sm font-semibold tracking-wider text-white uppercase">
                  Signature Homes
                </span>
              </div>

              <h1
                className={`text-4xl leading-tight font-bold text-white transition-all delay-200 duration-1000 md:text-5xl lg:text-6xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} animate-[textGlow_4s_ease-in-out_infinite_alternate]`}
              >
                Where Comfort & Luxury Converge
              </h1>

              <p
                className={`max-w-[700px] text-lg leading-relaxed tracking-wide text-gray-200 transition-all delay-400 duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                We are committed to guiding you towards finding the perfect property and ensuring an
                exceptional real estate experience with world-class construction and design.
              </p>

              <div
                className={`flex space-x-8 py-4 transition-all delay-600 duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <div className="transition-transform duration-300 hover:scale-110">
                  <div className="text-2xl font-bold text-white">
                    {isLoaded ? <CountUpAnimation target={500} suffix="+" /> : '500+'}
                  </div>
                  <div className="text-sm text-gray-300">Properties Built</div>
                </div>
                <div className="transition-transform duration-300 hover:scale-110">
                  <div className="text-2xl font-bold text-white">
                    {isLoaded ? <CountUpAnimation target={15} suffix="+" /> : '15+'}
                  </div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="transition-transform duration-300 hover:scale-110">
                  <div className="text-2xl font-bold text-white">
                    {isLoaded ? <CountUpAnimation target={98} suffix="%" /> : '98%'}
                  </div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>

              <div
                className={`flex flex-col space-y-4 transition-all delay-800 duration-1000 sm:flex-row sm:space-y-0 sm:space-x-4 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <Link
                  to="/properties"
                  className="group relative transform overflow-hidden bg-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-400/30 active:scale-95"
                >
                  <span className="relative z-10">Explore Properties</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>

                <Link
                  to="/contact-us"
                  className="group relative flex items-center space-x-2 overflow-hidden border-2 border-white px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl active:scale-95"
                >
                  <span className="relative z-10">Contact Us</span>
                  <img
                    src={arrowupright}
                    alt="External link"
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-8">
            <div
              className={`flex flex-col items-center space-y-2 transition-all delay-1000 duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <span className="animate-bounce text-sm text-gray-300">Scroll to explore</span>
              <div className="h-8 w-[2px] animate-[scrollIndicator_2s_ease-in-out_infinite] bg-white/50"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden animate-[float_6s_ease-in-out_infinite] lg:block">
          <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30">
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
              <span className="text-sm text-white">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  );
};

export default Hero;

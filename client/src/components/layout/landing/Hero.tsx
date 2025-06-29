import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '@/components/common/NavMenu';
import { useHeader } from '@/hooks/useHeader';
import Nav from '@/components/common/Nav';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

const Hero = ({ isMenuOpen, setIsMenuOpen, toggleMenu }: HeroProps) => {
  const { isScrolled } = useHeader();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-gray-50">
        <div className="absolute inset-0 scale-105 transition-transform duration-[20s] ease-out">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury modern home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        </div>

        <Nav
          scrolledLogo={companylogoblack}
          logoAlt="Logo"
          menuIconColor={`${isScrolled ? 'text-black' : 'text-white'}`}
          showBorder={false}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleMenu={toggleMenu}
          // className="px-4 lg:px-12"
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col">
          <div className="flex flex-1 items-center px-6 py-20 lg:px-12">
            <div className="max-w-3xl space-y-12">
              <div
                className={`transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="h-px w-16 bg-yellow-400"></div>
                  <span className="text-sm font-medium tracking-[0.2em] text-white/90 uppercase">
                    Signature Homes
                  </span>
                </div>
              </div>

              <div
                className={`space-y-6 transition-all delay-100 duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <h1 className="text-5xl leading-[1.1] font-light text-white md:text-6xl lg:text-7xl">
                  Where Comfort &<br />
                  <span className="font-medium">Luxury Converge</span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed font-light text-white/80">
                  Exceptional real estate experiences with world-class construction and design,
                  guiding you towards the perfect property.
                </p>
              </div>

              <div
                className={`flex flex-col items-start space-y-6 transition-all delay-200 duration-700 ease-out md:flex-row md:space-x-6 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              >
                <Link
                  to="/properties"
                  className="group relative overflow-hidden rounded-sm bg-yellow-400 px-8 py-4 font-medium text-black transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg active:scale-[0.98]"
                >
                  <span className="relative z-10">Explore Properties</span>
                </Link>

                <Link
                  to="/contact-us"
                  className="group relative flex items-center space-x-3 rounded-sm border border-white/30 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="relative overflow-hidden">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-12">
            <div
              className={`flex flex-col items-center space-y-3 transition-all delay-300 duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <span className="text-xs font-light tracking-wider text-white/60 uppercase">
                Discover More
              </span>
              <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent">
                <div className="h-3 w-px animate-pulse bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  );
};

export default Hero;

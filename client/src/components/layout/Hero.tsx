import Button from '@/components/ui/Button';
import NavMenu from '@/components/layout/NavMenu';
import { useHeader } from '@/hooks/useHeader';
import Nav from '@/components/layout/Nav';
import arrowupright from '@/assets/images/arrowupright.svg';
import companylogoblack from '@/assets/images/companylogoblack.svg';

interface HeroProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

const Hero = ({ isMenuOpen, setIsMenuOpen, toggleMenu }: HeroProps) => {
  const { isScrolled } = useHeader();

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury modern home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
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
              <div className="flex items-center space-x-3">
                <div className="h-[2px] w-12 bg-yellow-400"></div>
                <span className="text-sm font-semibold tracking-wider text-white uppercase">
                  Premium Real Estate
                </span>
              </div>

              <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                Where Comfort & Luxury Converge
              </h1>

              <p className="max-w-[700px] text-lg leading-relaxed tracking-wide text-gray-200">
                We are committed to guiding you towards finding the perfect property and ensuring an
                exceptional real estate experience with world-class construction and design.
              </p>

              <div className="flex space-x-8 py-4">
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">Properties Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button
                  variant="unstyled"
                  size="lg"
                  onClick={() => console.log('clicked')}
                  className="transform bg-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 hover:shadow-lg"
                >
                  Explore Properties
                </Button>

                <Button
                  variant="unstyled"
                  size="lg"
                  onClick={() => console.log('clicked')}
                  className="group flex items-center space-x-2 border-2 border-white px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>Contact Us</span>
                  <img
                    src={arrowupright}
                    alt="External link"
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-8">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-300">Scroll to explore</span>
              <div className="h-8 w-[2px] animate-pulse bg-white/50"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
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

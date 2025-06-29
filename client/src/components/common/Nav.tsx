import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import companylogo from '@/assets/images/companylogo.svg';
import TwoLineMenu from '@/components/ui/TwoLineMenu';
import { useHeader } from '@/hooks/useHeader';

interface NavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showBorder?: boolean;
  borderOnMobileOnly?: boolean;
  className?: string;
  menuIconColor?: string;
  defaultLogo?: string;
  scrolledLogo?: string;
  logoAlt?: string;
  logoClassName?: string;
}

const Nav = ({
  toggleMenu,
  isMenuOpen,
  showBorder = true,
  borderOnMobileOnly = true,
  className = '',
  menuIconColor = '',
  defaultLogo = companylogo,
  scrolledLogo = companylogo,
  logoAlt = 'Company Logo',
  logoClassName = 'h-[35px] w-[52px]',
}: NavProps) => {
  const { isScrolled } = useHeader();
  const [navHeight, setNavHeight] = useState(0);

  // Measure nav height for smooth transitions
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('[data-nav]');
      if (nav) {
        setNavHeight(nav.clientHeight);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const getBorderClass = () => {
    if (!showBorder) return '';

    if (borderOnMobileOnly) {
      const mobileClasses = 'border-b border-gray-100 pb-4';
      const desktopClasses = isScrolled
        ? 'md:border-b md:border-gray-200 md:pb-4'
        : 'md:border-none md:pb-0';
      return `${mobileClasses} ${desktopClasses}`;
    }

    return 'border-b border-gray-100 pb-4';
  };

  const currentLogo = isScrolled ? scrolledLogo : defaultLogo;

  return (
    <>
      {/* Placeholder to prevent layout shift when nav becomes fixed */}
      {isScrolled && (
        <div style={{ height: navHeight }} className="transition-all duration-300 ease-in-out" />
      )}

      <nav
        data-nav
        className={`w-full transition-all duration-300 ease-in-out ${getBorderClass()} ${
          isScrolled
            ? 'fixed top-0 right-0 left-0 z-50 border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm'
            : 'relative bg-transparent'
        } ${className}`}
        style={{
          transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group flex items-center space-x-2 text-[20px] font-bold text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={currentLogo}
              alt={logoAlt}
              className={`h-8 w-auto transition-all duration-300 ease-in-out group-hover:scale-110 ${logoClassName}`}
            />
            <span
              className={`transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              Estates
            </span>
          </Link>

          <Button
            variant="unstyled"
            size="lg"
            onClick={toggleMenu}
            className={`relative z-[60] flex items-center justify-center transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'h-12 w-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm'
                : 'h-12 w-12'
            }`}
          >
            <div className="relative h-6 w-6">
              {/* Hamburger icon */}
              <TwoLineMenu
                className={`absolute inset-0 h-8 w-8 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'
                } ${menuIconColor}`}
              />

              {/* Close icon */}
              <svg
                className={`absolute inset-0 h-6 w-6 text-black transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-180 opacity-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Nav;

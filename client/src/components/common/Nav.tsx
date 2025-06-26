import { Link } from 'react-router-dom';
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
    <nav
      className={`w-full transition-all duration-300 ${getBorderClass()} ${
        isScrolled
          ? 'fixed top-0 right-0 left-0 z-50 border-gray-200 bg-white/95 backdrop-blur-sm'
          : 'relative bg-transparent'
      } ${className} `}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between py-4`}>
        <Link to="/">
          <img
            src={currentLogo}
            alt={logoAlt}
            className={`transition-all duration-300 ${logoClassName}`}
          />
        </Link>

        <Button
          variant="unstyled"
          size="lg"
          onClick={toggleMenu}
          className={`relative z-[60] flex items-center justify-center ${
            isMenuOpen
              ? 'hidden h-12 w-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm md:flex'
              : ''
          }`}
        >
          {isMenuOpen ? (
            <>
              <svg
                className="hidden h-6 w-6 text-black md:block"
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

              <svg
                className="block h-6 w-6 text-black md:hidden"
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
            </>
          ) : (
            <TwoLineMenu className={`h-8 w-8 ${menuIconColor}`} />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Nav;

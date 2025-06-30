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
  showBorder = true,
  borderOnMobileOnly = true,
  className = '',
  menuIconColor = '',
  defaultLogo = companylogo,
  scrolledLogo = companylogo,
  logoAlt = 'Company Logo',
  logoClassName = 'h-[20px] w-[32px] md:h-[35px] md:w-[52px]',
}: NavProps) => {
  const { isScrolled } = useHeader();

  const getBorderClass = () => {
    if (!showBorder) {
      const customStyle = isScrolled ? 'bg-white/100 ' : ' bg-transparent backdrop-blur-[1.5px]';
      return customStyle;
    }

    if (borderOnMobileOnly) {
      const mobileClasses = 'bg-white/100 border-b border-gray-100 pb-1 md:pb-4';
      const desktopClasses = isScrolled
        ? 'md:border-b md:border-gray-200 md:pb-4'
        : 'md:border-none md:pb-0';
      return `${mobileClasses} ${desktopClasses}`;
    }

    return 'bg-white/100 border-b border-gray-100 pb-1 md:pb-4';
  };

  const currentLogo = isScrolled ? scrolledLogo : defaultLogo;

  return (
    <nav
      className={`${className} fixed top-0 right-0 left-0 z-50 w-full border-gray-200 px-6 transition-all duration-300 ${getBorderClass()} `}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between py-2 md:py-4`}>
        <Link
          to="/"
          className="group flex items-center space-x-1.5 text-[16px] font-bold text-gray-900 transition-all duration-200 hover:scale-105 md:space-x-2 md:text-[20px]"
        >
          <img
            src={currentLogo}
            alt={logoAlt}
            className={`h-6 w-auto transition-all duration-300 group-hover:scale-110 md:h-8 ${logoClassName}`}
          />
          <span
            className={`${isScrolled ? 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent' : 'text-white'}`}
          >
            Estates
          </span>
        </Link>
        <Button
          variant="unstyled"
          size="lg"
          onClick={toggleMenu}
          className="relative z-[50] h-8 w-8 md:h-8 md:w-8"
        >
          <TwoLineMenu
            className={`absolute top-0 right-0 h-6 w-6 md:h-8 md:w-8 ${menuIconColor}`}
          />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;

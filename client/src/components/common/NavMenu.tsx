import { Link } from 'react-router-dom';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import Button from '@/components/ui/Button';
import { CloseButtonIcon } from '@/components/icons/index';

interface NavMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NavMenu = ({ isOpen, onToggle }: NavMenuProps) => {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Blog', href: '/blog' },
    { name: 'Communities', href: '/communities' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <div
      className={`fixed inset-0 z-60 flex transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="hidden bg-black/20 backdrop-blur-sm md:block md:w-1/2"></div>

      <div className="flex w-full flex-col bg-[#F7F3F2] md:w-1/2">
        <div className="flex items-center justify-between border-b border-gray-100 py-6 pr-[1rem] pl-[1rem] md:border-none md:pl-[4rem]">
          <img
            src={companylogoblack}
            alt="companylogo"
            className="h-[40px] w-[40px] object-contain"
          />
          {/* Added close button */}
          <Button
            variant="unstyled"
            size="lg"
            onClick={onToggle}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm"
          >
            <CloseButtonIcon />
          </Button>
        </div>

        <nav className="flex flex-1 flex-col items-start justify-start space-y-10 pt-[2rem] pr-[1rem] pl-[1rem] md:pl-[4rem]">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-alternativeTextBlack text-left text-2xl font-[400] transition-colors duration-300 hover:text-[#898887] md:text-[23px]"
              onClick={onToggle}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;

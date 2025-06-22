import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button'
import companylogo from '@/assets/images/companylogo.png';
import TwoLineMenu from '@/components/ui/TwoLineMenu'; 
import { useHeader } from '@/hooks/useHeader'

interface NavProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    setIsMenuOpen : React.Dispatch<React.SetStateAction<boolean>>;
    showBorder?: boolean;
    borderOnMobileOnly?: boolean;
    className?: string;
}

const Nav = ({toggleMenu, isMenuOpen, showBorder = true, borderOnMobileOnly = true, className = "" } : NavProps )=> {

  const { isScrolled } = useHeader();

    const getBorderClass = () => {
        if (!showBorder) return '';
        if (borderOnMobileOnly) return 'border-b border-gray-100 pb-4 md:border-none md:pb-0 md:px-0 md:py-0';
        return 'border-b border-gray-100';
    };


  return (
        <nav className={`w-full flex justify-between items-center transition-all duration-300
            ${getBorderClass()}
            ${isScrolled 
                ? "fixed top-0 left-0 right-0 z-40 px-[1rem] py-4 bg-white/95 backdrop-blur-sm border-gray-200 md:relative md:bg-transparent md:backdrop-blur-none" 
                : "relative px-0 py-0 bg-transparent"
            }
            md:justify-start ${className}
        `}>
                <Link to = "/">
                    <img src={companylogo} alt="companylogo" className='w-32 md:w-48 lg:w-[200px] h-auto object-contain' />
                </Link>
                
                
                <Button 
                    variant="unstyled" 
                    size="lg"
                    onClick={toggleMenu}
                    className={`flex items-center justify-center relative z-[60] ml-auto ${
                        isMenuOpen ? 'w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hidden md:flex' : ''
                    }`}
                >
                    {isMenuOpen ? (
                        <>
                            <svg className="w-6 h-6 text-black hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <svg className="w-6 h-6 text-black block md:hidden " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </>
                    ) : (
                        <TwoLineMenu className="w-8 h-8" />
                    )}
                </Button>
        </nav>
  )
}

export default Nav
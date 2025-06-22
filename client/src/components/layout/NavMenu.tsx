import { Link } from 'react-router-dom';
import customerimageone from '@/assets/images/customerimageone.jpg';
import customerimagetwo from '@/assets/images/customerimagetwo.jpg';
import customerimagethree from '@/assets/images/customerimagethree.jpg';
import companylogo from '@/assets/images/companylogo.png';

interface NavMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

const NavMenu = ({ isOpen, onToggle }: NavMenuProps) => {

  const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Properties', href: '/properties' },
        { name: 'Communities', href: '/communities' },
        { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <div className={`fixed inset-0 z-50 flex transition-transform duration-500 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
            <div className="hidden md:block md:w-1/2 backdrop-blur-sm bg-black/20"></div>
      
            <div className="w-full md:w-1/2 bg-[#F7F3F2] flex flex-col">
                
                    <div className="flex justify-between items-center py-6 pl-[1rem] pr-[1rem] md:pl-[4rem] border-b border-gray-100 md:border-none">
                        <img src={companylogo} alt="companylogo" className='w-32 md:w-48 lg:w-[200px] h-auto object-contain' />
                    </div>

                    <nav className="flex-1 flex flex-col justify-start items-start space-y-10 pt-[2rem] pl-[1rem] pr-[1rem] md:pl-[4rem] ">
                        {menuItems.map((item) => (
                            <Link
                            key={item.name}
                            to={item.href}
                            className="text-left text-2xl font-[400] text-alternativeTextBlack md:text-[23px] hover:text-[#898887] transition-colors duration-300"
                            onClick={onToggle}
                            >
                            {item.name}
                            </Link>
                        ))}
                    
                    </nav>

                    <div className='p-6 pl-[1rem] pr-[1rem] md:pl-[4rem] flex justify-start items-start space-x-2'>
                        <div className='flex justify-start items-start'>
                            <img 
                                src={customerimageone} 
                                alt="customerimageone" 
                                className="w-12 h-12 rounded-full border-2 border-white relative z-30"
                            /> 
                            <img 
                                src={customerimagetwo} 
                                alt="customerimagetwo" 
                                className="w-12 h-12 rounded-full border-2 border-white relative z-20 -ml-3"
                            /> 
                            <img 
                                src={customerimagethree} 
                                alt="customerimagethree" 
                                className="w-12 h-12 rounded-full border-2 border-white relative z-10 -ml-3"
                            /> 
                        </div>

                        <p className='w-[114px] text-[14px] font-[200]'>
                            4k+ Happy Home Customers
                        </p>
                    </div>
                                
            </div>
    </div>
  );
};

export default NavMenu;
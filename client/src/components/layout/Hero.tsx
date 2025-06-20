import { useState } from 'react';
import Button from '@/components/ui/Button';
import TwoLineMenu from '@/components/ui/TwoLineMenu';  
import Nav from '@/components/layout/Nav';
import arrowupright from '@/assets/images/arrowupright.svg';
import herosectionimage from '@/assets/images/herosectionimage.jpg';
import companylogo from '@/assets/images/companylogo.png';
import customerimageone from '@/assets/images/customerimageone.jpg';
import customerimagetwo from '@/assets/images/customerimagetwo.jpg';
import customerimagethree from '@/assets/images/customerimagethree.jpg';

const Hero = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
     <>
    <div className='w-full h-[700px] flex flex-col space-y-[2rem] md:flex-row'>

        <div className='py-6 pl-[1rem] pr-[1rem] w-full h-full flex flex-col justify-between md:pl-[4rem] md:w-[50%]'>
            <nav className='w-full flex justify-between items-center border-b border-gray-100 pb-4 md:border-none md:pb-0'>
                <img src={companylogo} alt="companylogo" className='w-32 md:w-48 lg:w-[200px] h-auto object-contain' />
                
                <Button 
                    variant="unstyled" 
                    size="lg"
                    onClick={toggleMenu}
                    className={`flex items-center justify-center relative z-[60] ${
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

            <div className='flex-1 flex flex-col justify-center items-start space-y-[1rem] pt-[3rem] md:pt-[3rem]'>
                <h1 className='text-[27px] font-[800] tracking-wide max-w-[400px] uppercase md:text-[36px]'>Where Comfort & Luxury Converge</h1>
                <p className='text-[16px] max-w-[400px] text-alternativeTextBlack'>We are committed to guiding you towards finding the perfect property and ensuring an exceptional real estate experience.</p>
                
                <div className='pt-[1rem] flex justify-start items-start space-x-2'>
                    <Button 
                        variant="unstyled" 
                        size="lg"
                        onChange={()=> console.log('clicked')}
                        onClick={() => console.log('clicked')}
                        className="bg-alternativePastelYellow text-alternativeTextBlack text-[14px] font-[400] hover:bg-black hover:text-white transition-colors duration-400"
                    >
                        Explore Property
                    </Button>

                    <Button 
                        variant="unstyled" 
                        size="lg"
                        onChange={()=> console.log('clicked')}
                        onClick={() => console.log('clicked')}
                        className="bg-inherit text-alternativeTextBlack text-[14px] flex space-x-2 group"
                    >
                        <p> Contact us </p>
                        <img src={arrowupright} alt='External link' className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                    </Button>
                </div>
            </div>

            <div className='pt-[1rem] flex justify-start items-start space-x-2'>
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
                        12k+ Happy Home Customers
                    </p>
                </div>
        </div>


        <div className='w-full h-full flex justify-center items-center md:w-[50%] relative'>
            <img src={herosectionimage} alt="herosectionimage" className='w-full h-full object-cover' />

            <div className='absolute bottom-6 right-6 flex flex-col items-end space-y-2'>
                <Button 
                    variant="unstyled" 
                    size="unstyled"
                    onChange={()=> console.log('clicked')}
                    onClick={() => console.log('clicked')}
                    className="bg-white text-alternativeTextBlack w-12 h-12 rounded-full flex items-center justify-center hover:bg-alternativePastelYellow transition-colors duration-400"
                >
                    <img src={arrowupright} alt='External link' className='w-4 h-4'/>
                </Button>
                <p className='text-right text-white text-[14px] max-w-[250px]'>Let&apos;s Make Your Dream Home a Reality Get in Touch Today</p>
            </div>
        </div>

    </div>

    <Nav isOpen={isMenuOpen} onToggle={toggleMenu} />
     </>
  )
}

export default Hero
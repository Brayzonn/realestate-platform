import Button from '@/components/ui/Button';
import NavMenu from '@/components/layout/NavMenu';
import Nav from '@/components/layout/Nav'
import arrowupright from '@/assets/images/arrowupright.svg';
import herosectionimage from '@/assets/images/herosectionimage.jpg';
import customerimageone from '@/assets/images/customerimageone.jpg';
import customerimagetwo from '@/assets/images/customerimagetwo.jpg';
import customerimagethree from '@/assets/images/customerimagethree.jpg';

interface HeroProps{
    isMenuOpen: boolean;
    setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
    toggleMenu: () => void;
}

const Hero = ({isMenuOpen, setIsMenuOpen, toggleMenu} : HeroProps) => {


  return (
     <>
        <div className='max-w-7xl mx-auto w-full h-[700px] flex flex-col space-y-[2rem] md:flex-row md:space-y-0'>
            
            <div className='w-full h-full flex flex-col justify-between items-start md:w-[50%]'>
          
                <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} className={'px-4 sm:px-6 lg:px-8'} />
               
                <div className='flex-1 w-full flex flex-col justify-center items-start space-y-[1rem] px-4 pt-[4rem] sm:px-6 md:pt-[0px] lg:px-8 '>
                        <h1 className='text-[27px] font-[800] tracking-wide max-w-[400px] uppercase md:text-[36px]'>
                            Where Comfort & Luxury Converge
                        </h1>

                        <p className='text-[16px] max-w-[400px] text-alternativeTextBlack'>
                            We are committed to guiding you towards finding the perfect property and ensuring an exceptional real estate experience.
                        </p>
                        
                        <div className='pt-[1rem] flex justify-start items-start space-x-2'>
                            <Button 
                                variant="unstyled" 
                                size="lg"
                                onClick={() => console.log('clicked')}
                                className="bg-alternativePastelYellow text-alternativeTextBlack text-[14px] font-[400] hover:bg-black hover:text-white transition-colors duration-400"
                            >
                                Explore Property
                            </Button>

                            <Button 
                                variant="unstyled" 
                                size="lg"
                                onClick={() => console.log('clicked')}
                                className="bg-inherit text-alternativeTextBlack text-[14px] flex space-x-2 group"
                            >
                                <p> Contact us </p>
                                <img src={arrowupright} alt='External link' className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                            </Button>
                        </div>
                </div>

                <div className='px-4 sm:px-6 lg:px-8 py-4 w-full'>
                    <div className='flex justify-start items-center space-x-3'>
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

            <div className='w-full h-[300px] flex justify-center items-center md:w-[50vw] md:h-full relative'>
                <img src={herosectionimage} alt="herosectionimage" className='w-full h-full object-cover' />

                <div className='absolute bottom-6 right-6 flex flex-col items-end space-y-2'>
                    <Button 
                        variant="unstyled" 
                        size="unstyled"
                        onClick={() => console.log('clicked')}
                        className="bg-white text-alternativeTextBlack w-12 h-12 rounded-full flex items-center justify-center hover:bg-alternativePastelYellow transition-colors duration-400"
                    >
                        <img src={arrowupright} alt='External link' className='w-4 h-4'/>
                    </Button>
                    <p className='text-right text-white text-[14px] max-w-[250px]'>Let&apos;s Make Your Dream Home a Reality Get in Touch Today</p>
                </div>
            </div>

        </div>

        <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
     </>
  )
}

export default Hero
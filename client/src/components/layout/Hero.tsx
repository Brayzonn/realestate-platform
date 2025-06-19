import Button from '@/components/ui/Button';
import TwoLineMenu from '@/components/ui/TwoLineMenu';  
import arrowupright from '@/assets/images/arrowupright.svg';
import herosectionimage from '@/assets/images/herosectionimage.jpg';
import companylogo from '@/assets/images/companylogo.png';
import customerimageone from '@/assets/images/customerimageone.jpg';
import customerimagetwo from '@/assets/images/customerimagetwo.jpg';
import customerimagethree from '@/assets/images/customerimagethree.jpg';


const Hero = () => {
  return (

        <div className='w-full min-h-[300px] flex flex-col justify-between items-center space-y-[1rem] md:flex-row md:space-y-0 md:items-start'>
            <div className='w-full min-h-[100px] flex flex-col justify-center items-start space-y-[1rem] md:flex-row md:space-y-0'>
                
                <div className='w-full flex flex-col justify-between items-start min-h-[20px] md:w-[50%]'>
                    <div className='w-full flex justify-between items-center border-b border-gray-100 pb-4 md:border-none md:pb-0'>
                        <img src={companylogo} alt="companylogo" className='w-32 md:w-48 lg:w-[200px] h-auto object-contain' />
                        <TwoLineMenu className="w-8 h-8" />
                    </div>

                    <div className='pt-[5rem] w-full flex flex-col justify-center items-start space-y-[1rem]'>
                        <h1 className='text-[27px] font-[550] uppercase'>Where Comfort & Luxury Converge</h1>
                        <p className='text-[16px] w-[372px]'>We are committed to guiding you towards finding the perfect property and ensuring an exceptional real estate experience.</p>
                        
                        <div className='pt-[1rem] flex justify-start items-start space-x-2'>
                            <Button 
                                variant="unstyled" 
                                size="lg"
                                onChange={()=> console.log('clicked')}
                                onClick={() => console.log('clicked')}
                                className="bg-alternativePastelYellow text-black text-[14px] font-[400]"
                            >
                                Explore Property
                            </Button>

                            <Button 
                                variant="unstyled" 
                                size="lg"
                                onChange={()=> console.log('clicked')}
                                onClick={() => console.log('clicked')}
                                className="bg-inherit text-black text-[14px]"
                            >
                                Contact us <img src={arrowupright} alt=''/>
                            </Button>
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
                </div>

                <div className='w-full flex justify-center items-center md:w-[50%]'>
                    <img src={herosectionimage} alt="herosectionimage" />
                </div>

            </div>
        </div>
  )
}

export default Hero
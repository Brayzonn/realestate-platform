import { useState, useEffect } from 'react';
import Nav from "@/components/layout/Nav"
import NavMenu from '@/components/layout/NavMenu';
import Footer from '@/components/layout/Footer';
import AllListings from '@/components/layout/AllListings';


const Properties = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`text-mainTextBlack min-h-screen ${isMenuOpen ? 'fixed' : 'relative'}`}>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
              toggleMenu={toggleMenu} showBorder={true} borderOnMobileOnly={false} 
              className ={`px-[1rem] min-h-[100px]`}
        />

        <main className='flex-1 max-w-7xl py-[4rem] mx-auto flex flex-col space-y-[3rem] px-4 sm:px-6 lg:px-8 '>
            <h1 className='text-[27px] text-left w-full font-[900] uppercase md:text-[36px]'>Property Listings</h1>

            <AllListings />
        </main>

        <Footer />

      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  )
}

export default Properties
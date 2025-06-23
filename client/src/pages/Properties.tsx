import { useState } from 'react';
import Nav from "@/components/layout/Nav"
import NavMenu from '@/components/layout/NavMenu';
import Footer from '@/components/layout/Footer';
import AllListings from '@/components/layout/AllListings';


const Properties = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<>
    <div className='min-h-screen flex flex-col'>

        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
              toggleMenu={toggleMenu} showBorder={true} borderOnMobileOnly={false} 
              className ={`px-[1rem] min-h-[100px]`}
        />

        <main className='flex-1'>
            <div className="max-w-7xl mx-auto py-[3rem] px-[1rem] flex flex-col space-y-[2rem]">
                <h1 className='text-[27px] text-left w-full font-[900] uppercase md:text-[36px]'>Property Listings</h1>

                <AllListings />
            </div>
        </main>

        <Footer />

    </div>

    <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
</>
  )
}

export default Properties
import { useState } from 'react';
import Nav from "@/components/layout/Nav"
import NavMenu from '@/components/layout/NavMenu';
import Footer from '@/components/layout/Footer';


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
              className ={`pl-[1rem] min-h-[100px] pr-[1rem]`}
        />
        
        <main className='flex-1'>

        </main>
        
        <Footer />
    </div>

    <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
</>
  )
}

export default Properties
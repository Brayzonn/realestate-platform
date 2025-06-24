import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Properties from '@/pages/Properties';
import AboutUs from '@/pages/AboutUs';
import PropertyView from '@/pages/PropertyView';
import ScrollToTop from '@/components/common/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/properties/:id' element={<PropertyView />}/>
          <Route path="*" element={<Landing />}/>
      </Routes>
    </Router>
  )
}

export default App

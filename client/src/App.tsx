import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Properties from '@/pages/Properties';
import AboutUs from '@/pages/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Landing />}/>
          <Route path='/' element={<Landing />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/about' element={<AboutUs />}/>
      </Routes>
    </Router>
  )
}

export default App

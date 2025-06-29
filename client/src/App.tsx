import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Properties from '@/pages/Properties';
import AboutUs from '@/pages/AboutUs';
import PropertyView from '@/pages/PropertyView';
import ScrollToTop from '@/components/common/ScrollToTop';
import Contactus from './pages/Contactus';
import Blog from './pages/Blog';
import Communities from './pages/Communities';
import BlogView from './pages/BlogView';
import PropertyInquiry from './components/layout/properties/PropertyInquiry';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogView />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyView />} />
        <Route path="/properties/:id/inquiry" element={<PropertyInquiry />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;

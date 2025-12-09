
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

// Services
import FractionalCFO from './pages/services/FractionalCFO';
import CFOAutomation from './pages/services/CFOAutomation';
import ERPImplementation from './pages/services/ERPImplementation';
import DueDiligence from './pages/services/DueDiligence';

// Industries
import IndustryPage from './pages/industries/IndustryPages';

// Legal
import Legal from './pages/Legal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Services */}
          <Route path="services">
            <Route index element={<Home />} /> {/* Redirect or show overview */}
            <Route path="fractional-cfo" element={<FractionalCFO />} />
            <Route path="cfo-automation" element={<CFOAutomation />} />
            <Route path="erp-implementation" element={<ERPImplementation />} />
            <Route path="financial-due-diligence" element={<DueDiligence />} />
          </Route>

          {/* Industries */}
          <Route path="industries">
            <Route path="ecommerce" element={<IndustryPage type="ecommerce" />} />
            <Route path="logistics" element={<IndustryPage type="logistics" />} />
            <Route path="trade" element={<IndustryPage type="trade" />} />
            <Route path="manufacturing" element={<IndustryPage type="manufacturing" />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Legal */}
          <Route path="legal/:type" element={<Legal />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

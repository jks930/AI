import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import UnifiedDetailsPage from './pages/UnifiedDetailsPage';

import PulseAi from './pages/products/pulse-ai';
import InsuranceDataHub from './pages/products/insurance-data-hub';
import Iip from './pages/products/iip';
import Smarthr from './pages/products/smarthr';
import Smartpay from './pages/products/smartpay';
import PulseNerve from './pages/products/pulse-nerve';
import DigitalBpaas from './pages/products/digital-bpaas';
import Sequre from './pages/products/sequre';
import PulseRetailAi from './pages/products/pulse-retail-ai';
import ResumeBuilder from './pages/products/resume-builder';
import Pms from './pages/products/pms';
import Hrms from './pages/products/hrms';
import Crm from './pages/products/crm';
import Ats from './pages/products/ats';
import Casacab from './pages/products/casacab';

function App() {
  return (
    <Router basename="/ai">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage />} />
        <Route path="/service/:slug" element={<ServiceDetailsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        
        {/* Products */}
        <Route path="/products/pulse-ai" element={<PulseAi />} />
        <Route path="/products/insurance-data-hub" element={<InsuranceDataHub />} />
        <Route path="/products/iip" element={<Iip />} />
        <Route path="/products/smarthr" element={<Smarthr />} />
        <Route path="/products/smartpay" element={<Smartpay />} />
        <Route path="/products/pulse-nerve" element={<PulseNerve />} />
        <Route path="/products/digital-bpaas" element={<DigitalBpaas />} />
        <Route path="/products/sequre" element={<Sequre />} />
        <Route path="/products/pulse-retail-ai" element={<PulseRetailAi />} />
        <Route path="/products/resume-builder" element={<ResumeBuilder />} />
        <Route path="/products/property-management" element={<Pms />} />
        <Route path="/products/hrms" element={<Hrms />} />
        <Route path="/products/crm" element={<Crm />} />
        <Route path="/products/ats" element={<Ats />} />
        <Route path="/products/casacab" element={<Casacab />} />

        <Route path="/:slug" element={<UnifiedDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

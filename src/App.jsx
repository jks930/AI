import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import IndustryDetailsPage from './pages/IndustryDetailsPage';
import TechnologyDetailsPage from './pages/TechnologyDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:slug" element={<ServiceDetailsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/industry/:slug" element={<IndustryDetailsPage />} />
        <Route path="/technology/:slug" element={<TechnologyDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

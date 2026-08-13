import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import UnifiedDetailsPage from './pages/UnifiedDetailsPage';

function App() {
  return (
    <Router basename="/ai">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage />} />
        <Route path="/service/:slug" element={<ServiceDetailsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/:slug" element={<UnifiedDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

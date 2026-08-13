import React from 'react';
import { useParams } from 'react-router-dom';
import { technologiesData } from '../data/technologiesData';
import { industriesData } from '../data/industriesData';
import TechnologyDetailsPage from './TechnologyDetailsPage';
import IndustryDetailsPage from './IndustryDetailsPage';

const UnifiedDetailsPage = () => {
  const { slug } = useParams();

  // Pehle technology check karo, phir industry
  if (technologiesData[slug]) {
    return <TechnologyDetailsPage />;
  }

  // Industry (ya 404 redirect) IndustryDetailsPage handle karega
  return <IndustryDetailsPage />;
};

export default UnifiedDetailsPage;

import React from 'react';
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  IntegrationSection,
  AdvancedFeaturesSection,
  TestimonialsSection,
  CTASection
} from '../components/homePage';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <IntegrationSection />
      <AdvancedFeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;

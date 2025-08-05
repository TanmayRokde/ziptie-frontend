import React from 'react';
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  TestimonialsSection,
  IntegrationSection,
  LiveDemoSection,
  AdvancedFeaturesSection,
  PricingSection,
  CTASection
} from '../components/homePage';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <IntegrationSection />
      <LiveDemoSection />
      <AdvancedFeaturesSection />
      <PricingSection />
      <CTASection />
    </>
  );
};

export default HomePage;
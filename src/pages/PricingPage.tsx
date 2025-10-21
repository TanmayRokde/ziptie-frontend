import React from 'react';
import {
  PricingSection,
  CTASection
} from '../components/homePage';

const PricingPage: React.FC = () => {
  return (
    <>
      <section className="px-6 pt-28 pb-12 bg-gradient-to-b from-black via-gray-900/60 to-black text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/40 text-sm text-orange-300 bg-orange-500/10">
            Tailored plans for SDK + gateway + Redis microservice
          </span>
          <h1 className="mt-6 text-4xl lg:text-6xl font-bold heading-glow">
            Choose how you ship Ziptie
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Self-host with the open-source stack or let us manage the key-verifying gateway and Redis microservice for you.
          </p>
        </div>
      </section>

      <PricingSection />
      <CTASection />
    </>
  );
};

export default PricingPage;

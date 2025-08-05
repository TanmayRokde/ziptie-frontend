import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-r from-orange-900/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-bounce"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Ready to Accelerate?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 relative z-10">
          Join thousands of developers who trust Ziptie for lightning-fast URL shortening.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 group">
            Start Free Trial
            <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="border border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/50 hover:border-orange-400 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:scale-105">
            <ExternalLink className="mr-2 h-5 w-5" />
            View Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
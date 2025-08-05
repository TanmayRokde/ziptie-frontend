import React from 'react';
import { Copy } from 'lucide-react';

const LiveDemoSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-gray-900/40 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Try It Live
            </span>
          </h2>
          <p className="text-gray-300">Enter a URL below to see Ziptie in action</p>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="url" 
              placeholder="https://example.com/your-long-url"
              className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
            />
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Shorten URL
            </button>
          </div>
          <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gray-700/30">
            <div className="flex items-center justify-between">
              <span className="text-orange-400 font-mono">https://ziptie.dev/demo123</span>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
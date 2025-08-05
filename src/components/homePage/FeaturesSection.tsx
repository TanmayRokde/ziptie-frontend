import React from 'react';
import { Zap, Shield, BarChart3, Code, Globe, TrendingUp } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Generate shortened URLs in milliseconds with our optimized infrastructure"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and advanced threat protection for all links"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive click tracking, geographic data, and performance insights"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Developer First",
      description: "RESTful API with SDKs for Python, Node.js, PHP, and more"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global CDN",
      description: "Worldwide edge locations ensure fastest redirect times globally"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Smart Routing",
      description: "AI-powered link optimization for maximum engagement rates"
    }
  ];

  return (
    <section id="features" className="px-6 py-20 bg-gray-900/40 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Built for Speed & Scale
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature engineered for maximum performance, from sub-millisecond redirects 
            to real-time analytics that power your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 h-full hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-3 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-orange-400 mb-6 group-hover:text-orange-300 transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-100 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Effects Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-900/60 backdrop-blur-lg border border-orange-500/30 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">99.99% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">&lt;10ms Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Global CDN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import React from 'react';
import { Package, Shield, Server, Code2, TestTube2, Activity } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Drop-in SDK",
      description: "Import ziptie-shortlinks and call createShortUrl with zero manual wiring."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Key Verification",
      description: "mvp-backend validates private keys before your request ever touches Redis."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Redis-native Links",
      description: "The dedicated Redis microservice issues 12-char keys with precise TTL enforcement."
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Gateway Routing",
      description: "mvp-backend fans out to the microservice and injects base URLs, analytics hooks, and policy checks."
    },
    {
      icon: <TestTube2 className="h-8 w-8" />,
      title: "CI-friendly",
      description: "testtie exercises the package against live Redis instances so regressions never ship."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Always Observable",
      description: "Health checks from the SDK bubble up latency metrics and backend status in real time."
    }
  ];

  return (
    <section id="features" className="px-6 py-20 bg-gray-900/40 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="heading-glow">
              Built for Speed & Scale
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One monorepo delivers the SDK, key-verifying gateway, and Redis microservice—ready to wire into your stack without custom glue.
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
              <span className="text-sm text-gray-300">Key-auth Gateway</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Redis-backed TTL</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">SDK Validation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

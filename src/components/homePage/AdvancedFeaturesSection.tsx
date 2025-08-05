import React from 'react';
import { Shield, BarChart3, Globe, Code, Zap, Star, TrendingUp, Sparkles } from 'lucide-react';

interface AdvancedFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const AdvancedFeaturesSection: React.FC = () => {
  const features: AdvancedFeature[] = [
    { icon: <Shield className="h-6 w-6" />, title: "Link Expiration", desc: "Set custom expiry dates" },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Real-time Analytics", desc: "Live click tracking" },
    { icon: <Globe className="h-6 w-6" />, title: "Custom Domains", desc: "Use your own domain" },
    { icon: <Code className="h-6 w-6" />, title: "Webhook Support", desc: "Real-time notifications" },
    { icon: <Zap className="h-6 w-6" />, title: "Bulk Operations", desc: "Process thousands at once" },
    { icon: <Star className="h-6 w-6" />, title: "QR Codes", desc: "Auto-generated QR codes" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "A/B Testing", desc: "Split traffic testing" },
    { icon: <Sparkles className="h-6 w-6" />, title: "Smart Redirects", desc: "Device-based routing" }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
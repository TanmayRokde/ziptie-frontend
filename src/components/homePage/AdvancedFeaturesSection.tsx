import React from 'react';
import { ShieldCheck, Timer, Link2, Activity, CircuitBoard, RefreshCw, LifeBuoy, GitBranch } from 'lucide-react';

interface AdvancedFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const AdvancedFeaturesSection: React.FC = () => {
  const features: AdvancedFeature[] = [
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Private Key Auth", desc: "mvp-backend rejects unsigned calls before they reach Redis." },
    { icon: <Timer className="h-6 w-6" />, title: "Guaranteed TTL", desc: "Redis EX flags guarantee links retire right on schedule." },
    { icon: <Link2 className="h-6 w-6" />, title: "Base URL Templates", desc: "Configure BASE_SHORT_URL once and every short link inherits it." },
    { icon: <Activity className="h-6 w-6" />, title: "Health Endpoints", desc: "SDK ships with checkHealth for upstream uptime probes." },
    { icon: <CircuitBoard className="h-6 w-6" />, title: "Safe Fan-out", desc: "Gateway wraps axios with timeouts and structured error handling." },
    { icon: <RefreshCw className="h-6 w-6" />, title: "Key Rotation", desc: "API keys are stored hashed in Redis and regenerated on demand." },
    { icon: <LifeBuoy className="h-6 w-6" />, title: "CI Harness", desc: "testtie keeps your release pipeline honest with real requests." },
    { icon: <GitBranch className="h-6 w-6" />, title: "Composable", desc: "Every repo is open-source and designed for custom middlewares." }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="heading-glow">
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

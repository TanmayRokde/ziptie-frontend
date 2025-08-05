import React from 'react';
import { Link, Code, Shield, Zap } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { number: "10B+", label: "Links Created", icon: <Link className="h-6 w-6" /> },
    { number: "50K+", label: "Developers", icon: <Code className="h-6 w-6" /> },
    { number: "99.99%", label: "Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "<10ms", label: "Response Time", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <section className="px-6 py-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-orange-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
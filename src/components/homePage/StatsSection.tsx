import React from 'react';
import { Code, ShieldCheck, Database, FlaskConical } from 'lucide-react';

interface Stat {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      title: "@ziptie-shortlink/ziptie-shortlinks",
      description: "Published Node SDK that wraps our backend contracts and ships TypeScript typings.",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "ziptie-mvp-backend",
      description: "Express gateway that authenticates private keys, shapes payloads, and guards Redis.",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "ziptie-redis-microservice",
      description: "Stateless service that generates collision-proof keys and honors per-link TTLs.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "testtie",
      description: "Smoke suite that calls the SDK against live services to keep releases honest.",
      icon: <FlaskConical className="h-6 w-6" />
    }
  ];

  return (
    <section id="stack" className="px-6 py-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-orange-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-xl font-semibold text-white mb-2">{stat.title}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

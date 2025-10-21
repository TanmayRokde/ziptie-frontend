import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

const PricingSection: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Local Dev",
      price: "$0",
      period: "Open Source",
      features: [
        "SDK + Redis microservice",
        "Env-based configuration",
        "testtie regression suite",
        "Community Discord"
      ],
      popular: false
    },
    {
      name: "Launch Team",
      price: "$29",
      period: "per month",
      features: [
        "Hosted mvp-backend with key vault",
        "Managed Redis microservice",
        "Usage dashboards & webhooks",
        "On-call engineer handoff",
        "Key rotation reminders"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Secure contract",
      features: [
        "Private tenancy & SSO",
        "Dedicated Redis cluster integration",
        "Custom compliance reviews",
        "Quarterly architecture sessions",
        "Uptime & remediation SLAs"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="heading-glow">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`bg-gray-900/60 backdrop-blur-lg border rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'border-orange-500 shadow-xl shadow-orange-500/20' : 'border-gray-700/50 hover:border-orange-500/30 hover:shadow-orange-500/10'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-xl hover:shadow-orange-500/50' 
                    : 'border border-gray-600 hover:bg-gray-700/50 hover:border-orange-400'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

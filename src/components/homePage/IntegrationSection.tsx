import React from 'react';

const steps = [
  {
    title: 'Install & point',
    description: 'Add @ziptie-shortlink/ziptie-shortlinks and set MVP_BACKEND_URL to the gateway endpoint.'
  },
  {
    title: 'Authenticate once',
    description: 'mvp-backend verifies your private key, shapes the payload, and proxies to the Redis service.'
  },
  {
    title: 'Redis does the rest',
    description: 'ziptie-redis-microservice generates a collision-proof key, stores the payload, and returns the short URL.'
  }
];

const nodeSnippet = `import { createShortUrl } from '@ziptie-shortlink/ziptie-shortlinks';

process.env.MVP_BACKEND_URL = 'https://mvp-backend.ziptie.dev/api/shortlink';

const short = await createShortUrl({
  longUrl: 'https://ziptie.dev/docs',
  userId: 'demo-user',
  ttl: 3600
});

console.log(short.shortUrl);`;

const responseSnippet = `{
  "shortKey": "cK9Gs5zs0fA1",
  "expiresIn": 3600,
  "shortUrl": "https://links.ziptie.dev/cK9Gs5zs0fA1"
}`;

const IntegrationSection: React.FC = () => {
  return (
    <section id="integration" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="heading-glow">
              One Flow, Three Components
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            “Try it now” and “Easy integration” collapse into the same sequence—SDK call in, gateway verification, Redis shortlink out.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-gray-900/50 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-lg hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-orange-500/20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900/70 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-lg hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wide">SDK Call</h4>
              </div>
              <pre className="text-sm text-gray-200 overflow-x-auto">
                <code>{nodeSnippet}</code>
              </pre>
            </div>

            <div className="bg-gray-900/70 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wide">Gateway Response</h4>
                <span className="text-xs text-gray-500">Redis backed</span>
              </div>
              <pre className="text-sm text-orange-300 overflow-x-auto">
                <code>{responseSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;

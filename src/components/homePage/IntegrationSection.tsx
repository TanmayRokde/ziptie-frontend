import React from 'react';

interface Example {
  title: string;
  code: string;
}

const IntegrationSection: React.FC = () => {
  const examples: Example[] = [
    {
      title: "JavaScript/Node.js",
      code: `import { Ziptie } from 'ziptie-sdk';

const ziptie = new Ziptie('your-api-key');

const result = await ziptie.shorten({
  url: 'https://example.com/long-url',
  customAlias: 'my-link'
});

console.log(result.shortUrl);`
    },
    {
      title: "Python",
      code: `from ziptie import Ziptie

client = Ziptie('your-api-key')

result = client.shorten(
    url='https://example.com/long-url',
    custom_alias='my-link'
)

print(result.short_url)`
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Easy Integration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in minutes with our comprehensive SDKs and detailed documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div className="px-6 py-4 border-b border-gray-700/50">
                  <h3 className="font-semibold text-orange-400">{example.title}</h3>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
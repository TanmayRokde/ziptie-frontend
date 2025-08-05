import React, { useState } from 'react';
import { Sparkles, ArrowRight, Code, CheckCircle, Copy } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const codeExample = `curl -X POST https://api.ziptie.dev/v1/shorten \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/very-long-url",
    "custom_alias": "my-link",
    "expires_at": "2024-12-31"
  }'`;

  return (
    <section className="relative px-6 py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-orange-800/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23EA580C%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-300 rounded-full animate-bounce opacity-25"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-gray-900/60 backdrop-blur-lg border border-orange-500/30 rounded-full px-6 py-2 mb-8 hover:border-orange-400/50 transition-all duration-300">
          <Sparkles className="h-4 w-4 text-orange-400 mr-2 animate-pulse" />
          <span className="text-sm text-gray-300">Trusted by 50,000+ developers worldwide</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
            Lightning-Fast URL
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Shortening API
          </span>
        </h1>

        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform lengthy URLs into powerful short links with blazing-fast redirects, 
          comprehensive analytics, and enterprise-grade reliability. Built for developers who demand speed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
            Start Free Trial
            <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/50 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm">
            View Documentation
          </button>
        </div>

        {/* API Demo */}
        <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Code className="mr-2 h-5 w-5 text-orange-400" />
              Try it now
            </h3>
            <button 
              onClick={() => copyToClipboard(codeExample, 'demo')}
              className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-105"
            >
              {copiedCode === 'demo' ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              <span>{copiedCode === 'demo' ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <div className="bg-black/80 rounded-xl p-6 text-left border border-gray-800">
            <pre className="text-sm text-orange-300 overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
          <div className="mt-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
            <p className="text-sm text-gray-300 mb-2">Response:</p>
            <pre className="text-sm text-orange-400">
{`{
  "short_url": "https://ziptie.dev/abc123",
  "original_url": "https://example.com/very-long-url",
  "clicks": 0,
  "created_at": "2024-01-15T10:30:00Z"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
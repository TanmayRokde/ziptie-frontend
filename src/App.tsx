import React, { useState, useEffect } from 'react';
import { 
  Link, 
  Zap, 
  Shield, 
  BarChart3, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Copy,
  ExternalLink,
  Star,
  Menu,
  X,
  Sparkles,
  Globe,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const features = [
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

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "Forever Free",
      features: ["1,000 URLs/month", "Basic analytics", "Community support", "99.9% uptime"],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      features: ["50,000 URLs/month", "Advanced analytics", "Priority support", "Custom domains", "Bulk operations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      features: ["Unlimited URLs", "White-label solution", "Dedicated support", "SLA guarantee", "Custom integrations"],
      popular: false
    }
  ];

  const codeExample = `curl -X POST https://api.ziptie.dev/v1/shorten \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/very-long-url",
    "custom_alias": "my-link",
    "expires_at": "2024-12-31"
  }'`;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-orange-800/10"></div>
        <div 
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 animate-pulse">
              <Link className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ziptie
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105">Docs</a>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-300 hover:text-orange-400 transition-colors">Docs</a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold text-left">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Stats Section */}
      <section className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10B+", label: "Links Created", icon: <Link className="h-6 w-6" /> },
              { number: "50K+", label: "Developers", icon: <Code className="h-6 w-6" /> },
              { number: "99.99%", label: "Uptime", icon: <Shield className="h-6 w-6" /> },
              { number: "<10ms", label: "Response Time", icon: <Zap className="h-6 w-6" /> }
            ].map((stat, index) => (
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

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-900/30 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Loved by Developers
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Ziptie's API is incredibly fast and reliable. We've processed millions of URLs without a single issue.",
                author: "Sarah Chen",
                role: "Lead Developer at TechCorp",
                avatar: "SC"
              },
              {
                quote: "The analytics are game-changing. We can track user engagement like never before.",
                author: "Mike Rodriguez", 
                role: "CTO at StartupXYZ",
                avatar: "MR"
              },
              {
                quote: "Best URL shortening API we've used. The documentation is perfect and support is amazing.",
                author: "Alex Kim",
                role: "Full Stack Developer",
                avatar: "AK"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
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
            {[
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
            ].map((example, index) => (
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

      {/* Live Demo Section */}
      <section className="px-6 py-20 bg-gray-900/40 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Try It Live
              </span>
            </h2>
            <p className="text-gray-300">Enter a URL below to see Ziptie in action</p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="url" 
                placeholder="https://example.com/your-long-url"
                className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Shorten URL
              </button>
            </div>
            <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gray-700/30">
              <div className="flex items-center justify-between">
                <span className="text-orange-400 font-mono">https://ziptie.dev/demo123</span>
                <button className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
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
            {[
              { icon: <Shield className="h-6 w-6" />, title: "Link Expiration", desc: "Set custom expiry dates" },
              { icon: <BarChart3 className="h-6 w-6" />, title: "Real-time Analytics", desc: "Live click tracking" },
              { icon: <Globe className="h-6 w-6" />, title: "Custom Domains", desc: "Use your own domain" },
              { icon: <Code className="h-6 w-6" />, title: "Webhook Support", desc: "Real-time notifications" },
              { icon: <Zap className="h-6 w-6" />, title: "Bulk Operations", desc: "Process thousands at once" },
              { icon: <Star className="h-6 w-6" />, title: "QR Codes", desc: "Auto-generated QR codes" },
              { icon: <TrendingUp className="h-6 w-6" />, title: "A/B Testing", desc: "Split traffic testing" },
              { icon: <Sparkles className="h-6 w-6" />, title: "Smart Redirects", desc: "Device-based routing" }
            ].map((feature, index) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
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

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-900/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-bounce"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 relative z-10">
            <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Ready to Accelerate?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 relative z-10">
            Join thousands of developers who trust Ziptie for lightning-fast URL shortening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 group">
              Start Free Trial
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/50 hover:border-orange-400 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:scale-105">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-700/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Link className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Ziptie
              </span>
            </div>
            <div className="flex items-center space-x-8 text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Support</a>
              <a href="#" className="hover:text-orange-400 transition-colors">API Docs</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-400">
            <p>&copy; 2024 Ziptie. All rights reserved. Built for developers who demand speed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
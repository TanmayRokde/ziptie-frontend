import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Copy,
  CheckCircle,
  ShieldCheck,
  Timer,
  Database,
  Code
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const callouts = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-orange-400" />,
    title: 'Gateway validation',
    description: 'mvp-backend signs every request before Redis sees it.'
  },
  {
    icon: <Timer className="h-5 w-5 text-orange-400" />,
    title: 'Deterministic TTL',
    description: 'Expirations enforced with Redis EX flags—no cron required.'
  },
  {
    icon: <Database className="h-5 w-5 text-orange-400" />,
    title: 'Zero data leakage',
    description: 'Payloads live under 12-char keys inside a hardened Redis cluster.'
  }
];

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

const codeExample = `const response = await fetch('\${process.env.ZIPTIE_API_URL}/demo/shorten', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://docs.ziptie.dev/architecture' })
});

const { data } = await response.json();
console.log(data.shortUrl);`;

const HeroSection: React.FC = () => {
  const { currentUser } = useAuth();
  const requestLoginModal = () => {
    window.dispatchEvent(new Event('ziptie-open-login'));
  };
  const [demoUrl, setDemoUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('https://links.ziptie.dev/demo123');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoError, setDemoError] = useState<string | null>(null);
  const [demoMeta, setDemoMeta] = useState({
    expiresIn: 3600,
    userId: 'demo-user',
    shortKey: 'demo123'
  });

  const handleShorten = async () => {
    if (!currentUser) {
      setDemoError('Please sign up or log in to shorten links.');
      requestLoginModal();
      return;
    }

    const cleaned = demoUrl.trim();
    if (!cleaned) {
      setDemoError('Please enter a URL to shorten.');
      return;
    }

    try {
      setDemoLoading(true);
      setDemoError(null);
      setCopiedLink(false);

      const response = await fetch(`${API_BASE_URL}/demo/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: cleaned })
      });

      const payload = await response.json();

      if (!payload?.data) {
        throw new Error(payload?.message || 'Failed to shorten URL');
      }

      const data = payload.data;

      if (payload.meta?.degraded && payload.message) {
        setDemoError(payload.message);
      } else {
        setDemoError(null);
      }

      const finalUrl =
        data?.shortUrl ||
        `https://links.ziptie.dev/${data?.shortKey ?? 'demo123'}`;

      setShortUrl(finalUrl);
      setDemoMeta({
        expiresIn: data?.expiresIn ?? 3600,
        userId: data?.userId ?? 'demo-user',
        shortKey: data?.shortKey ?? 'demo123'
      });
    } catch (error: any) {
      setDemoError(error.message || 'Unexpected error creating short URL');
    } finally {
      setDemoLoading(false);
    }
  };

  const copyShortUrl = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (_) {
      setCopiedLink(false);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (_) {
      setCopiedCode(false);
    }
  };

  return (
    <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-orange-900/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23EA580C%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-300 rounded-full animate-bounce opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="inline-flex items-center bg-gray-900/60 backdrop-blur-lg border border-orange-500/30 rounded-full px-6 py-2 mb-10 hover:border-orange-400/50 transition-all duration-300">
          <Sparkles className="h-4 w-4 text-orange-400 mr-2 animate-pulse" />
          <span className="text-sm text-gray-300">
            NPM-ready package + Redis microservice in one toolkit
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="heading-glow block">Ship production-ready short links</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Ziptie bundles a key-verifying Node gateway, a Redis-powered shortlink writer, and a battle-tested SDK.
              Drop the package into any Node runtime, point it at the backend, and your users get expiring links with zero glue code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://www.npmjs.com/package/@ziptiejs/ziptie-shortlinks"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group text-center"
              >
                Install the SDK
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/stars/TanmayRokde/lists/ziptite"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/50 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Explore the Repos
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {callouts.map((callout) => (
                <div
                  key={callout.title}
                  className="bg-gray-900/45 border border-gray-800/60 rounded-2xl px-4 py-5 backdrop-blur-md hover:border-orange-500/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                    {callout.icon}
                    {callout.title}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/65 border border-gray-700/60 rounded-3xl p-6 backdrop-blur-lg shadow-lg shadow-orange-500/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-orange-400">Live demo</p>
                  <h2 className="text-2xl font-semibold text-white">Shorten a URL</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="url"
                  value={demoUrl}
                  onChange={(event) => setDemoUrl(event.target.value)}
                  placeholder="https://docs.ziptie.dev/your-long-url"
                  className="flex-1 bg-black/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                />
                <button
                  onClick={handleShorten}
                  disabled={demoLoading}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {demoLoading ? 'Shortening...' : 'Shorten'}
                </button>
              </div>
              {demoError && (
                <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-300">
                  {demoError}
                </div>
              )}
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="p-4 bg-black/40 border border-gray-700/40 rounded-2xl">
                  <p className="text-xs uppercase text-gray-500 mb-2">Short link</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-orange-400 font-mono text-sm truncate">
                      {shortUrl}
                    </span>
                    <button
                      onClick={copyShortUrl}
                      className="text-gray-400 hover:text-orange-400 transition-colors flex-shrink-0"
                    >
                      {copiedLink ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-black/40 border border-gray-700/40 rounded-2xl">
                  <p className="text-xs uppercase text-gray-500 mb-2">TTL & Metadata</p>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
{`{
  "expiresIn": ${demoMeta.expiresIn},
  "userId": "${demoMeta.userId}",
  "shortKey": "${demoMeta.shortKey}"
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/55 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-6 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center text-white">
                  <Code className="mr-2 h-5 w-5 text-orange-400" />
                  SDK Call
                </h3>
                <button
                  onClick={copyCode}
                  className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-105"
                >
                  {copiedCode ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="bg-black/80 rounded-xl p-6 text-left border border-gray-800">
                <pre className="text-sm text-orange-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

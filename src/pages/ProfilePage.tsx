import React, { useEffect, useMemo, useState } from 'react';
import { Copy, CheckCircle, Globe, Pencil, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

interface DomainFormState {
  id?: string;
  domain: string;
  pathPrefix?: string;
}

const ProfilePage: React.FC = () => {
  const { profile, token, refreshProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [copiedKey, setCopiedKey] = useState(false);
  const [domainForm, setDomainForm] = useState<DomainFormState>({ domain: '', pathPrefix: '' });
  const [savingDomain, setSavingDomain] = useState(false);
  const [domainError, setDomainError] = useState<string | null>(null);
  const [profileError, setProfileError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setProfileError(null);
        await refreshProfile();
      } catch (error: any) {
        setProfileError(error.message || 'Unable to load profile');
      }
    };

    if (token && !profile) {
      loadProfile();
    }
  }, [token, profile, refreshProfile]);

  const handleCopyKey = async () => {
    if (!profile?.apiKey) return;
    try {
      await navigator.clipboard.writeText(profile.apiKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } catch (error) {
      console.error('Failed to copy API key', error);
    }
  };

  const resetForm = () => {
    setDomainForm({ domain: '', pathPrefix: '' });
    setDomainError(null);
  };

  const handleDomainSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!token) {
      setDomainError('You must be logged in to manage domains.');
      return;
    }

    if (!domainForm.domain.trim()) {
      setDomainError('Domain is required');
      return;
    }

    try {
      setSavingDomain(true);
      setDomainError(null);

      const payload = {
        domain: domainForm.domain,
        pathPrefix: domainForm.pathPrefix
      };

      const endpoint = domainForm.id
        ? `${API_BASE_URL}/domains/${domainForm.id}`
        : `${API_BASE_URL}/domains`;

      const method = domainForm.id ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Unable to save domain');
      }

      await refreshProfile();
      resetForm();
    } catch (error: any) {
      setDomainError(error.message || 'Unable to save domain');
    } finally {
      setSavingDomain(false);
    }
  };

  const domains = useMemo(() => profile?.domains ?? [], [profile]);

  return (
    <div className="px-6 py-20 max-w-5xl mx-auto min-h-[70vh]">
      <div className="bg-gray-900/40 border border-gray-800/60 rounded-3xl p-8 backdrop-blur-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold heading-glow mb-3">Your Ziptie Workspace</h1>
            <p className="text-gray-300 max-w-xl">
              Manage your API key, configure custom domains, and keep track of everything tied to your short links.
            </p>
          </div>
          <button
            onClick={() => {
              logout();
              navigate('/', { replace: true });
            }}
            className="self-start lg:self-auto border border-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800/50 hover:border-orange-400 transition-all duration-300"
          >
            Log out
          </button>
        </div>

        {profileError && (
          <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-300">
            {profileError}
          </div>
        )}

        {profile && (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-black/40 border border-gray-800/60 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Account Details</h2>
                <dl className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Email</dt>
                    <dd className="font-medium">{profile.email}</dd>
                  </div>
                  {profile.name && (
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Name</dt>
                      <dd className="font-medium">{profile.name}</dd>
                    </div>
                  )}
                  {profile.createdAt && (
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Joined</dt>
                      <dd className="font-medium">{new Date(profile.createdAt).toLocaleString()}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="bg-black/40 border border-gray-800/60 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Private API Key</h2>
                  <button
                    onClick={handleCopyKey}
                    className="text-sm flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {copiedKey ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copiedKey ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Add this base64 key to the <code className="font-mono text-orange-300">private-key</code> header when calling the gateway.
                </p>
                <div className="bg-black/60 border border-gray-800/60 rounded-xl p-4 font-mono text-xs text-orange-300 break-all">
                  {profile.apiKey ?? 'No API key assigned yet'}
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-800/60 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Custom Domains</h2>
                <button
                  onClick={() => {
                    refreshProfile();
                  }}
                  className="text-sm flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Refresh
                </button>
              </div>

              <form onSubmit={handleDomainSubmit} className="space-y-4">
                {domainError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2 text-xs text-red-300">
                    {domainError}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Domain</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={domainForm.domain}
                      onChange={(event) => setDomainForm((prev) => ({ ...prev, domain: event.target.value }))}
                      className="w-full bg-black/50 border border-gray-600 rounded-lg pl-9 pr-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                      placeholder="links.example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Path prefix (optional)</label>
                  <input
                    type="text"
                    value={domainForm.pathPrefix || ''}
                    onChange={(event) => setDomainForm((prev) => ({ ...prev, pathPrefix: event.target.value }))}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                    placeholder="campaign"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Resulting short links will look like <code className="font-mono text-orange-300">{domainForm.domain || 'domain.com'}{domainForm.pathPrefix ? `/${domainForm.pathPrefix}` : ''}/your-key</code>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={savingDomain}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {savingDomain ? 'Saving...' : domainForm.id ? 'Update domain' : 'Add domain'}
                  </button>
                  {domainForm.id && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      Cancel edit
                    </button>
                  )}
                </div>
              </form>

              <div className="mt-8 space-y-4">
                {domains.length === 0 && (
                  <p className="text-sm text-gray-400">No domains set yet. Add one to start issuing branded links.</p>
                )}

                {domains.map((domain) => (
                  <div
                    key={domain.id}
                    className="bg-gray-900/60 border border-gray-800/60 rounded-xl px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white">{domain.domain}</p>
                      {domain.pathPrefix && (
                        <p className="text-xs text-gray-400">/{domain.pathPrefix}</p>
                      )}
                    </div>
                    <button
                      onClick={() => setDomainForm({ id: domain.id, domain: domain.domain, pathPrefix: domain.pathPrefix || '' })}
                      className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

interface RedirectState {
  isLoading: boolean;
  error: string | null;
  longUrl: string | null;
}

const ShortUrlRedirector: React.FC = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const [state, setState] = useState<RedirectState>({
    isLoading: true,
    error: null,
    longUrl: null
  });

  useEffect(() => {
    const knownRoutes = ['pricing', 'profile'];
    
    if (!shortCode || knownRoutes.includes(shortCode)) {
      setState({ isLoading: false, error: null, longUrl: null });
      return;
    }

    const resolveShortUrl = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/shortlink/resolve`,
            {shortKey:shortCode},
            {headers: {
                'Content-Type': 'application/json',
              },});

        if (response.data?.success && response.data?.data?.longUrl) {
          setState({
            isLoading: false,
            error: null,
            longUrl: response.data.data.longUrl
          });
          
          window.location.href = response.data.data.longUrl;
        } else {
          setState({
            isLoading: false,
            error: 'Invalid link format. Please check the URL and try again.',
            longUrl: null
          });
        }
      } catch (error) {
        console.error('Error resolving short URL:', error);
      }
    };

    resolveShortUrl();
  }, [shortCode]);

  if (!state.isLoading && !state.error && !state.longUrl) {
    return null;
  }

  if (state.isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
        <div className="w-10 h-10 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <h2 className="text-2xl font-bold text-white mb-2">Redirecting...</h2>
        <p className="text-gray-400">Please wait while we take you to your destination.</p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="max-w-md mx-auto mt-12 p-6 bg-gray-900 rounded-lg shadow-xl text-center">
        <div className="text-4xl text-red-500 mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-red-400 mb-3">Link Not Found</h2>
        <p className="text-gray-300 mb-6">{state.error}</p>
        <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  return null;
};

export default ShortUrlRedirector;
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

interface AuthUser {
  id: string;
  email: string;
  name?: string | null;
  apiKey?: string | null;
}

interface UserDomain {
  id: string;
  domain: string;
  pathPrefix?: string | null;
  createdAt?: string;
}

interface UserProfile extends AuthUser {
  domains: UserDomain[];
  createdAt?: string;
  publicKey?: string | null;
  privateKey?: string | null;
}

interface AuthContextType {
  currentUser: AuthUser | null;
  profile: UserProfile | null;
  token: string | null;
  loading: boolean;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshProfile: (tokenOverride?: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const STORAGE_KEY = 'ziptie_auth_v1';

const handleResponse = async (response: Response) => {
  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload?.success) {
    const message = payload?.message || 'Unexpected error';
    throw new Error(message);
  }
  return payload.data;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const persistState = useCallback((user: AuthUser | null, authToken: string | null) => {
    if (user && authToken) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token: authToken }));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const refreshProfile = useCallback(async (tokenOverride?: string) => {
    const authToken = tokenOverride ?? token;

    if (!authToken) {
      setProfile(null);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      if (response.status === 401) {
        if (!tokenOverride) {
          setToken(null);
          setCurrentUser(null);
          setProfile(null);
          persistState(null, null);
        }
        return;
      }

      const data = await handleResponse(response);
      setProfile(data);
      setCurrentUser((prev) =>
        prev
          ? { ...prev, name: data.name, apiKey: data.apiKey }
          : { id: data.id, email: data.email, name: data.name, apiKey: data.apiKey }
      );
    } catch (error) {
      console.error('Failed to refresh profile', error);
    }
  }, [token, persistState]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.token && parsed?.user) {
          setToken(parsed.token);
          setCurrentUser(parsed.user);
        }
      } catch (error) {
        console.warn('Failed to parse stored auth payload', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!token) {
      setProfile(null);
      return;
    }
    refreshProfile();
  }, [token, refreshProfile]);

  const authenticate = useCallback(
    async (endpoint: string, body: Record<string, unknown>) => {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await handleResponse(response);

      const normalizedUser: AuthUser = {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        apiKey: data.privateKey ?? data.user.apiKey ?? null
      };

      setCurrentUser(normalizedUser);
      setToken(data.token);
      persistState(normalizedUser, data.token);

      await refreshProfile(data.token);
    },
    [persistState, refreshProfile]
  );

  const signup = useCallback(
    async (email: string, password: string, name?: string) => {
      await authenticate('/auth/signup', { email, password, name });
    },
    [authenticate]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      await authenticate('/auth/login', { email, password });
    },
    [authenticate]
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
    setProfile(null);
    setToken(null);
    persistState(null, null);
  }, [persistState]);

  const value = useMemo<AuthContextType>(
    () => ({
      currentUser,
      profile,
      token,
      loading,
      signup,
      login,
      logout,
      refreshProfile
    }),
    [currentUser, profile, token, loading, signup, login, logout, refreshProfile]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

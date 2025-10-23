import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatedBackground, Navigation, Footer } from './components/homePage';
import { HomePage, PricingPage, ProfilePage } from './pages';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <AnimatedBackground />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route
            path="/profile"
            element={(
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            )}
          />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

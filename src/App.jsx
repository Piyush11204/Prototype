import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages and Components
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import APKDownloader from './components/APKDownloader';

// Additional pages you might want to add
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/download" element={<APKDownloader />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Redirect examples */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/apk" element={<Navigate to="/download" replace />} />
            
            {/* 404 page - always keep this as the last route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
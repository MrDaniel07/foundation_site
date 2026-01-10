import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FounderPage from './components/FounderPage';
import ProgramsPage from './components/ProgramsPage';
import ImpactPage from './components/ImpactPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminPrograms from './components/admin/AdminPrograms';
import AdminImpact from './components/admin/AdminImpact';
import AdminNews from './components/admin/AdminNews';
import AdminTestimonials from './components/admin/AdminTestimonials';
import AdminGallery from './components/admin/AdminGallery';
import AdminSEO from './components/admin/AdminSEO';
import AdminSettings from './components/admin/AdminSettings';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/programs" element={<AdminPrograms />} />
          <Route path="/admin/impact" element={<AdminImpact />} />
          <Route path="/admin/news" element={<AdminNews />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/seo" element={<AdminSEO />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
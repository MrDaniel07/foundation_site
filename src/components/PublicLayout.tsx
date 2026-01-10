import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({
  children,
}: PublicLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/founder", label: "Founder" },
    { path: "/programs", label: "Programs" },
    { path: "/impact", label: "Impact" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white">PU</span>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl text-grey">
                  Prince Goodwill Foundation
                </h1>
                <p className="text-xs text-grey">
                  Empowering Communities, Transforming Lives
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin/login"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors ml-4"
              >
                Admin
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                Admin Login
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">Prince Goodwill Foundation</h3>
              <p className="text-gray-400 text-sm">
                Empowering communities and transforming lives
                through healthcare, education, housing support,
                and faith-based ministry.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Our Programs
                </Link>
                <Link
                  to="/impact"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Our Impact
                </Link>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  News & Updates
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Get Involved</h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/founder"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Meet Our Founder
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Contact</h3>
              <p>Email: danielanyahuru20@gmail.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Prince Goodwill
              Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
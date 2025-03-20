import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink,  Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-2">
                <Shield size={16} />
              </div>
              <span className="font-bold text-gray-800">SecureMessenger</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              End-to-end encrypted messaging for your privacy and security.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter size={20} />
              </a>
             
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/download" className="text-sm text-gray-500 hover:text-blue-600">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-gray-500 hover:text-blue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-gray-500 hover:text-blue-600">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-500 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-500 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-500 hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-500 hover:text-blue-600">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-500 hover:text-blue-600 flex items-center"
                >
                  <span>GDPR Compliance</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SecureMessenger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Download, Home, Info, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Active link style helper
  const activeStyle = "text-blue-600 font-medium";
  const inactiveStyle = "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
                
                </div>
                <span className="font-bold text-xl text-gray-800">SecureMessenger</span>
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
                end
              >
                <div className="flex items-center px-3 py-2">
                  <Home size={18} className="mr-1" />
                  <span>Home</span>
                </div>
              </NavLink>
              
              <NavLink 
                to="/download" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                <div className="flex items-center px-3 py-2">
                  <Download size={18} className="mr-1" />
                  <span>Download</span>
                </div>
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                <div className="flex items-center px-3 py-2">
                  <Info size={18} className="mr-1" />
                  <span>About</span>
                </div>
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive ? activeStyle : inactiveStyle}
              >
                <div className="flex items-center px-3 py-2">
                  <MessageSquare size={18} className="mr-1" />
                  <span>Contact</span>
                </div>
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `block pl-3 pr-4 py-2 border-l-4 ${isActive ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'}`
            }
            onClick={() => setIsMenuOpen(false)}
            end
          >
            <div className="flex items-center">
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </div>
          </NavLink>
          
          <NavLink 
            to="/download" 
            className={({isActive}) => 
              `block pl-3 pr-4 py-2 border-l-4 ${isActive ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Download size={18} className="mr-2" />
              <span>Download</span>
            </div>
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `block pl-3 pr-4 py-2 border-l-4 ${isActive ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Info size={18} className="mr-2" />
              <span>About</span>
            </div>
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `block pl-3 pr-4 py-2 border-l-4 ${isActive ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <MessageSquare size={18} className="mr-2" />
              <span>Contact</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
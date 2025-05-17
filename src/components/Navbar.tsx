
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAstrologyPage = location.pathname === '/astrology';

  return (
    <nav className={`sticky top-0 z-50 ${isAstrologyPage 
      ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md border-b border-amber-900/30 shadow-lg shadow-amber-900/10' 
      : 'bg-white/80 backdrop-blur-md shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo - Conditional rendering based on route */}
          <Link to="/" className="flex items-center space-x-2">
            {isAstrologyPage ? (
              <>
                <div className="w-8 h-8 flex items-center justify-center text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                  ॐ
                </div>
                <span className="text-xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Cosmic Insider</span>
              </>
            ) : (
              <>
                <div className="w-8 h-8 bg-gradient-calm rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-semibold text-gray-800">MindEase</span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`transition-colors ${isAstrologyPage ? 'text-amber-300/80 hover:text-amber-300' : 'text-gray-600 hover:text-primary'}`}>Home</Link>
            <Link to="/chat" className={`transition-colors ${isAstrologyPage ? 'text-amber-300/80 hover:text-amber-300' : 'text-gray-600 hover:text-primary'}`}>Chat Support</Link>
            <Link to="/music" className={`transition-colors ${isAstrologyPage ? 'text-amber-300/80 hover:text-amber-300' : 'text-gray-600 hover:text-primary'}`}>Calm Music</Link>
            <Link to="/meditation" className={`transition-colors ${isAstrologyPage ? 'text-amber-300/80 hover:text-amber-300' : 'text-gray-600 hover:text-primary'}`}>Meditation</Link>
            <Button 
              variant={isAstrologyPage ? "outline" : "outline"} 
              size="sm" 
              className={`ml-2 ${isAstrologyPage ? 'border-orange-600/30 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-950 hover:to-orange-950 text-amber-400 hover:text-amber-300' : ''}`}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isAstrologyPage ? 'text-amber-300/80 hover:text-amber-300' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${isAstrologyPage ? 'text-amber-300/80 hover:bg-gray-800 hover:text-amber-300' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${isAstrologyPage ? 'text-amber-300/80 hover:bg-gray-800 hover:text-amber-300' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Chat Support
            </Link>
            <Link 
              to="/music" 
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${isAstrologyPage ? 'text-amber-300/80 hover:bg-gray-800 hover:text-amber-300' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Calm Music
            </Link>
            <Link 
              to="/meditation" 
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${isAstrologyPage ? 'text-amber-300/80 hover:bg-gray-800 hover:text-amber-300' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Meditation
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className={`ml-2 w-full ${isAstrologyPage ? 'border-orange-600/30 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-950 hover:to-orange-950 text-amber-400 hover:text-amber-300' : ''}`}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

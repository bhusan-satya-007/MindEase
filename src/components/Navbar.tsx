import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-calm rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-semibold text-gray-800">MindEase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link to="/chat" className="text-gray-600 hover:text-primary transition-colors">Chat Support</Link>
            <Link to="/music" className="text-gray-600 hover:text-primary transition-colors">Calm Music</Link>
            <Link to="/meditation" className="text-gray-600 hover:text-primary transition-colors">Meditation</Link>
            <Button variant="outline" size="sm" className="ml-2">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Chat Support
            </Link>
            <Link 
              to="/music" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Calm Music
            </Link>
            <Link 
              to="/meditation" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Meditation
            </Link>
            <Button variant="outline" size="sm" className="ml-2 w-full">
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
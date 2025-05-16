
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and brief */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-6 bg-gradient-calm rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-semibold text-gray-800">MindEase</span>
            </div>
            <p className="text-sm text-gray-600">
              Supporting your mental wellbeing journey with compassion and understanding.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-medium mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-primary">Home</a></li>
              <li><a href="/chat" className="text-gray-600 hover:text-primary">Chat Support</a></li>
              <li><a href="/music" className="text-gray-600 hover:text-primary">Calm Music</a></li>
              <li><a href="/meditation" className="text-gray-600 hover:text-primary">Meditation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4 text-gray-800">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-primary">Mental Health Articles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Self-Care Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Crisis Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Community Forums</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} MindEase. Made with <Heart size={14} className="inline text-calm-rose" /> for better mental health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBotButton from '@/components/ChatBotButton';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { MessageCircle, Music, Moon, Compass } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-calm-light to-calm-lavender py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Find Peace in Your Mind</h1>
              <p className="text-lg mb-8 text-gray-700">
                Your journey to mental wellness starts here. Access support, calming music, 
                and guided meditations designed for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/chat">Start Chat Support</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/music">Explore Calm Music</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full text-white transform translate-y-1/2"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">How We Can Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers personalized support to help you navigate life's challenges and find inner peace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Chat Support"
              description="Connect with our AI assistant for immediate guidance and emotional support."
              icon={<MessageCircle className="w-10 h-10 text-primary" />}
              onClick={() => window.location.href = '/chat'}
            />
            <FeatureCard
              title="Calm Music"
              description="Curated playlists designed to help you relax, sleep better, and reduce anxiety."
              icon={<Music className="w-10 h-10 text-calm-rose" />}
              onClick={() => window.location.href = '/music'}
            />
            <FeatureCard
              title="Meditation"
              description="Guided meditation sessions to help clear your mind and find inner peace."
              icon={<Moon className="w-10 h-10 text-calm-lavender" />}
              onClick={() => window.location.href = '/meditation'}
            />
          </div>
        </div>
      </section>
      
      {/* Why It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why It Works</h2>
              <p className="text-gray-600 mb-6">
                Our approach combines psychological techniques, soothing audio experiences, and personalized 
                guidance to create a comprehensive mental wellness solution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-calm-rose mr-2 mt-1" />
                  <span className="text-gray-700">Science-backed techniques for managing stress and anxiety</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-calm-rose mr-2 mt-1" />
                  <span className="text-gray-700">Personalized recommendations based on your specific needs</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-calm-rose mr-2 mt-1" />
                  <span className="text-gray-700">24/7 access to support whenever you need it most</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-calm-rose mr-2 mt-1" />
                  <span className="text-gray-700">Progress tracking to celebrate your mental wellness journey</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-calm-light rounded-lg"></div>
              <div className="aspect-square bg-calm-sage rounded-lg mt-8"></div>
              <div className="aspect-square bg-calm-rose rounded-lg mt-4"></div>
              <div className="aspect-square bg-calm-lavender rounded-lg"></div>
            </div>
          </div>
          
          {/* New Cosmic Insider Button */}
          <div className="mt-16 text-center">
            <Link to="/astrology">
              <button className="relative px-8 py-4 overflow-hidden rounded-lg group bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-all duration-300 hover:shadow-amber-900/20">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-800/20 to-orange-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative z-10">
                  <span className="font-serif text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 font-semibold" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "0.06em" }}>
                    Cosmic Insider
                  </span>
                  <span className="block mt-1 text-xs text-amber-200/80">Discover your celestial patterns</span>
                </div>
                <div className="absolute inset-0 -z-10 opacity-20">
                  <div className="absolute top-1/4 left-1/4 text-2xl text-amber-600 opacity-30">॰</div>
                  <div className="absolute bottom-1/4 right-1/4 text-2xl text-amber-600 opacity-30">⁎</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-amber-600 opacity-30">☽</div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">User Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about how MindEase has helped others on their mental wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The chat support feature helped me through a really tough time. Having someone to talk to anytime was exactly what I needed."
              author="Sarah K."
              role="Anxiety Management"
            />
            <TestimonialCard
              quote="I've struggled with insomnia for years. The sleep music collections have been incredible for helping me finally get some rest."
              author="Michael T."
              role="Better Sleep"
              className="bg-calm-light/20"
            />
            <TestimonialCard
              quote="The guided meditations are perfect for a beginner like me. I'm learning to manage my stress one breath at a time."
              author="Jamie L."
              role="Stress Reduction"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of others who have found peace of mind with our supportive tools and resources.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/chat">Get Started Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default Index;

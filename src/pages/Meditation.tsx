
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBotButton from '@/components/ChatBotButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Clock, Heart, Moon, Smile, Headphones, Frown } from 'lucide-react';

interface MeditationSession {
  id: number;
  title: string;
  category: string;
  duration: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
}

const meditationSessions: MeditationSession[] = [
  {
    id: 1,
    title: "Calm Your Anxiety",
    category: "Stress & Anxiety",
    duration: "10 min",
    description: "A gentle meditation to help calm anxious thoughts and find your center.",
    icon: <Heart className="h-8 w-8 text-white" />,
    bgColor: "bg-calm-rose"
  },
  {
    id: 2,
    title: "Peaceful Sleep",
    category: "Sleep",
    duration: "20 min",
    description: "Drift into a restful sleep with this soothing bedtime meditation.",
    icon: <Moon className="h-8 w-8 text-white" />,
    bgColor: "bg-calm-dark"
  },
  {
    id: 3,
    title: "Morning Clarity",
    category: "Focus",
    duration: "5 min",
    description: "Start your day with intention and clarity with this short meditation.",
    icon: <Smile className="h-8 w-8 text-white" />,
    bgColor: "bg-calm"
  },
  {
    id: 4,
    title: "Healing Depression",
    category: "Mood",
    duration: "15 min",
    description: "A compassionate meditation for when you're feeling down or depressed.",
    icon: <Headphones className="h-8 w-8 text-white" />,
    bgColor: "bg-calm-lavender"
  },
  {
    id: 5,
    title: "Letting Go of Anger",
    category: "Emotional Healing",
    duration: "12 min",
    description: "Release frustration and anger through guided breathing and visualization.",
    icon: <Frown className="h-8 w-8 text-white" />,
    bgColor: "bg-calm-sage"
  },
  {
    id: 6,
    title: "Body Scan Relaxation",
    category: "Relaxation",
    duration: "18 min",
    description: "A head-to-toe body scan to release tension and promote deep relaxation.",
    icon: <Heart className="h-8 w-8 text-white" />,
    bgColor: "bg-calm-light"
  }
];

const MeditationPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentSession, setCurrentSession] = useState<MeditationSession | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const categories = Array.from(new Set(meditationSessions.map(session => session.category)));
  
  const filteredSessions = activeCategory 
    ? meditationSessions.filter(session => session.category === activeCategory)
    : meditationSessions;
    
  const startMeditation = (session: MeditationSession) => {
    setCurrentSession(session);
    setIsPlaying(true);
    // In a real application, we'd start playing the actual audio file here
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real application, we'd pause/play the actual audio file here
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Guided Meditation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find peace and balance with our collection of guided meditations designed to help with 
            stress, anxiety, sleep, and more.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button 
            variant={activeCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Meditation sessions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map(session => (
            <Card 
              key={session.id} 
              className="overflow-hidden transition-all hover:shadow-md cursor-pointer"
              onClick={() => startMeditation(session)}
            >
              <div className={`relative h-32 ${session.bgColor} flex items-center justify-center`}>
                <div className="absolute top-3 right-3 flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Clock className="h-3 w-3 mr-1" />
                  <span className="text-xs">{session.duration}</span>
                </div>
                {session.icon}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{session.title}</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{session.category}</span>
                <p className="text-sm text-gray-600 mt-3">{session.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Meditation tips section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Meditation Tips for Beginners</h2>
            <p className="text-gray-600">Make the most of your meditation practice with these simple guidelines</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-gray-800">Find a Quiet Space</h3>
              <p className="text-sm text-gray-600">Choose a peaceful environment where you won't be disturbed.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-gray-800">Start Small</h3>
              <p className="text-sm text-gray-600">Begin with just 5 minutes and gradually increase your time.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-gray-800">Get Comfortable</h3>
              <p className="text-sm text-gray-600">Sit or lie down in a position that feels natural and comfortable.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2 text-gray-800">Be Patient</h3>
              <p className="text-sm text-gray-600">Meditation is a skill that improves with regular practice.</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Meditation player */}
      {currentSession && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 z-30">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${currentSession.bgColor} rounded flex items-center justify-center flex-shrink-0`}>
                {currentSession.icon}
              </div>
              <div>
                <h4 className="font-medium">{currentSession.title}</h4>
                <p className="text-sm text-gray-500">{currentSession.category}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button size="sm" onClick={togglePlayPause}>
                {isPlaying ? <Pause size={16} className="mr-1" /> : <Play size={16} className="mr-1" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Clock size={14} className="text-gray-500" />
              <span className="text-sm text-gray-500">{currentSession.duration}</span>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default MeditationPage;

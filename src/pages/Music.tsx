
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBotButton from '@/components/ChatBotButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  category: string;
  duration: string;
  cover: string; // We'd use actual images in a real app
  color: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Deep Sleep Journey",
    category: "Sleep",
    duration: "45:00",
    cover: "",
    color: "bg-calm-dark"
  },
  {
    id: 2,
    title: "Anxiety Relief",
    category: "Stress & Anxiety",
    duration: "20:15",
    cover: "",
    color: "bg-calm-lavender"
  },
  {
    id: 3,
    title: "Morning Meditation",
    category: "Focus",
    duration: "15:30",
    cover: "",
    color: "bg-calm-sage"
  },
  {
    id: 4,
    title: "Gentle Rain Sounds",
    category: "Nature",
    duration: "60:00",
    cover: "",
    color: "bg-calm-light"
  },
  {
    id: 5,
    title: "Relaxing Piano",
    category: "Relaxation",
    duration: "32:45",
    cover: "",
    color: "bg-calm-rose"
  },
  {
    id: 6,
    title: "Ocean Waves",
    category: "Nature",
    duration: "50:20",
    cover: "",
    color: "bg-calm"
  },
];

const MusicPage = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(tracks.map(track => track.category)));
  
  const filteredTracks = activeCategory 
    ? tracks.filter(track => track.category === activeCategory)
    : tracks;
    
  const handlePlay = (track: Track) => {
    setCurrentTrack(track);
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
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Calm Music</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover soothing sounds to help you relax, focus, or sleep better. Our curated tracks are designed 
            to support your mental wellbeing.
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
        
        {/* Music tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map(track => (
            <Card 
              key={track.id} 
              className="overflow-hidden transition-all hover:shadow-md cursor-pointer"
              onClick={() => handlePlay(track)}
            >
              <div className={`h-40 ${track.color} flex items-center justify-center`}>
                <Music size={64} className="text-white/80" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{track.category}</span>
                  <span className="text-sm text-gray-500">{track.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      
      {/* Music player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 z-30">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${currentTrack.color} rounded flex items-center justify-center flex-shrink-0`}>
                <Music size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium">{currentTrack.title}</h4>
                <p className="text-sm text-gray-500">{currentTrack.category}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <SkipBack size={20} />
              </Button>
              <Button size="icon" onClick={togglePlayPause}>
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward size={20} />
              </Button>
            </div>
            
            <div className="hidden md:block text-right">
              <span className="text-sm text-gray-500">{currentTrack.duration}</span>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default MusicPage;

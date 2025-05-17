
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CosmicChat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'bot',
      content: 'Greetings, seeker of cosmic wisdom. I am your celestial guide. How may I illuminate your path today?'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = { role: 'user', content: message };
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    // Simulate API response delay
    setTimeout(() => {
      // Sample responses related to astrology
      const responses = [
        "The celestial alignment suggests a period of introspection. Look within for answers as Mercury enters retrograde.",
        "Your cosmic energy is strong. The stars indicate a favorable time for new beginnings and creative pursuits.",
        "The influence of Venus in your chart reveals deep connections forming in your personal relationships.",
        "The cosmic patterns show obstacles transforming into opportunities. Stay patient as Saturn's influence passes.",
        "Your astrological chart reveals hidden talents waiting to be discovered. Trust your intuition during this lunar phase."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatHistory(prev => [...prev, { role: 'bot', content: randomResponse }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
            Cosmic Insights Chat
          </h1>
          
          <p className="text-center text-amber-200/80 mb-8 max-w-2xl mx-auto">
            Consult with our celestial AI guide to uncover the cosmic influences in your life. 
            Explore how planetary alignments and celestial energies relate to your personal journey.
          </p>

          <Card className="bg-gray-900/90 border-amber-900/30 shadow-lg shadow-amber-900/10 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="absolute top-1/4 left-1/4 text-[200px] font-bold opacity-10 text-amber-500">
                ॐ
              </div>
              <div className="absolute bottom-1/4 right-1/4 text-[180px] font-bold opacity-10 text-amber-500">
                अ
              </div>
            </div>
            
            <CardContent className="p-0">
              <div className="h-[60vh] overflow-y-auto p-6 space-y-4">
                {chatHistory.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user' 
                          ? 'bg-amber-900/70 text-amber-100' 
                          : 'bg-gray-800/80 text-amber-200 border border-amber-900/30'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800/80 text-amber-200 rounded-2xl px-4 py-3 border border-amber-900/30 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500/60 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500/60 animate-pulse delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500/60 animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              placeholder="Ask about your cosmic destiny..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-800/50 border-amber-900/30 text-amber-200 placeholder:text-amber-200/50 focus-visible:ring-amber-500"
            />
            <Button 
              type="submit" 
              disabled={loading || !message.trim()}
              className="bg-gradient-to-r from-amber-900/70 to-orange-900/70 hover:from-amber-800 hover:to-orange-800 text-amber-300"
            >
              Send
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-amber-200/60">
            <p>For personalized cosmic insights, consider generating your full birth chart.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CosmicChat;

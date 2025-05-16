
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBotButton from '@/components/ChatBotButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send, User } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot', text: string }[]>([
    { 
      type: 'bot', 
      text: 'Hello! I\'m your mental wellness assistant. I\'m here to listen and provide support for whatever you\'re going through. How are you feeling today?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response with delay
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [
        ...prev, 
        { 
          type: 'bot', 
          text: getBotResponse(message) 
        }
      ]);
    }, 1500);
    
    setMessage('');
  };

  // Simple response logic (in a real app, this would be connected to a more sophisticated AI)
  const getBotResponse = (msg: string): string => {
    const lowercaseMsg = msg.toLowerCase();
    
    if (lowercaseMsg.includes('sad') || lowercaseMsg.includes('depress')) {
      return "I'm sorry to hear you're feeling down. It's important to acknowledge these feelings. Would you like to try a meditation focusing on self-compassion, or perhaps some uplifting music to help shift your mood?";
    }
    else if (lowercaseMsg.includes('anxious') || lowercaseMsg.includes('worry') || lowercaseMsg.includes('stress')) {
      return "Anxiety can be really challenging. Let's work through this together. Many people find deep breathing helpful in the moment. Would you like me to guide you through a quick breathing exercise, or would you prefer some calming music?";
    }
    else if (lowercaseMsg.includes('sleep') || lowercaseMsg.includes('tired') || lowercaseMsg.includes('insomnia')) {
      return "Sleep troubles can be frustrating. Our sleep music collection includes gentle melodies designed to help you drift off. Would you like me to recommend a specific track? I can also share some bedtime routine tips that many find helpful.";
    }
    else if (lowercaseMsg.includes('angry') || lowercaseMsg.includes('frustrat')) {
      return "It sounds like you're dealing with some frustration. That's completely valid. Sometimes a calming meditation or even some physical movement can help process these emotions. Would you like some suggestions?";
    }
    else if (lowercaseMsg.includes('thank')) {
      return "You're very welcome. I'm here anytime you need to talk or need support. Is there anything else on your mind today?";
    }
    else if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi ') || lowercaseMsg === 'hi') {
      return "Hello! It's good to connect with you. How are you feeling today? I'm here to listen and support you.";
    }
    else {
      return "Thank you for sharing that with me. Would you like to explore some coping strategies or perhaps try a guided meditation session? I'm here to help in whatever way feels right for you.";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Chat Support</h1>
            <p className="text-gray-600">
              Talk to our mental wellness assistant about what you're going through.
              We're here to listen and provide support.
            </p>
          </div>
          
          <Card className="bg-white shadow-md rounded-xl overflow-hidden border">
            {/* Chat header */}
            <div className="bg-primary px-6 py-4 text-white">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Mental Wellness Assistant</h3>
                  <p className="text-xs opacity-75">Always here for you</p>
                </div>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="p-4 h-[500px] overflow-y-auto flex flex-col space-y-4 bg-gray-50">
              {chatHistory.map((chat, index) => (
                <div 
                  key={index} 
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={chat.type === 'user' ? 'user-bubble' : 'bot-bubble'}>
                    {chat.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bot-bubble flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Chat input */}
            <div className="border-t p-4 bg-white">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="rounded-l-none flex items-center gap-1">
                  <span>Send</span> <Send size={16} />
                </Button>
              </form>
            </div>
          </Card>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Note: This is an AI assistant designed to provide general support. If you're experiencing a crisis or
              emergency, please call your local emergency services or a mental health crisis hotline.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default Chat;

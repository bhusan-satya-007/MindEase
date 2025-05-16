
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot', text: string }[]>([
    { type: 'bot', text: 'Hi there! I\'m your personal mental health assistant. How can I help you today?' }
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    
    // Simulate bot response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          type: 'bot', 
          text: getSimpleResponse(message) 
        }
      ]);
    }, 1000);
    
    setMessage('');
  };

  const getSimpleResponse = (msg: string): string => {
    const lowercaseMsg = msg.toLowerCase();
    if (lowercaseMsg.includes('sad') || lowercaseMsg.includes('depress')) {
      return "I'm sorry to hear you're feeling this way. Have you tried our meditation sessions? They might help improve your mood.";
    } else if (lowercaseMsg.includes('anxious') || lowercaseMsg.includes('stress') || lowercaseMsg.includes('worry')) {
      return "Anxiety can be challenging. Our calm music section has tracks specifically designed to reduce stress and anxiety.";
    } else if (lowercaseMsg.includes('sleep') || lowercaseMsg.includes('insomnia')) {
      return "Trouble sleeping is common. Check out our sleep music collection - the gentle sounds can help you drift off.";
    } else if (lowercaseMsg.includes('thank')) {
      return "You're welcome! I'm here to help whenever you need me.";
    } else {
      return "I appreciate you sharing that. Would you like to explore our guided meditation sessions or calming music tracks?";
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "Chat Assistant Activated",
        description: "How can I help you today?",
      });
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg flex items-center justify-center z-50 ${
          isOpen ? 'bg-gray-600' : 'bg-primary hover:bg-primary/90'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 z-50 flex flex-col shadow-xl overflow-hidden rounded-xl border border-gray-200">
          {/* Chat header */}
          <div className="bg-primary px-4 py-3 text-white">
            <h3 className="font-medium">Mental Health Assistant</h3>
            <p className="text-xs opacity-75">Here to listen and support you</p>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-3">
            {chatHistory.map((chat, index) => (
              <div key={index} className={chat.type === 'user' ? 'user-bubble' : 'bot-bubble'}>
                {chat.text}
              </div>
            ))}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t p-2 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-l-md border-r-0 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" className="rounded-l-none">Send</Button>
          </form>
        </Card>
      )}
    </>
  );
};

export default ChatBotButton;

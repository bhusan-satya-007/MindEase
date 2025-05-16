
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ZodiacSignCards from '@/components/ZodiacSignCards';
import BirthDataForm from '@/components/BirthDataForm';
import { BookOpen } from 'lucide-react';

const Astrology = () => {
  const [activeTab, setActiveTab] = useState('birth-chart');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-y-0 left-1/4 text-[200px] font-bold opacity-5 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              ॐ
            </div>
            <div className="absolute inset-y-0 right-1/4 text-[150px] font-bold opacity-5 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              अ
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[250px] font-bold opacity-5 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              श
            </div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              Discover Your Cosmic Blueprint
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore how celestial patterns influence your personality, emotions, and life path
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
        </section>

        {/* Birth Chart Section */}
        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="birth-chart" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-gray-700/50 border border-gray-700">
              <TabsTrigger 
                value="birth-chart" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-900/40 data-[state=active]:to-orange-900/40 data-[state=active]:text-amber-400"
              >
                Your Cosmic Profile
              </TabsTrigger>
              <TabsTrigger 
                value="zodiac-signs"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-900/40 data-[state=active]:to-orange-900/40 data-[state=active]:text-amber-400"
              >
                Celestial Signs
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="birth-chart" className="mt-6">
              <Card className="bg-gray-800/70 border-gray-700 text-white">
                <CardHeader className="border-b border-gray-700">
                  <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                    Enter Your Birth Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BirthDataForm />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="zodiac-signs" className="mt-6">
              <ZodiacSignCards />
            </TabsContent>
          </Tabs>
        </section>

        {/* Integration with Mental Health */}
        <section className="py-12 bg-gray-900/80 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 text-center mb-8">
              Cosmic Insights & Mental Wellness
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-300 mb-6">
                Discover how understanding your cosmic profile can complement your mental wellness journey. 
                These insights provide another lens through which to explore your emotions, behaviors, and life patterns.
              </p>
              <Button 
                variant="outline" 
                className="border border-orange-600/30 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-950 hover:to-orange-950 text-amber-400 hover:text-amber-300"
                onClick={() => window.location.href = '/chat'}
              >
                <BookOpen className="mr-2" /> Discuss with Our Assistant
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Astrology;

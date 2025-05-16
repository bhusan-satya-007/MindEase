
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

const Astrology = () => {
  const [activeTab, setActiveTab] = useState('birth-chart');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-calm py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Discover Your Cosmic Blueprint
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore how celestial patterns influence your personality, emotions, and life path
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Birth Chart Section */}
        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="birth-chart" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="birth-chart">Your Cosmic Profile</TabsTrigger>
              <TabsTrigger value="zodiac-signs">Celestial Signs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="birth-chart" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enter Your Birth Details</CardTitle>
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
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
              Cosmic Insights & Mental Wellness
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-6">
                Discover how understanding your cosmic profile can complement your mental wellness journey. 
                These insights provide another lens through which to explore your emotions, behaviors, and life patterns.
              </p>
              <Button 
                variant="outline" 
                className="bg-gradient-calm hover:opacity-90 transition-opacity"
                onClick={() => window.location.href = '/chat'}
              >
                Discuss with Our Assistant
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

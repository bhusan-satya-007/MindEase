import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ZodiacSign = {
  name: string;
  date: string;
  element: string;
  traits: string[];
  description: string;
};

const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    date: "March 21 - April 19",
    element: "Fire",
    traits: ["Bold", "Independent", "Courageous"],
    description: "Aries is the first sign of the zodiac, and that's fitting because these rams love to be first in everything. They're bold, ambitious, and competitive, always racing to get to the top of the mountain."
  },
  {
    name: "Taurus",
    date: "April 20 - May 20",
    element: "Earth",
    traits: ["Reliable", "Patient", "Practical"],
    description: "Taurus is an earth sign represented by the bull, with a reputation for being dependable, practical, and having a love for the finer things in life. They appreciate beautiful things and value stability."
  },
  {
    name: "Gemini",
    date: "May 21 - June 20",
    element: "Air",
    traits: ["Curious", "Adaptable", "Expressive"],
    description: "Gemini is represented by the celestial twins, and thus these air signs are interested in so many pursuits that they've earned a reputation for being wishy-washy and two-faced."
  },
  {
    name: "Cancer",
    date: "June 21 - July 22",
    element: "Water",
    traits: ["Intuitive", "Emotional", "Protective"],
    description: "Cancer is a cardinal water sign represented by the crab. This sign is known for its emotional depth, nurturing nature, and ability to exist in both emotional and material realms."
  },
  {
    name: "Leo",
    date: "July 23 - August 22",
    element: "Fire",
    traits: ["Dramatic", "Creative", "Generous"],
    description: "Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: vivacious, theatrical, and passionate."
  },
  {
    name: "Virgo",
    date: "August 23 - September 22",
    element: "Earth",
    traits: ["Analytical", "Practical", "Perfectionist"],
    description: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture. This earth sign is known for being methodical, hardworking, and detail-oriented."
  },
  {
    name: "Libra",
    date: "September 23 - October 22",
    element: "Air",
    traits: ["Diplomatic", "Fair-minded", "Social"],
    description: "Libra is an air sign represented by the scales, which reflects this sign's fixation on balance and harmony. They're obsessed with symmetry and strive to create equilibrium in all areas of life."
  },
  {
    name: "Scorpio",
    date: "October 23 - November 21",
    element: "Water",
    traits: ["Passionate", "Determined", "Mysterious"],
    description: "Scorpio is a water sign that derives its strength from the psychic, emotional realm. They have powerful personalities and exude mystery and intensity."
  },
  {
    name: "Sagittarius",
    date: "November 22 - December 21",
    element: "Fire",
    traits: ["Adventurous", "Optimistic", "Honest"],
    description: "Sagittarius, the ninth sign of the zodiac, is represented by the archer. These adventure-seeking fire signs are determined to live life to the fullest with their philosophical outlook."
  },
  {
    name: "Capricorn",
    date: "December 22 - January 19",
    element: "Earth",
    traits: ["Responsible", "Disciplined", "Self-control"],
    description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. They possess an inner state of independence."
  },
  {
    name: "Aquarius",
    date: "January 20 - February 18",
    element: "Air",
    traits: ["Progressive", "Original", "Independent"],
    description: "Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. These revolutionary air signs are visionaries and intellectual thinkers."
  },
  {
    name: "Pisces",
    date: "February 19 - March 20",
    element: "Water",
    traits: ["Intuitive", "Compassionate", "Artistic"],
    description: "Pisces is a water sign represented by two fish swimming in opposite directions, symbolizing the constant division of attention between fantasy and reality. They're deep, creative, and highly intuitive."
  }
];

const ZodiacSignCards = () => {
  const [activeSign, setActiveSign] = useState("Aries");

  const activeSignData = zodiacSigns.find(sign => sign.name === activeSign);

  return (
    <div className="space-y-6">
      <Tabs defaultValue={activeSign} onValueChange={setActiveSign}>
        <TabsList className="grid grid-cols-6 gap-2 h-auto min-h-[100px] bg-gray-800/60 p-4 border border-amber-900/30">
          {zodiacSigns.map((sign) => (
            <TabsTrigger 
              key={sign.name} 
              value={sign.name} 
              className="px-3 py-2 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] data-[state=active]:text-transparent data-[state=active]:bg-clip-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400 data-[state=active]:to-orange-500"
            >
              {sign.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {zodiacSigns.map((sign) => (
          <TabsContent key={sign.name} value={sign.name}>
            <Card className="overflow-hidden border-t-4" style={{ borderTopColor: getElementColor(sign.element) }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-center md:text-left md:w-1/3">
                    <h3 className="text-2xl font-bold mb-2">{sign.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{sign.date}</p>
                    <div className="mb-3">
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ backgroundColor: getElementColor(sign.element, true), color: '#fff' }}
                      >
                        {sign.element} Element
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {sign.traits.map((trait) => (
                        <span 
                          key={trait} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 leading-relaxed">{sign.description}</p>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Today's Horoscope</h4>
                      <p className="text-gray-600 italic">
                        {getRandomHoroscope(sign.name)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

// Helper functions
function getElementColor(element: string, darker = false): string {
  const colors: Record<string, [string, string]> = {
    "Fire": ["#ff7b54", "#e74c3c"],
    "Earth": ["#78c091", "#27ae60"], 
    "Air": ["#77b5fe", "#3498db"],
    "Water": ["#70b7c6", "#2980b9"]
  };
  
  return colors[element][darker ? 1 : 0];
}

function getRandomHoroscope(sign: string): string {
  const horoscopes = [
    `Today is an excellent day for ${sign}. Your natural talents will shine, especially in creative endeavors. Take time to connect with loved ones.`,
    `${sign} should focus on self-care today. A moment of reflection could lead to an important breakthrough in a personal matter.`,
    `Communication is highlighted for ${sign} today. An unexpected conversation might open new doors. Stay open to different perspectives.`,
    `${sign} may feel particularly intuitive today. Trust your instincts when making decisions, especially regarding relationships.`,
    `A good day for ${sign} to tackle unfinished projects. Your energy is high, and your focus is sharp. Don't be afraid to take the lead.`
  ];
  
  return horoscopes[Math.floor(Math.random() * horoscopes.length)];
}

export default ZodiacSignCards;
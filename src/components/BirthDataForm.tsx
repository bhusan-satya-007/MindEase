
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const BirthDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Chart Generated",
        description: `Birth chart for ${formData.name} has been created.`,
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthDate">Date of Birth</Label>
        <Input
          id="birthDate"
          name="birthDate"
          type="date"
          required
          value={formData.birthDate}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthTime">Time of Birth (if known)</Label>
        <Input
          id="birthTime"
          name="birthTime"
          type="time"
          placeholder="e.g. 14:30"
          value={formData.birthTime}
          onChange={handleChange}
        />
        <p className="text-xs text-muted-foreground">More accurate results if you know your birth time</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthPlace">Place of Birth</Label>
        <Input
          id="birthPlace"
          name="birthPlace"
          required
          placeholder="City, Country"
          value={formData.birthPlace}
          onChange={handleChange}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-calm hover:opacity-90 transition-opacity"
        disabled={loading}
      >
        {loading ? "Generating Chart..." : "Generate Your Birth Chart"}
      </Button>
    </form>
  );
};

export default BirthDataForm;

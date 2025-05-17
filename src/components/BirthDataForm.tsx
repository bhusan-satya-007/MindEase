import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const BirthDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeDialogOpen, setTimeDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setFormData(prev => ({ 
        ...prev, 
        birthDate: format(selectedDate, 'dd/MM/yyyy') 
      }));
    }
  };

  const handleTimeSelect = (hours: string, minutes: string) => {
    const timeString = `${hours}:${minutes}:00`;
    setFormData(prev => ({ ...prev, birthTime: timeString }));
    setTimeDialogOpen(false);
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

  // Time picker component
  const TimePicker = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
    
    const [selectedHour, setSelectedHour] = useState('00');
    const [selectedMinute, setSelectedMinute] = useState('00');

    return (
      <div className="p-4 bg-gray-900 text-amber-200 rounded-md">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <p className="text-center mb-2 text-amber-400">Hour</p>
              <div className="h-48 overflow-y-auto scrollbar-none bg-gray-800/50 rounded-md border border-amber-900/30">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className={`py-2 px-4 cursor-pointer text-center hover:bg-amber-900/30 transition-colors ${
                      selectedHour === hour ? 'bg-amber-900/50 text-amber-300' : ''
                    }`}
                    onClick={() => setSelectedHour(hour)}
                  >
                    {hour}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <p className="text-center mb-2 text-amber-400">Minute</p>
              <div className="h-48 overflow-y-auto scrollbar-none bg-gray-800/50 rounded-md border border-amber-900/30">
                {minutes.map((minute) => (
                  <div
                    key={minute}
                    className={`py-2 px-4 cursor-pointer text-center hover:bg-amber-900/30 transition-colors ${
                      selectedMinute === minute ? 'bg-amber-900/50 text-amber-300' : ''
                    }`}
                    onClick={() => setSelectedMinute(minute)}
                  >
                    {minute}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-xl font-serif text-amber-300">
            {selectedHour}:{selectedMinute}:00
          </div>
          <Button 
            onClick={() => handleTimeSelect(selectedHour, selectedMinute)}
            className="bg-gradient-to-r from-amber-900/70 to-orange-900/70 hover:from-amber-800 hover:to-orange-800 text-amber-300"
          >
            Select Time
          </Button>
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-amber-300">Full Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-800/50 border-amber-900/30 text-amber-200 placeholder:text-amber-200/50 focus-visible:ring-amber-500"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthDate" className="text-amber-300">Date of Birth</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Input
              id="birthDate"
              name="birthDate"
              required
              placeholder="dd/mm/yyyy"
              value={formData.birthDate}
              onChange={handleChange}
              className="bg-gray-800/50 border-amber-900/30 text-amber-200 placeholder:text-amber-200/50 focus-visible:ring-amber-500 cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-amber-900/50 bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-amber-900/20">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              initialFocus
              className="bg-transparent text-amber-200"
              classNames={{
                day_selected: "bg-amber-900/70 text-amber-200 hover:bg-amber-800 hover:text-amber-200",
                day_today: "bg-gray-800 text-amber-300",
                day: "hover:bg-amber-900/40 text-amber-200",
                day_disabled: "text-gray-500",
                nav_button: "hover:bg-amber-900/30 border-amber-900/30 text-amber-300",
                table: "border-amber-900/20",
                head_cell: "text-amber-400/70",
                caption: "text-amber-300",
                caption_label: "text-amber-300 text-lg font-serif",
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthTime" className="text-amber-300">Time of Birth (if known)</Label>
        <Input
          id="birthTime"
          name="birthTime"
          placeholder="hh:mm:ss"
          value={formData.birthTime}
          onChange={handleChange}
          onFocus={() => setTimeDialogOpen(true)}
          className="bg-gray-800/50 border-amber-900/30 text-amber-200 placeholder:text-amber-200/50 focus-visible:ring-amber-500 cursor-pointer"
        />
        <p className="text-xs text-amber-300/70">More accurate results if you know your birth time</p>

        <Dialog open={timeDialogOpen} onOpenChange={setTimeDialogOpen}>
          <DialogContent className="sm:max-w-[425px] bg-gray-900/95 backdrop-blur-lg border-amber-900/30 text-amber-200 shadow-lg shadow-amber-900/20">
            <DialogHeader>
              <DialogTitle className="text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 font-serif text-xl">
                Select Your Time of Birth
              </DialogTitle>
            </DialogHeader>
            <TimePicker />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthPlace" className="text-amber-300">Place of Birth</Label>
        <Input
          id="birthPlace"
          name="birthPlace"
          required
          placeholder="City, Country"
          value={formData.birthPlace}
          onChange={handleChange}
          className="bg-gray-800/50 border-amber-900/30 text-amber-200 placeholder:text-amber-200/50 focus-visible:ring-amber-500"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-amber-900/70 to-orange-900/70 hover:from-amber-800 hover:to-orange-800 text-amber-300 font-serif mt-6"
        disabled={loading}
      >
        {loading ? "Generating Chart..." : "Generate Your Birth Chart"}
      </Button>
    </form>
  );
};

export default BirthDataForm;


import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, className }: TestimonialCardProps) => {
  return (
    <Card className={cn("overflow-hidden h-full flex flex-col", className)}>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="text-4xl text-calm-lavender font-serif mb-4">"</div>
        <p className="text-gray-700 mb-6 flex-grow italic">{quote}</p>
        <div className="mt-auto">
          <p className="font-semibold text-gray-800">{author}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface PaymentTriggerProps {
  onClose: () => void;
}

const PaymentTrigger: React.FC<PaymentTriggerProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscription = () => {
    toast({
      title: "Redirecting to subscription payment",
      description: "You'll be redirected to our subscription page.",
    });
    navigate('/payment');
    onClose();
  };

  const handlePayPerQuery = () => {
    toast({
      title: "Redirecting to pay-per-query",
      description: "You'll be redirected to our pay-per-query page.",
    });
    navigate('/payment');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center font-serif">Payment Required</CardTitle>
          <CardDescription className="text-center">
            You've reached your free query limit for this month
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-lg bg-amber-50">
            <h3 className="font-medium text-lg mb-2">Monthly Subscription</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get unlimited queries for just $9.99/month. Best value for regular users.
            </p>
            <Button onClick={handleSubscription} className="w-full">
              Subscribe Now
            </Button>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-lg mb-2">Pay Per Query</h3>
            <p className="text-sm text-gray-600 mb-4">
              Purchase query packs:
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>12 queries for $1.99</li>
              <li>20 queries for $2.99</li>
              <li>50 queries for $6.99</li>
            </ul>
            <Button onClick={handlePayPerQuery} variant="outline" className="w-full">
              Buy Query Pack
            </Button>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>Your free queries will reset at the beginning of next month</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentTrigger;

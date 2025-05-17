
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CreditCard, Phone, Google, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });
  const [paymentType, setPaymentType] = useState<'subscription' | 'oneTime'>('subscription');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: "Your payment is being processed. Please wait...",
    });
    
    // Simulating payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: paymentType === 'subscription' 
          ? "Your subscription has been activated!" 
          : "Your one-time payment was successful!",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-semibold text-center mb-8 text-primary">
            Payment Options
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-serif">Choose Payment Method</CardTitle>
                <CardDescription className="text-center">
                  Secure and easy payment processing
                </CardDescription>
                
                <div className="flex justify-center mt-4 space-x-4">
                  <Button 
                    variant={paymentType === 'subscription' ? 'default' : 'outline'}
                    onClick={() => setPaymentType('subscription')}
                    className="w-40"
                  >
                    Monthly Subscription
                  </Button>
                  <Button 
                    variant={paymentType === 'oneTime' ? 'default' : 'outline'}
                    onClick={() => setPaymentType('oneTime')}
                    className="w-40"
                  >
                    Pay Per Query
                  </Button>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="font-medium">
                    {paymentType === 'subscription' 
                      ? '$9.99 per month - Unlimited queries' 
                      : '$1.99 per query - Pay as you go'}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="card" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="card" className="flex items-center justify-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Card
                    </TabsTrigger>
                    <TabsTrigger value="upi" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      UPI
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber" 
                          name="cardNumber" 
                          placeholder="1234 5678 9012 3456"
                          required
                          value={formData.cardNumber}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input 
                          id="cardName" 
                          name="cardName" 
                          placeholder="John Doe"
                          required
                          value={formData.cardName}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input 
                            id="expiryDate" 
                            name="expiryDate" 
                            placeholder="MM/YY"
                            required
                            value={formData.expiryDate}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input 
                            id="cvv" 
                            name="cvv" 
                            placeholder="123"
                            required
                            value={formData.cvv}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full mt-6">
                        {paymentType === 'subscription' 
                          ? 'Subscribe Now' 
                          : 'Pay Now'}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="upi">
                    <div className="space-y-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <UpiOption name="Google Pay" icon={<Google className="h-6 w-6" />} />
                        <UpiOption name="PhonePe" icon="PhonePe" />
                        <UpiOption name="Paytm" icon="Paytm" />
                        <UpiOption name="CRED UPI" icon="CRED" />
                        <UpiOption name="Amazon Pay" icon={<ShoppingCart className="h-6 w-6" />} />
                        <UpiOption name="Other UPI" icon={<Phone className="h-6 w-6" />} />
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="upiId">UPI ID</Label>
                          <Input 
                            id="upiId" 
                            name="upiId" 
                            placeholder="yourname@upi"
                            required
                            value={formData.upiId}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <Button type="submit" className="w-full">
                          {paymentType === 'subscription' 
                            ? 'Subscribe Now' 
                            : 'Pay Now'}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Your payment information is secure and encrypted.</p>
              <p className="mt-2">By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const UpiOption = ({ name, icon }: { name: string, icon: React.ReactNode | string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        {typeof icon === 'string' ? (
          <span className="font-bold text-primary">{icon.substring(0, 2)}</span>
        ) : (
          icon
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default PaymentPage;

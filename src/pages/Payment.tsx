
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CardPaymentSection from '@/components/payment/CardPaymentSection';
import UpiPaymentSection from '@/components/payment/UpiPaymentSection';
import PaymentOptions from '@/components/payment/PaymentOptions';

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
                
                <PaymentOptions 
                  paymentType={paymentType} 
                  setPaymentType={setPaymentType} 
                />
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
                    <CardPaymentSection 
                      formData={formData}
                      paymentType={paymentType}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                  </TabsContent>
                  
                  <TabsContent value="upi">
                    <UpiPaymentSection 
                      upiId={formData.upiId}
                      paymentType={paymentType}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
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

export default PaymentPage;

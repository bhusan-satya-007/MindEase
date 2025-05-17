
import React from "react";
import { Button } from "@/components/ui/button";

interface PaymentOptionsProps {
  paymentType: 'subscription' | 'oneTime';
  setPaymentType: (type: 'subscription' | 'oneTime') => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  paymentType,
  setPaymentType,
}) => {
  return (
    <>
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
    </>
  );
};

export default PaymentOptions;

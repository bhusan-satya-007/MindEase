
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import UpiOption from "./UpiOption";

interface UpiPaymentSectionProps {
  upiId: string;
  paymentType: 'subscription' | 'oneTime';
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const UpiPaymentSection: React.FC<UpiPaymentSectionProps> = ({
  upiId,
  paymentType,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <UpiOption name="Google Pay" icon={<Phone className="h-6 w-6" />} />
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
            value={upiId}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full">
          {paymentType === "subscription" ? "Subscribe Now" : "Pay Now"}
        </Button>
      </form>
    </div>
  );
};

export default UpiPaymentSection;

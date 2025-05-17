
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CardPaymentSectionProps {
  formData: {
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  };
  paymentType: 'subscription' | 'oneTime';
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CardPaymentSection: React.FC<CardPaymentSectionProps> = ({
  formData,
  paymentType,
  handleChange,
  handleSubmit,
}) => {
  return (
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
        {paymentType === "subscription" ? "Subscribe Now" : "Pay Now"}
      </Button>
    </form>
  );
};

export default CardPaymentSection;

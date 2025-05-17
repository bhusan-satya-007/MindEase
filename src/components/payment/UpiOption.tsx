
import React from "react";
import { Phone, ShoppingCart } from "lucide-react";

interface UpiOptionProps {
  name: string;
  icon: React.ReactNode | string;
}

const UpiOption: React.FC<UpiOptionProps> = ({ name, icon }) => {
  // Helper function to render the appropriate icon
  const renderIcon = () => {
    if (typeof icon === "string") {
      if (icon === "PhonePe") return <span className="text-purple-600 font-bold">PhP</span>;
      if (icon === "Paytm") return <span className="text-blue-600 font-bold">PTM</span>;
      if (icon === "CRED") return <span className="text-gray-800 font-bold">CR</span>;
      return <span className="font-bold text-primary">{icon.substring(0, 2)}</span>;
    }
    return icon;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        {renderIcon()}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default UpiOption;

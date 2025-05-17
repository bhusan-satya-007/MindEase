
import React from "react";

interface UpiOptionProps {
  name: string;
  icon: React.ReactNode | string;
}

const UpiOption: React.FC<UpiOptionProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        {typeof icon === "string" ? (
          <span className="font-bold text-primary">{icon.substring(0, 2)}</span>
        ) : (
          icon
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default UpiOption;

import React from "react";
import { LucideIcon, Check } from "lucide-react";

interface StepItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  active?: boolean;
  finished?: boolean;
}

function StepItem({
  icon: Icon,
  title,
  description,
  active = false,
  finished = false,
}: StepItemProps) {
  return (
    <div
      className={`flex gap-2 items-center ${
        active || finished ? "opacity-100" : "opacity-50"
      }`}
    >
      <div
        className={`sm:min-w-16 sm:min-h-16 min-w-8 min-h-8 rounded-full border-2 flex items-center justify-center p-2 sm:p-4 ${
          active
            ? "border-primary-500 text-primary-500"
            : finished
              ? "border-green-500 text-green-500"
              : "border-primary-100 text-primary-100"
        }`}
      >
        {finished ? (
          <Check className="w-full h-full" stroke="currentColor" />
        ) : (
          <Icon className="w-full h-full" stroke="currentColor" />
        )}
      </div>
      <div>
        <p className="text-sm text-gray-400 hidden lg:block">{description}</p>
        <h2 className="text-xl hidden lg:block">{title}</h2>
      </div>
    </div>
  );
}

export default StepItem;

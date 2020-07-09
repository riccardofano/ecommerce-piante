import { Icon } from "@iconify/react";
import truckLine from "@iconify/icons-clarity/truck-line";

interface deliveryProps {
  title?: string;
  subtitle?: string;
}

export default function delivery({ title, subtitle }: deliveryProps) {
  return (
    <div className="flex items-center justify-center p-2 border-solid border-gray-light border mt-10 rounded">
      <Icon icon={truckLine} className="text-5xl w-16 mr-2 md:mr-3" />
      <div>
        <h1 className="font-bold text-lg md:text-xl">{title}</h1>
        <p className="text-base md:text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

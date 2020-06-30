import { Icon } from "@iconify/react";
import truckLine from "@iconify/icons-clarity/truck-line";

export default function delivery() {
  return (
    <div className="flex gap-2 items-center justify-center p-2 border-solid border-gray-light border mt-10 rounded">
      <Icon icon={truckLine} className="text-5xl w-32" />
      <div>
        <h1 className="font-bold">Spedizione gratuita</h1>
        <p className="leading-tight">
          su tutti i nostri prodotti con importo superiore a 10,00€
        </p>
      </div>
    </div>
  );
}

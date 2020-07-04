import Select from "../select";
import Btn from "../button";

interface addToCartProps {
  handleClick?: () => void;
}

export default function addToCart({ handleClick }: addToCartProps) {
  return (
    <div className="flex gap-3 mt-10">
      <Select></Select>
      <Btn handleClick={handleClick} className="flex-1">
        Aggiungi al carrello
      </Btn>
    </div>
  );
}

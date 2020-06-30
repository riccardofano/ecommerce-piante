import { InlineIcon } from "@iconify/react";
import searchLine from "@iconify/icons-clarity/search-line";
import shoppingCartLine from "@iconify/icons-clarity/shopping-cart-line";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 container text-lg md:text-2xl">
      <h1 className="text-lg md:text-xl">Piante</h1>
      <div className="flex">
        <InlineIcon className="mr-2 md:mr-6" icon={searchLine} />
        <InlineIcon icon={shoppingCartLine} />
      </div>
    </header>
  );
}

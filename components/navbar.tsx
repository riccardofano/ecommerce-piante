import { InlineIcon } from "@iconify/react";
import searchLine from "@iconify/icons-clarity/search-line";
import shoppingCartLine from "@iconify/icons-clarity/shopping-cart-line";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 font">
      <h1 className="text-lg">Piante</h1>
      <div className="flex">
        <InlineIcon height={18} className="mr-2" icon={searchLine} />
        <InlineIcon height={18} icon={shoppingCartLine} />
      </div>
    </header>
  );
}

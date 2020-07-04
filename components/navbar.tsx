import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";

import { InlineIcon } from "@iconify/react";
import searchLine from "@iconify/icons-clarity/search-line";
import shoppingCartLine from "@iconify/icons-clarity/shopping-cart-line";
import shoppingCartSolid from "@iconify/icons-clarity/shopping-cart-solid-badged";

export default function Navbar() {
  const { cartCount } = useShoppingCart();
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  return (
    <header className="flex justify-between items-center py-4 container text-lg md:text-2xl">
      <h1 className="text-lg md:text-xl">Piante</h1>
      <div className="flex">
        <InlineIcon className="mr-2 md:mr-6" icon={searchLine} />
        {cartEmpty ? (
          <InlineIcon icon={shoppingCartLine} />
        ) : (
          <InlineIcon icon={shoppingCartSolid} />
        )}
      </div>
    </header>
  );
}

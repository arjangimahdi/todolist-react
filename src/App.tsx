import { useState } from "react";
import { Cart } from "./components/cart/Cart";
import { CartCount } from "./components/cart/CartCount";

function App() {
    const [cartItems, setCartItems] = useState<string[]>(["Product One", "Product Two"]);

    return (
        <div className="p-2 flex flex-col gap-y-2">
            <Cart cartItems={cartItems} />
            <CartCount count={cartItems.length} clear={() => setCartItems([])} />
        </div>
    );
}
export default App;

interface CartProps {
    cartItems: string[];
}

export const Cart = ({ cartItems }: CartProps) => {
    return (
        <ul className="list-disc">
            {cartItems.length === 0
                ? "Cart is empty!"
                : cartItems.map((cartItem: string, index: number) => {
                      return (
                          <li key={index} className="font-bold text-xs">
                              {cartItem}
                          </li>
                      );
                  })}
        </ul>
    );
};

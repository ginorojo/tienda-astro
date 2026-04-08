import React from 'react';
import { useStore } from '@nanostores/react';
import { cartItems } from '@/store/cart';
import { ShoppingBag } from 'lucide-react';

export const CartCounter: React.FC = () => {
  const $cartItems = useStore(cartItems);
  const itemCount = Object.values($cartItems).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="indicator">
      <ShoppingBag className="w-5 h-5" />
      {itemCount > 0 && (
        <span className="badge badge-sm indicator-item badge-accent animate-bounce">
          {itemCount}
        </span>
      )}
    </div>
  );
};

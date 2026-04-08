import React from 'react';
import { addCartItem } from '@/store/cart';
import { ShoppingCart } from 'lucide-react';

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const AddToCart: React.FC<Props> = ({ id, name, price, image }) => {
  return (
    <button 
      onClick={() => addCartItem({ id, name, price, image })}
      className="btn btn-primary btn-lg w-full bg-brand-accent border-brand-accent text-brand-primary font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
    >
      <ShoppingCart className="w-5 h-5" />
      Añadir al Carrito
    </button>
  );
};

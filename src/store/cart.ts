import { atom, map } from 'nanostores';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export const isCartOpen = atom(false);
export const cartItems = map<Record<string, CartItem>>({});

export function addCartItem({ id, name, price, image }: Omit<CartItem, 'quantity'>) {
  const existingItem = cartItems.get()[id];
  if (existingItem) {
    cartItems.setKey(id, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cartItems.setKey(id, { id, name, price, image, quantity: 1 });
  }
  isCartOpen.set(true);
}

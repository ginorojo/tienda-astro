import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { cartItems, isCartOpen, addCartItem } from '@/store/cart';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);
  
  const items = Object.values($cartItems);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formattedPrice = (price: number) => 
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);

  const updateQuantity = (id: string, delta: number) => {
    const item = $cartItems[id];
    if (item) {
      const newQuantity = Math.max(0, item.quantity + delta);
      if (newQuantity === 0) {
        const { [id]: _, ...rest } = $cartItems;
        cartItems.set(rest);
      } else {
        cartItems.setKey(id, { ...item, quantity: newQuantity });
      }
    }
  };

  const removeItem = (id: string) => {
    const { [id]: _, ...rest } = $cartItems;
    cartItems.set(rest);
  };

  if (!$isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => isCartOpen.set(false)}
      ></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-left">
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-brand-primary flex items-center gap-3">
              <ShoppingBag className="w-6 h-6" />
              Tu Carrito
            </h2>
            <button 
              onClick={() => isCartOpen.set(false)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">Tu carrito está vacío</h3>
                <p className="text-slate-500 mb-8">Parece que aún no has añadido productos a tu carrito.</p>
                <button 
                  onClick={() => isCartOpen.set(false)}
                  className="btn btn-primary bg-brand-primary border-brand-primary px-8"
                >
                  Continuar Comprando
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-brand-primary line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-brand-accent mb-3">{formattedPrice(item.price)}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-slate-200 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 px-2 hover:bg-slate-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 px-2 hover:bg-slate-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 font-medium">Subtotal</span>
                <span className="text-2xl font-bold text-brand-primary">{formattedPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-slate-400 mb-6 text-center">Impuestos y envío calculados al finalizar la compra</p>
              <a 
                href="/checkout"
                onClick={() => isCartOpen.set(false)}
                className="btn btn-primary btn-block btn-lg bg-brand-primary border-brand-primary font-bold shadow-xl hover:scale-[1.02] transition-transform"
              >
                Finalizar Compra
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

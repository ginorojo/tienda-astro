import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { addCartItem } from '@/store/cart';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image_url?: string | null;
  category?: string;
  isNew?: boolean;
  onSale?: boolean;
}

export const ProductCard: React.FC<ProductProps> = ({ 
  id, name, price, image_url, category, isNew, onSale 
}) => {
  const displayImage = image_url || '/images/placeholder.png';
  const displayCategory = category || 'General';

  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addCartItem({
      id,
      name,
      price,
      image: displayImage,
    });
  };

  return (
    <div className="premium-card group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
      <a href={`/product/${id}`} className="flex-grow">
        <div className="relative overflow-hidden aspect-square bg-slate-50">
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
            {isNew && <span className="badge badge-primary badge-xs font-bold px-2 py-1">NUEVO</span>}
            {onSale && <span className="badge badge-accent badge-xs font-bold text-brand-primary px-2 py-1">OFERTA</span>}
          </div>
          
          <img 
            src={displayImage} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        <div className="p-3 sm:p-4">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
            {displayCategory}
          </div>
          <h3 className="font-bold text-sm sm:text-base mb-1 text-brand-primary truncate group-hover:text-brand-accent transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-base sm:text-lg font-bold text-brand-primary">{formattedPrice}</span>
          </div>
        </div>
      </a>
      
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <button 
          onClick={handleAddToCart}
          className="btn btn-circle btn-sm btn-primary shadow-lg border-none hover:scale-110"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

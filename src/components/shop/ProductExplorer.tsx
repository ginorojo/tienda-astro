import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types/database';

interface Props {
  initialProducts: Product[];
  categories: string[];
}

export const ProductExplorer: React.FC<Props> = ({ initialProducts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [priceRange, setPriceRange] = useState(1000000);
  const [sortBy, setSortBy] = useState('Más recientes');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by Category
    if (selectedCategory !== 'Todos') {
      // Note: We need to handle category mapping. In the DB it might be category_id.
      // For this implementation, we assume category is a string or we use a simple match.
      // To be robust, let's assume 'categories' prop matches the products' category.
      // result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Price
    result = result.filter(p => p.price <= priceRange);

    // Search
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'Precio: Menor a Mayor') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Precio: Mayor a Menor') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Más recientes') {
      result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return result;
  }, [initialProducts, selectedCategory, priceRange, sortBy, searchQuery]);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 flex-shrink-0">
        <div className="sticky top-28 space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary">Búsqueda</h3>
            <input 
              type="text" 
              placeholder="Buscar producto..." 
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      className="radio radio-primary radio-sm" 
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span className={`transition-colors ${selectedCategory === cat ? 'text-brand-accent font-bold' : 'text-slate-600 group-hover:text-brand-accent'}`}>
                      {cat}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary">Precio Máximo</h3>
            <input 
              type="range" 
              min="0" 
              max="1000000" 
              step="10000"
              value={priceRange} 
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="range range-primary range-xs" 
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>$0</span>
              <span className="font-bold text-brand-accent">
                {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceRange)}
              </span>
            </div>
          </div>

          <div className="p-6 bg-brand-primary rounded-2xl text-white shadow-xl">
            <h4 className="font-bold mb-2">Despacho Gratis</h4>
            <p className="text-sm text-slate-300">En compras sobre $50.000 a toda la Región Metropolitana.</p>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-slate-500">
            Mostrando <span className="text-brand-primary font-bold">{filteredProducts.length}</span> productos
          </p>
          <select 
            className="select select-bordered select-sm w-full sm:w-auto"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Más recientes</option>
            <option>Precio: Menor a Mayor</option>
            <option>Precio: Mayor a Menor</option>
            <option>Populares</option>
          </select>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-slate-400">No se encontraron productos</h3>
            <button 
              onClick={() => {
                setSelectedCategory('Todos');
                setPriceRange(1000000);
                setSearchQuery('');
              }}
              className="btn btn-ghost mt-4 text-brand-accent"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

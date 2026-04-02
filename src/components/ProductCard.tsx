import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../lib/products';
import { useCart } from '../context/CartContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1, product.sizes[0], product.colors[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-lowest">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-surface-container-highest px-3 py-1">
            <span className="font-label text-[10px] font-bold text-secondary-fixed">NOVO</span>
          </div>
        )}
        {product.isBestSeller && (
          <div className="absolute top-4 right-4 bg-secondary-container px-3 py-1">
            <span className="font-label text-xs uppercase font-bold text-on-secondary-container">Mais Vendido</span>
          </div>
        )}
        {product.isLimited && (
          <div className="absolute top-4 right-4 bg-secondary-container px-3 py-1">
            <span className="font-label text-[10px] font-bold text-on-secondary-container">LIMITADO</span>
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#E62117] text-white font-label text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          </div>
        )}
      </div>
      <div className="mt-6 flex flex-col space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface group-hover:text-primary-container transition-colors">
            {product.name}
          </h3>
          <div className="text-right">
            <span className="font-label text-sm font-bold text-secondary-fixed-dim">
              {product.price.toLocaleString('pt-AO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kz
            </span>
            {product.originalPrice && (
              <p className="font-label text-[10px] text-on-surface-variant line-through uppercase mt-1">
                {product.originalPrice.toLocaleString('pt-AO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kz
              </p>
            )}
          </div>
        </div>
        <p className="font-body text-xs text-on-surface-variant leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-surface-container-high text-on-surface font-headline font-black uppercase text-xs py-4 tracking-[0.1em] transition-all duration-300 hover:bg-primary-container hover:text-white active:scale-95"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </Link>
  );
};

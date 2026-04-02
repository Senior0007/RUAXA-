import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/products';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="font-headline text-4xl uppercase">Produto não encontrado</h1>
        <Link to="/shop" className="mt-8 inline-block text-primary-container border-b border-primary-container pb-1">Voltar ao Catálogo</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <main className="pt-24 min-h-screen bg-background text-on-surface pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Product Image */}
        <div className="relative bg-surface-container-lowest aspect-[3/4] lg:aspect-auto lg:h-[800px] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          {product.isNew && (
            <div className="absolute top-6 right-6 bg-surface-container-highest px-4 py-2">
              <span className="font-label text-xs font-bold text-secondary-fixed">NOVO</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center py-10">
          <div className="mb-8">
            <span className="font-label text-primary-fixed uppercase tracking-[0.3em] text-xs mb-4 block">
              {product.category}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              {product.name}
            </h1>
            <div className="flex items-end gap-4">
              <span className="font-label text-3xl font-bold text-secondary-fixed-dim">
                {product.price.toLocaleString('pt-AO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kz
              </span>
              {product.originalPrice && (
                <span className="font-label text-lg text-on-surface-variant line-through uppercase mb-1">
                  {product.originalPrice.toLocaleString('pt-AO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kz
                </span>
              )}
            </div>
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed mb-12 max-w-lg">
            {product.description}
          </p>

          <div className="space-y-8 mb-12 border-y border-white/5 py-8">
            {/* Color Selection */}
            <div>
              <div className="flex justify-between mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Cor</span>
                <span className="font-label text-xs uppercase tracking-widest">{selectedColor}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 border transition-all ${
                      selectedColor === color 
                        ? 'border-primary-container' 
                        : 'border-white/10 hover:border-white/40'
                    }`}
                    style={{ backgroundColor: color.toLowerCase().includes('black') ? '#131313' : color.toLowerCase().includes('white') ? '#fefefe' : '#747676' }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Tamanho</span>
                <button className="font-label text-xs uppercase tracking-widest text-secondary-container underline">Guia de Tamanhos</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border font-label text-sm uppercase transition-all ${
                      selectedSize === size 
                        ? 'border-primary-container bg-primary-container text-white' 
                        : 'border-white/10 hover:border-white/40 text-on-surface'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">Quantidade</span>
              <div className="flex items-center bg-surface-container-high w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-6 py-4 hover:text-primary-container transition-colors"
                >
                  -
                </button>
                <span className="font-label w-8 text-center">{String(quantity).padStart(2, '0')}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-6 py-4 hover:text-primary-container transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary-container text-on-primary-container font-headline font-black uppercase py-6 tracking-[0.2em] hover:bg-red-700 transition-all active:scale-95"
            >
              Adicionar ao Carrinho
            </button>
            <div className="flex justify-center gap-8 mt-4 grayscale opacity-50">
              <div className="flex items-center gap-2 font-label text-[10px] uppercase">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                Envio Global
              </div>
              <div className="flex items-center gap-2 font-label text-[10px] uppercase">
                <span className="material-symbols-outlined text-sm">verified</span>
                Qualidade Garantida
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

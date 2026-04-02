import React, { useState, useMemo } from 'react';
import { products } from '../lib/products';
import { ProductCard } from '../components/ProductCard';

export const Shop = () => {
  const [category, setCategory] = useState('Todos');
  const [size, setSize] = useState('');
  const [priceRange, setPriceRange] = useState('Todos os Preços');
  const [sortBy, setSortBy] = useState('Mais Recentes');

  const categories = ['Todos', 'T-shirts', 'Hoodies', 'Casacos', 'Calçado', 'Acessórios'];
  const sizes = ['S', 'M', 'L', 'XL'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category Filter
    if (category !== 'Todos') {
      result = result.filter(p => p.category === category);
    }

    // Size Filter
    if (size) {
      result = result.filter(p => p.sizes.includes(size));
    }

    // Price Range Filter
    if (priceRange !== 'Todos os Preços') {
      if (priceRange === 'Até 15.000 Kz') result = result.filter(p => p.price <= 15000);
      if (priceRange === '15.000 Kz - 30.000 Kz') result = result.filter(p => p.price > 15000 && p.price <= 30000);
      if (priceRange === '30.000 Kz - 50.000 Kz') result = result.filter(p => p.price > 30000 && p.price <= 50000);
      if (priceRange === 'Acima de 50.000 Kz') result = result.filter(p => p.price > 50000);
    }

    // Sorting
    if (sortBy === 'Mais Recentes') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === 'Mais Vendidos') {
      result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    } else if (sortBy === 'Preço: Maior para Menor') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Preço: Menor para Maior') {
      result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [category, size, priceRange, sortBy]);

  return (
    <main className="pt-24 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Hero Section Title */}
      <header className="px-6 md:px-10 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-4xl">
            <span className="font-label text-primary-fixed uppercase tracking-[0.3em] text-xs mb-4 block">Lançamentos da Estação</span>
            <h1 className="font-headline text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-on-background">
              Catálogo<br/><span className="text-primary-container">Urbano</span>
            </h1>
          </div>
          <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant text-right border-l border-white/10 pl-6 hidden md:block">
            Coletivo RUAXA<br/>Est. 2024<br/>São Paulo, BR
          </div>
        </div>
      </header>

      {/* Functional Filters & Sorting */}
      <section className="px-6 md:px-10 py-6 sticky top-[72px] z-40 bg-background/90 backdrop-blur-xl border-y border-white/5">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Filters Group */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {/* Category Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Categoria</label>
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`font-label text-[10px] uppercase px-4 py-1.5 tracking-widest transition-colors ${
                      category === cat 
                        ? 'bg-secondary-container text-on-secondary-container' 
                        : 'bg-surface-container-high text-on-surface hover:bg-surface-bright'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Tamanho</label>
              <div className="flex gap-1.5">
                {sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(size === s ? '' : s)}
                    className={`w-8 h-8 border font-label text-[10px] flex items-center justify-center transition-colors ${
                      size === s 
                        ? 'border-primary-container text-primary-container' 
                        : 'border-white/10 hover:border-white/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Faixa de Preço</label>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-surface-container-high border-none font-label text-[10px] uppercase tracking-widest focus:ring-0 text-on-surface cursor-pointer py-2 pl-4 pr-10 min-w-[140px]"
              >
                <option>Todos os Preços</option>
                <option>Até 15.000 Kz</option>
                <option>15.000 Kz - 30.000 Kz</option>
                <option>30.000 Kz - 50.000 Kz</option>
                <option>Acima de 50.000 Kz</option>
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-end lg:items-center justify-end gap-4 border-t lg:border-t-0 border-white/5 pt-4 lg:pt-0">
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant text-right">Ordenar Por</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none font-label text-xs uppercase tracking-widest focus:ring-0 text-on-surface cursor-pointer text-right"
              >
                <option>Mais Recentes</option>
                <option>Mais Vendidos</option>
                <option>Preço: Maior para Menor</option>
                <option>Preço: Menor para Maior</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-10 py-12 md:py-20 relative z-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-headline text-2xl text-on-surface-variant uppercase">Nenhum produto encontrado.</p>
            <button 
              onClick={() => {
                setCategory('All');
                setSize('');
                setPriceRange('All Prices');
              }}
              className="mt-6 font-label text-primary-container uppercase tracking-widest border-b border-primary-container pb-1"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-10 py-24 border-t border-white/5 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter text-on-background mb-6">
              Não perca o <span className="text-secondary-container">próximo drop.</span>
            </h2>
            <p className="font-body text-on-surface-variant mb-8 max-w-md">Junte-se ao coletivo para obter acesso antecipado a lançamentos limitados e conteúdo urbano exclusivo.</p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="SEU ENDEREÇO DE EMAIL" 
              className="flex-1 bg-surface-container-lowest border-none border-b-2 border-white/10 p-6 font-label text-xs tracking-widest focus:border-primary-container focus:ring-0 text-on-surface placeholder:text-white/20"
            />
            <button className="bg-secondary-container text-on-secondary-container font-headline font-black uppercase text-xs px-10 py-4 tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all">
              Subscrever
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

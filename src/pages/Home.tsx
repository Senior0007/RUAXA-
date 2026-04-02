import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../lib/products';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const newDrops = products.filter(p => p.isNew || p.id === '1' || p.id === '2' || p.id === '3').slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller || p.id === '12' || p.id === '11' || p.id === '13').slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRi98G-a2cd1qJGUtB4tkbNer78ZGc9o4CPjqPpYRmhp25dSWq8v5xylwQhnVyy4FxTi-njOE5xe0Ny7zWhXrDk-ooZ5477mzloJVF8LQwHcYnlZjJLF2IWGEv6GTtjO10hdQOJA2w2mMG6ACkTpYR-mf_561brfpinkThqLz1wnAOMgkidb73IG4to8z9o1yBRdliFBrourIA-93Ipi0Z_naMpjUANLFrHHOeUxBSz9QZKPuRMKLtIoZ2ARLTf0vGMKzpbzeKtqY"
            alt="RUAXA Campaign"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-24">
          <div className="lg:col-span-8">
            <h1 className="font-headline text-[15vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-secondary mb-4 mix-blend-difference">
              RUAXA
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <p className="font-headline text-3xl md:text-5xl font-black uppercase text-primary-container italic">
                Da rua para o mundo
              </p>
              <Link
                to="/shop"
                className="bg-primary-container text-on-primary-container px-10 py-5 text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 scale-95 active:opacity-80 self-start md:self-auto"
              >
                Comprar agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 group">
            <span className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform">local_shipping</span>
            <div>
              <h4 className="font-label font-bold uppercase text-sm tracking-widest">Entrega Veloz</h4>
              <p className="text-[10px] text-on-surface-variant uppercase">Despacho em até 24h para todo o país.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <span className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform">verified_user</span>
            <div>
              <h4 className="font-label font-bold uppercase text-sm tracking-widest">Pagamento Seguro</h4>
              <p className="text-[10px] text-on-surface-variant uppercase">Criptografia de ponta em todas transações.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <span className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform">workspace_premium</span>
            <div>
              <h4 className="font-label font-bold uppercase text-sm tracking-widest">Qualidade RUAXA</h4>
              <p className="text-[10px] text-on-surface-variant uppercase">Algodão heavy-weight e rigor editorial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promoções Section */}
      <section className="py-24 px-6 md:px-12 bg-[#131313]" id="promo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[500px]">
          <div className="relative group overflow-hidden bg-[#E62117] flex items-center p-12">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <span className="font-headline text-[200px] font-black leading-none">-40%</span>
            </div>
            <div className="relative z-10 space-y-6">
              <span className="bg-black text-white px-3 py-1 font-label text-xs uppercase font-bold">Oferta Limitada</span>
              <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">SALDOS<br/>DE ÉPOCA</h2>
              <p className="font-body text-white/80 max-w-xs uppercase text-sm tracking-widest">Peças selecionadas do DROP 01 com descontos progressivos.</p>
              <Link to="/shop" className="inline-block bg-white text-black px-8 py-3 font-bold uppercase text-sm tracking-widest hover:invert transition-all">Ver Ofertas</Link>
            </div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ax83Js4RwF78O266bdxHTBn1STu0Ax-CAuCaB7VygzIUdFTOKPhzkRFm1RX2UNXr0skYuO5xZo9XKcqdM2e9YXdhxEDjSQEYbgt3mxOBYoUmIOiwHEieYfSJcCRFO-cdZt9omnL9TGIBQZsjVz5J8hYloQBkTq0unA_1faDyDb2A1SQufhPg2hcvFn_GwhYNRsRG0e5_MELxmnypLDWY1IxSwPNeKAjkY-w4_Krm6XJiKzk8f2hTTr2pVxZ4aGND9-nJUJ4QNnc"
              alt="Promo background"
              className="absolute -right-20 top-0 h-full w-2/3 object-cover grayscale mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-secondary-container p-8 flex flex-col justify-center items-start group relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-on-secondary-container font-label text-[10px] font-bold tracking-[0.3em] uppercase">Combo Especial</span>
                <h3 className="text-on-secondary-container font-headline text-3xl font-black uppercase tracking-tighter mt-2">LEVE 3, PAGUE 2</h3>
                <Link to="/shop" className="inline-block mt-4 border-b-2 border-on-secondary-container text-on-secondary-container font-bold uppercase text-xs tracking-widest">Aproveitar</Link>
              </div>
              <span className="absolute -right-4 -bottom-4 material-symbols-outlined text-[120px] text-on-secondary-container/10 rotate-12">local_mall</span>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-center items-start border border-white/5 group">
              <span className="text-secondary-container font-label text-[10px] font-bold tracking-[0.3em] uppercase">Primeira Compra</span>
              <h3 className="text-white font-headline text-3xl font-black uppercase tracking-tighter mt-2">15% OFF EM TUDO</h3>
              <p className="text-on-surface-variant text-xs mt-2 uppercase">USE O CUPOM: <span className="text-white font-bold">RUAXA15</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="py-24 bg-background" id="novidades">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="font-label text-primary-container tracking-[0.3em] uppercase text-xs mb-2 block">Acabou de chegar</span>
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">Novidades</h2>
          </div>
          <Link to="/shop" className="font-label text-secondary-container uppercase text-sm border-b border-secondary-container/50 pb-1">Ver todos</Link>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 scrollbar-hide">
          {newDrops.map(product => (
            <div key={product.id} className="min-w-[300px] md:min-w-[400px] group bg-surface-container-low p-2">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary-container px-3 py-1">
                    <span className="text-white font-label text-[10px] font-black uppercase">Novo</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <h4 className="font-headline font-bold uppercase text-lg">{product.name}</h4>
                  <span className="font-label font-bold text-secondary-container">{product.price.toLocaleString('pt-AO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kz</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Mais Vendidos */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low" id="catalog">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-label text-secondary-container tracking-[0.3em] uppercase text-xs mb-2 block">Os Favoritos</span>
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">Mais Vendidos</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {bestSellers.map(product => (
            <div key={product.id} className="group relative bg-background p-2 transition-transform duration-500 hover:-translate-y-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-container text-on-primary-container py-24 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="font-headline text-6xl md:text-9xl font-black uppercase tracking-tighter mix-blend-overlay opacity-50 mb-[-2rem] select-none">JUNTE-SE À GANGUE</h2>
        <div className="max-w-2xl z-10">
          <h3 className="font-headline text-3xl md:text-5xl font-black uppercase mb-6 leading-none">Receba acesso antecipado aos Drops.</h3>
          <form className="flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="SEU@EMAIL.COM"
              className="bg-primary-container border-b-2 border-white text-white placeholder:text-white/50 focus:ring-0 focus:border-white transition-all p-4 font-label w-full md:w-80 uppercase tracking-widest"
            />
            <button type="submit" className="bg-white text-primary-container px-12 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Juntar-se
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

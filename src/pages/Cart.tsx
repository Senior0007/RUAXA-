import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const [address, setAddress] = useState('');
  const phoneNumber = '244954827791'; // WhatsApp number from prompt

  const finishOrder = () => {
    if (items.length === 0) return;
    
    let message = `🛒 *NOVO PEDIDO RUAXA*\n\n`;
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.product.name} (${item.selectedSize}/${item.selectedColor}) - ${formatCurrency(item.product.price * item.quantity)}\n`;
    });
    
    message += `\n*Subtotal:* ${formatCurrency(subtotal)}\n`;
    message += `*Endereço:* ${address || 'Não informado'}\n\n`;
    message += `_Aguardando cálculo do frete._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter text-on-surface">Seu Carrinho</h1>
        <p className="font-label text-sm text-secondary-fixed-dim mt-4 tracking-widest uppercase">Da rua para o mundo / Checkout</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Cart Items List */}
        <section className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-low relative group border border-white/5">
                <div className="w-full md:w-32 h-40 bg-surface-container-highest shrink-0 overflow-hidden">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-xl font-bold uppercase">{item.product.name}</h3>
                      <button onClick={() => removeFromCart(index)} className="text-on-surface/40 hover:text-primary-container transition-colors">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                    <div className="flex gap-4 mt-2 font-label text-xs uppercase tracking-wider text-on-surface/60">
                      <span>Tamanho: {item.selectedSize}</span>
                      <span>Cor: {item.selectedColor}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-6">
                    <div className="flex items-center bg-surface-container-high px-4 py-2 gap-6">
                      <button onClick={() => updateQuantity(index, -1)} className="hover:text-primary-container">-</button>
                      <span className="font-label w-4 text-center">{String(item.quantity).padStart(2, '0')}</span>
                      <button onClick={() => updateQuantity(index, 1)} className="hover:text-primary-container">+</button>
                    </div>
                    <span className="font-headline text-xl font-bold">{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="py-12 text-center border-2 border-dashed border-white/10">
                <p className="font-label text-on-surface/40 uppercase tracking-widest">Seu carrinho está vazio</p>
                <Link to="/shop" className="inline-block mt-4 text-primary-container font-bold hover:underline">Ir para o catálogo</Link>
              </div>
            )}
          </div>

          {/* Delivery Address Field */}
          <div className="pt-8 border-t border-white/5">
            <h2 className="font-headline text-2xl font-black uppercase mb-6">Endereço de Entrega</h2>
            <div className="bg-surface-container-low p-6 border border-white/5">
              <textarea 
                className="w-full bg-surface-container-high border-none text-on-surface font-body p-4 placeholder:text-on-surface/30 focus:ring-0 min-h-[100px] resize-none" 
                placeholder="Insira seu endereço completo (Rua, Número, CEP, Bairro, Cidade/Estado)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Brand Story Section */}
          <div className="pt-12 border-t border-white/5">
            <h2 className="font-headline text-3xl font-black uppercase mb-6">Nossa Jornada</h2>
            <p className="font-body text-on-surface/70 leading-relaxed max-w-xl">
              Nascida no concreto, criada pela urgência. A RUAXA não é apenas vestuário; é um manifesto de quem domina o espaço urbano. Cada peça carrega o peso da nossa história, do asfalto para as passarelas globais.
            </p>
            <div className="flex gap-6 mt-10">
              <a href="#" className="font-label text-xs uppercase tracking-widest text-secondary hover:text-primary-container transition-colors">Instagram</a>
              <a href="#" className="font-label text-xs uppercase tracking-widest text-secondary hover:text-primary-container transition-colors">TikTok</a>
            </div>
          </div>
        </section>

        {/* Order Summary Sidebar */}
        <aside className="lg:col-span-5 sticky top-32">
          <div className="bg-surface-container-low p-8 md:p-12 shadow-[0_0_50px_rgba(230,33,23,0.05)] border border-white/5">
            <h2 className="font-headline text-2xl font-bold uppercase mb-10 pb-4 border-b border-white/5">Resumo</h2>
            <div className="space-y-6 font-label text-sm uppercase tracking-wider">
              <div className="flex justify-between">
                <span className="text-on-surface/60">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface/60">Frete</span>
                <span className="text-secondary-fixed">Calculado no WhatsApp</span>
              </div>
              <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                <span className="font-headline text-xl font-black">Total</span>
                <span className="font-headline text-3xl font-black text-primary-container">{formatCurrency(subtotal)}</span>
              </div>
            </div>

            {/* Integration Note */}
            <div className="mt-12 p-4 bg-surface-container-highest border-l-4 border-secondary-container">
              <p className="font-body text-xs leading-tight text-on-surface/80">
                <strong>Nota:</strong> Ao clicar no botão abaixo, geraremos automaticamente uma lista detalhada dos seus itens para o nosso atendimento no WhatsApp. Rápido e direto.
              </p>
            </div>

            {/* Primary CTA */}
            <button 
              disabled={items.length === 0}
              onClick={finishOrder}
              className="w-full mt-8 bg-primary-container text-on-primary-container font-headline font-black uppercase py-6 px-4 flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
            >
              Finalizar pedido no WhatsApp
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <Link to="/shop" className="block text-center w-full mt-4 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface/40 hover:text-on-surface transition-colors">
              Continuar Comprando
            </Link>
          </div>

          {/* Safe Checkout Labels */}
          <div className="mt-8 flex justify-center gap-8 grayscale opacity-50">
            <div className="flex items-center gap-2 font-label text-[10px] uppercase">
              <span className="material-symbols-outlined text-sm">lock</span>
              Compra Segura
            </div>
            <div className="flex items-center gap-2 font-label text-[10px] uppercase">
              <span className="material-symbols-outlined text-sm">local_shipping</span>
              Envio Global
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

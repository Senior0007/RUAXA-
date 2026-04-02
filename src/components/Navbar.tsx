import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { itemCount } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Catálogo', path: '/shop' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Entregas', path: '/delivery' },
  ];

  return (
    <>
      <nav className="bg-[#131313] fixed top-0 z-50 border-b border-[#FFF9EF]/10 flex justify-between items-center w-full px-6 py-4 max-w-none font-['Epilogue'] tracking-tight">
        <Link to="/" className="text-2xl font-black tracking-tighter text-[#FFF9EF] uppercase">
          RUAXA
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`uppercase text-sm tracking-widest transition-colors ${
                location.pathname === link.path
                  ? 'text-[#E62117] font-bold border-b-2 border-[#E62117] pb-1'
                  : 'text-[#E2E2E2] hover:text-[#FFF9EF]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/shop" className="text-[#E2E2E2] hover:bg-[#1B1B1B] transition-all duration-300 p-2 active:opacity-80 hidden md:block">
            <span className="material-symbols-outlined">search</span>
          </Link>
          <Link to="/cart" className="relative text-[#E2E2E2] hover:bg-[#1B1B1B] transition-all duration-300 p-2 active:opacity-80">
            <span className="material-symbols-outlined">shopping_cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E62117] text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden text-[#E2E2E2] p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl md:hidden">
          <aside className="fixed right-0 top-0 h-full w-80 bg-[#131313] shadow-[0_0_50px_rgba(230,33,23,0.1)] flex flex-col p-8 font-['Epilogue'] uppercase text-sm tracking-widest">
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-black text-[#E62117]">RUAXA</span>
              <button className="text-[#E2E2E2]" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-8 flex-grow">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 transition-transform hover:translate-x-2 ${
                    location.pathname === link.path ? 'text-[#FFDB3C] font-bold' : 'text-[#E2E2E2]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[#E62117]">
                    {link.name === 'Catálogo' ? 'grid_view' : link.name === 'Sobre' ? 'info' : link.name === 'Entregas' ? 'local_shipping' : 'mail'}
                  </span> 
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-6">
              <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-[#E62117] text-[#FFFEFF] py-4 font-bold text-center">
                Ir para o Carrinho ({itemCount})
              </Link>
              <div className="flex justify-between pt-6 border-t border-white/5">
                <span className="material-symbols-outlined text-[#E2E2E2]">photo_camera</span>
                <span className="material-symbols-outlined text-[#E2E2E2]">music_note</span>
                <span className="material-symbols-outlined text-[#E2E2E2]">chat</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] w-full border-t border-[#FFF9EF]/5 font-['Space_Grotesk'] uppercase text-[10px] tracking-tighter">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 py-20 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold text-[#FFF9EF] font-headline">RUAXA</div>
          <p className="text-[#E2E2E2]/60 max-w-xs leading-relaxed normal-case">
            Da rua para o mundo. Somos a ponte entre a coragem urbana e o luxo global. Desenhado no Brasil, construído para o futuro.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors grayscale hover:grayscale-0 material-symbols-outlined">photo_camera</a>
            <a href="#" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors grayscale hover:grayscale-0 material-symbols-outlined">music_note</a>
            <a href="#" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors grayscale hover:grayscale-0 material-symbols-outlined">chat</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[#FFDB3C] font-bold">Informação</span>
            <Link to="/delivery" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors">Envios</Link>
            <Link to="/delivery" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors">Devoluções</Link>
            <Link to="/about" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors">Privacidade</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FFDB3C] font-bold">Comunidade</span>
            <Link to="/shop" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors">Catálogo</Link>
            <Link to="/about" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors">Sobre Nós</Link>
            <Link to="/contact" className="text-[#E2E2E2]/60 hover:text-[#E62117] transition-colors">Contacto</Link>
          </div>
        </div>
        
        <div className="flex flex-col justify-between items-start md:items-end text-right">
          <div>
            <span className="block text-[#E2E2E2]/60">© 2024 RUAXA - Da rua para o mundo.</span>
            <span className="block text-[#FFDB3C] mt-2">TODOS OS DIREITOS RESERVADOS.</span>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0 opacity-50 grayscale">
            <span className="material-symbols-outlined text-lg">local_shipping</span>
            <span className="material-symbols-outlined text-lg">verified_user</span>
            <span className="material-symbols-outlined text-lg">public</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';

export const Contact = () => {
  return (
    <main className="pt-24 min-h-screen">
      <section className="px-6 md:px-16 py-32 flex flex-col lg:flex-row gap-20 bg-surface">
        <div className="lg:w-1/3">
          <h2 className="font-headline text-5xl font-black uppercase mb-6 tracking-tighter leading-none">
            Fale<br/>Conosco
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-sm">
            Dúvidas, parcerias ou apenas quer trocar uma ideia sobre o próximo drop? Estamos prontos para ouvir sua voz.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-surface-container-high p-3">
                <span className="material-symbols-outlined text-primary-container">mail</span>
              </div>
              <div>
                <div className="font-label text-[10px] uppercase text-on-surface/40">Email</div>
                <div className="font-body text-on-surface">drop@ruaxa.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-surface-container-high p-3">
                <span className="material-symbols-outlined text-primary-container">location_on</span>
              </div>
              <div>
                <div className="font-label text-[10px] uppercase text-on-surface/40">Sede</div>
                <div className="font-body text-on-surface">São Paulo, Brasil</div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-16 flex gap-6">
            <a href="#" className="group flex items-center gap-3">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container transition-all">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </div>
              <span className="font-label text-xs uppercase tracking-widest group-hover:text-primary-container transition-colors">Instagram</span>
            </a>
            <a href="#" className="group flex items-center gap-3">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-secondary-container group-hover:border-secondary-container transition-all">
                <span className="material-symbols-outlined text-sm text-on-secondary">music_note</span>
              </div>
              <span className="font-label text-xs uppercase tracking-widest group-hover:text-secondary-container transition-colors">TikTok</span>
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 bg-surface-container-low p-8 md:p-12 border-l-4 border-primary-container">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="font-label text-[10px] uppercase text-on-surface/40 mb-2 block">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Como te chamamos na rua?" 
                  className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface p-4 transition-all" 
                />
              </div>
              <div className="relative">
                <label className="font-label text-[10px] uppercase text-on-surface/40 mb-2 block">E-mail</label>
                <input 
                  type="email" 
                  placeholder="exemplo@ruaxa.com" 
                  className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface p-4 transition-all" 
                />
              </div>
            </div>
            <div className="relative">
              <label className="font-label text-[10px] uppercase text-on-surface/40 mb-2 block">Assunto</label>
              <select className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface p-4 appearance-none transition-all">
                <option>Dúvida sobre Produto</option>
                <option>Status do Pedido</option>
                <option>Parceria / Press</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="relative">
              <label className="font-label text-[10px] uppercase text-on-surface/40 mb-2 block">Sua Mensagem</label>
              <textarea 
                rows={4} 
                placeholder="Manda o papo..." 
                className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button 
                type="submit" 
                className="bg-primary-container text-on-primary-container px-12 py-5 font-headline font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
              >
                Enviar Mensagem
              </button>
              <a 
                href="https://wa.me/244954827791" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container px-12 py-5 font-headline font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                WhatsApp Direct
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

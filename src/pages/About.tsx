import React from 'react';

export const About = () => {
  return (
    <main className="pt-24 min-h-screen">
      <section className="relative min-h-[921px] flex flex-col md:flex-row items-center px-6 md:px-16 gap-12 py-20 overflow-hidden">
        <div className="absolute inset-0 noise-bg pointer-events-none"></div>
        <div className="w-full md:w-1/2 z-10">
          <div className="font-label text-secondary-container tracking-widest text-sm mb-4">DA RUA PARA O MUNDO</div>
          <h1 className="font-headline text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase text-secondary">
            Nossa<br/><span className="text-primary-container">História</span>
          </h1>
          <div className="space-y-6 max-w-xl">
            <p className="text-lg leading-relaxed text-on-surface-variant font-medium">
              A RUAXA não nasceu em um escritório. Ela emergiu do asfalto quente, das conversas nas esquinas e do ritmo frenético das metrópoles. Somos o manifesto de uma cultura que não pede licença para existir.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              O que começou como um movimento local transformou-se em uma curadoria global de estilo e resistência. Nossa missão é elevar a estética urbana ao patamar do luxo contemporâneo, sem perder a essência do "corre" diário.
            </p>
            <div className="pt-4">
              <div className="font-label text-xs uppercase tracking-tighter text-on-surface/40 mb-2">FUNDADA POR ARTISTAS DE RUA</div>
              <div className="h-px w-24 bg-primary-container"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-primary-container z-20"></div>
          <div className="bg-surface-container-low p-4 relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo4jTo6euX-zOTdTa5xS0K4omi6X2hPpiYKFIx8pCUz_WIKy-p5N5qE88403ph7h9gqZ5XjVedRGfOkskjZU42b0FJzqR4_MaBVz0tTfJhec_F7d9BXoRTlx9vr2UnVlV7wmXt1Yx2BppCGj7Jp2JKv3GzZ8Ul5w6sVmZK3xTXvHVjv_-R52XFC2op9h-jS18IMfGOkI3W7X6tVboBqkVzM5PTq0kkq3ECQS8qP36yWm_UFG6Vg1J-nhkaAUD7OE3ZrwXGCK88eg4" 
              alt="Urban street fashion" 
              className="w-full aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute bottom-8 -right-8 bg-primary-container px-6 py-4 font-headline font-black text-on-primary-container text-2xl uppercase shadow-2xl">
              Est. 2024
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-y border-white/5 bg-surface-container-lowest">
        <div className="p-12 border-r border-white/5 flex flex-col gap-2 group hover:bg-surface-container-low transition-colors">
          <span className="font-label text-primary-container text-xs">COMUNIDADE</span>
          <span className="font-headline text-5xl font-black text-secondary">50K+</span>
          <span className="font-body text-sm text-on-surface-variant uppercase tracking-widest">Exploradores Urbanos</span>
        </div>
        <div className="p-12 border-r border-white/5 flex flex-col gap-2 group hover:bg-surface-container-low transition-colors">
          <span className="font-label text-primary-container text-xs">CIDADES</span>
          <span className="font-headline text-5xl font-black text-secondary">12</span>
          <span className="font-body text-sm text-on-surface-variant uppercase tracking-widest">Polos Principais</span>
        </div>
        <div className="p-12 flex flex-col gap-2 group hover:bg-surface-container-low transition-colors">
          <span className="font-label text-primary-container text-xs">QUALIDADE</span>
          <span className="font-headline text-5xl font-black text-secondary">100%</span>
          <span className="font-body text-sm text-on-surface-variant uppercase tracking-widest">Matérias-Primas</span>
        </div>
      </section>
    </main>
  );
};

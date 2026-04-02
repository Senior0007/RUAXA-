import React from 'react';

export const Delivery = () => {
  return (
    <main className="pt-24 min-h-screen">
      <section className="px-6 md:px-10 py-24 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Delivery Card */}
          <div className="md:col-span-8 bg-surface-container-low p-10 relative overflow-hidden group">
            <div className="noise-bg absolute inset-0"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">local_shipping</span>
              <h2 className="font-headline text-4xl font-black uppercase mb-4 tracking-tight">Entrega Rápida</h2>
              <div className="grid md:grid-cols-2 gap-10 mt-8">
                <div>
                  <h3 className="font-label text-secondary-fixed uppercase text-sm mb-2">Luanda Metrópole</h3>
                  <p className="text-on-surface font-body leading-relaxed">Entregas directas em Luanda num prazo de 24h a 48h. Logística própria para garantir que a peça chega impecável.</p>
                </div>
                <div>
                  <h3 className="font-label text-secondary-fixed uppercase text-sm mb-2">Resto do País</h3>
                  <p className="text-on-surface font-body leading-relaxed">Envios via transportadora especializada para todas as províncias. Prazo estimado de 3 a 5 dias úteis.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">explore</span>
            </div>
          </div>

          {/* Quality Stats */}
          <div className="md:col-span-4 bg-primary-container p-10 flex flex-col justify-between text-on-primary-container">
            <div>
              <span className="material-symbols-outlined text-4xl mb-4">verified</span>
              <h2 className="font-headline text-4xl font-black uppercase leading-tight">Qualidade<br/>Garantida</h2>
            </div>
            <div className="mt-12 space-y-6">
              <div>
                <p className="font-label text-5xl font-black italic">300 GSM</p>
                <p className="font-body text-sm uppercase tracking-widest mt-1 opacity-80">Algodão de alta densidade</p>
              </div>
              <div className="h-[1px] bg-on-primary-container/20"></div>
              <p className="font-body text-sm">Costuras reforçadas e acabamento manual. Peças desenhadas para durar no ambiente urbano mais exigente.</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="md:col-span-4 bg-surface-container-highest p-10 border-t-4 border-secondary-container">
            <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">payments</span>
            <h2 className="font-headline text-3xl font-black uppercase mb-6">Pagamento Seguro</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                <span className="font-label uppercase text-xs tracking-wider">Multicaixa Express</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                <span className="font-label uppercase text-xs tracking-wider">Transferência Bancária</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                <span className="font-label uppercase text-xs tracking-wider">Referência de Pagamento</span>
              </li>
            </ul>
            <div className="mt-10 bg-black/20 p-4">
              <p className="font-body text-xs text-on-surface-variant">Confirmação imediata para pagamentos via Express.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="md:col-span-8 bg-surface-container-low p-10">
            <h2 className="font-headline text-3xl font-black uppercase mb-10 flex items-center gap-4">
              Perguntas Frequentes
              <span className="h-[2px] flex-grow bg-outline-variant/30"></span>
            </h2>
            <div className="space-y-8">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center list-none font-headline font-bold text-lg uppercase tracking-tight text-on-surface hover:text-primary transition-colors">
                  Posso trocar o tamanho após a entrega?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 font-body text-on-surface-variant leading-relaxed pl-4 border-l border-primary-container">
                  Sim. Oferecemos um prazo de 7 dias para trocas, desde que a peça mantenha as etiquetas originais e não apresente sinais de uso. O custo logístico da troca em Luanda é fixo em 2.000 Kz.
                </p>
              </details>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center list-none font-headline font-bold text-lg uppercase tracking-tight text-on-surface hover:text-primary transition-colors">
                  Quais são os horários de entrega?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 font-body text-on-surface-variant leading-relaxed pl-4 border-l border-primary-container">
                  Efetuamos entregas de Segunda a Sábado, entre as 09:00 e as 18:00. No dia da entrega, o nosso estafeta entrará em contacto para confirmar a tua disponibilidade.
                </p>
              </details>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center list-none font-headline font-bold text-lg uppercase tracking-tight text-on-surface hover:text-primary transition-colors">
                  Enviam para fora de Angola?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 font-body text-on-surface-variant leading-relaxed pl-4 border-l border-primary-container">
                  Atualmente o nosso foco é o mercado nacional (Angola). Para pedidos internacionais especiais, por favor entra em contacto via WhatsApp para cotação de envio.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

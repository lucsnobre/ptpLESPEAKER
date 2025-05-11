export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* inciio */}
      <section className="relative w-full h-[70vh] bg-[url('/images/hero-repair.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-light mb-4">
            Reparos especializados <br />
            <span className="font-medium">Áudio e automotivo</span>
          </h1>
          <p className="text-white text-xl md:text-2xl font-light mb-8">
            Serviço de qualidade superior para equipamentos de áudio e automotivos
          </p>
          <a
            href="/services"
            className="bg-white text-black px-6 py-3 text-sm font-medium inline-block hover:bg-white/90 transition duration-200"
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* Recent Services Section */}
      <section className="py-12 bg-zinc-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium uppercase mb-8">O que oferecemos de serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4">
              <img
                src="/images/audio-repair.jpg"
                alt="Reparo de equipamentos de áudio"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Reparo de Equipamentos de Áudio</h3>
                <p className="text-sm">Fones de ouvido, alto-falantes e sistemas de som reparados por especialistas</p>
              </div>
            </div>
            <div className="bg-white p-4">
              <img
                src="/images/auto-repair.jpg"
                alt="Reparo de equipamentos automotivos"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Reparo de Eletrônicos Automotivos</h3>
                <p className="text-sm">Sistemas de navegação, áudio automotivo e módulos eletrônicos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8">Categorias de serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="mb-4 mx-auto w-24 h-24 flex items-center justify-center bg-zinc-100 rounded-full">
                <img src="/images/headphones-icon.png" alt="Fones de ouvido" className="w-12 h-12" />
              </div>
              <h3 className="text-sm font-medium">Fones de ouvido & Earbuds</h3>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-24 h-24 flex items-center justify-center bg-zinc-100 rounded-full">
                <img src="/images/speaker-icon.png" alt="Alto-falantes" className="w-12 h-12" />
              </div>
              <h3 className="text-sm font-medium">Alto-falantes & Caixas de som</h3>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-24 h-24 flex items-center justify-center bg-zinc-100 rounded-full">
                <img src="/images/car-audio-icon.png" alt="Áudio Automotivo" className="w-12 h-12" />
              </div>
              <h3 className="text-sm font-medium">Áudio Automotivo</h3>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-24 h-24 flex items-center justify-center bg-zinc-100 rounded-full">
                <img src="/images/car-nav-icon.png" alt="Navegação e Eletrônicos" className="w-12 h-12" />
              </div>
              <h3 className="text-sm font-medium">Navegação & Eletrônicos</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8">Suporte & Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-zinc-700 hover:border-white transition duration-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-zinc-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Agende um reparo</h3>
              <p className="text-sm text-zinc-300 mb-4">Encontre uma assistência técnica próxima</p>
              <a href="/contact" className="text-sm underline hover:text-zinc-300">Agendar</a>
            </div>
            <div className="p-6 border border-zinc-700 hover:border-white transition duration-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-zinc-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">FAQ & Suporte</h3>
              <p className="text-sm text-zinc-300 mb-4">Respostas para perguntas frequentes</p>
              <a href="/support" className="text-sm underline hover:text-zinc-300">Ver Suporte</a>
            </div>
            <div className="p-6 border border-zinc-700 hover:border-white transition duration-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-zinc-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fale Conosco</h3>
              <p className="text-sm text-zinc-300 mb-4">Entre em contato pelo WhatsApp ou chat</p>
              <a href="/contact" className="text-sm underline hover:text-zinc-300">Contatar</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

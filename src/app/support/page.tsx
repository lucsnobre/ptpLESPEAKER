export default function SupportPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-medium mb-8">Bem vindo ao Suporte AudioAuto</h1>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="border border-zinc-300 p-2 rounded-sm w-full md:w-48">
              <option>Todos</option>
              <option>Áudio</option>
              <option>Automotivo</option>
              <option>Fones de ouvido</option>
              <option>Alto-falantes</option>
            </select>
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Digite o modelo ou palavra-chave..."
                className="border border-zinc-300 p-2 w-full rounded-sm"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white px-6">
                Pesquisar
              </button>
            </div>
          </div>
          <div className="mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Como encontrar o modelo do seu produto?
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-300 mb-8">
          <div className="flex">
            <a href="#" className="px-6 py-3 border-b-2 border-black font-medium text-sm">
              Tudo
            </a>
            <a href="#" className="px-6 py-3 text-sm text-zinc-600 hover:text-black">
              Downloads
            </a>
            <a href="#" className="px-6 py-3 text-sm text-zinc-600 hover:text-black">
              Manuais
            </a>
            <a href="#" className="px-6 py-3 text-sm text-zinc-600 hover:text-black">
              Perguntas e respostas
            </a>
          </div>
        </div>

        {/* Category Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Selecione uma categoria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/support/headphones" className="flex flex-col items-center p-4 hover:bg-zinc-100">
              <img src="/images/headphones-icon.png" alt="" className="w-20 h-20 mb-4" />
              <span className="text-center text-sm">Fones de ouvido</span>
            </a>
            <a href="/support/speakers" className="flex flex-col items-center p-4 hover:bg-zinc-100">
              <img src="/images/speaker-icon.png" alt="" className="w-20 h-20 mb-4" />
              <span className="text-center text-sm">Alto-falantes & Caixas de som</span>
            </a>
            <a href="/support/car-audio" className="flex flex-col items-center p-4 hover:bg-zinc-100">
              <img src="/images/car-audio-icon.png" alt="" className="w-20 h-20 mb-4" />
              <span className="text-center text-sm">Áudio Automotivo</span>
            </a>
            <a href="/support/car-navigation" className="flex flex-col items-center p-4 hover:bg-zinc-100">
              <img src="/images/car-nav-icon.png" alt="" className="w-20 h-20 mb-4" />
              <span className="text-center text-sm">Navegação Automotiva</span>
            </a>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Tópicos populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="block p-4 bg-zinc-50 hover:bg-zinc-100">
              Como corrigir problemas de som em fones bluetooth
            </a>
            <a href="#" className="block p-4 bg-zinc-50 hover:bg-zinc-100">
              Resolução de falhas na conexão bluetooth em sistemas automotivos
            </a>
            <a href="#" className="block p-4 bg-zinc-50 hover:bg-zinc-100">
              Atualizações de firmware para navegação automotiva
            </a>
            <a href="#" className="block p-4 bg-zinc-50 hover:bg-zinc-100">
              Reparos comuns para alto-falantes com distorção
            </a>
            <a href="#" className="block p-4 bg-zinc-50 hover:bg-zinc-100">
              Manutenção preventiva para sistemas de áudio
            </a>
            <a href="#" className="block p-4 bg-zinc-50 hover:bg-zinc-100">
              Diagnóstico de falhas em telas de rádio automotivo
            </a>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-zinc-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Encontre uma assistência</h3>
            </div>
            <p className="text-zinc-600 mb-4">Localize uma assistência técnica especializada próxima a você</p>
            <a href="/contact" className="text-blue-600 hover:underline">Ver assistências</a>
          </div>

          <div className="border border-zinc-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Contate o Suporte</h3>
            </div>
            <p className="text-zinc-600 mb-4">Entre em contato diretamente com nossa equipe de suporte</p>
            <a href="/contact" className="text-blue-600 hover:underline">Contatar</a>
          </div>
        </div>
      </div>
    </main>
  );
}

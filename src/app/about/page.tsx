export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light mb-4">Sobre a <span className="font-medium">AudioAuto Repair</span></h1>
          <p className="text-xl max-w-3xl">
            Somos especialistas em reparos de equipamentos de áudio e eletrônicos automotivos,
            oferecendo serviços de qualidade superior com técnicos altamente qualificados.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">Nossa História</h2>
              <p className="text-zinc-700 mb-4">
                A AudioAuto Repair foi fundada em 2015 por profissionais apaixonados por tecnologia e áudio.
                Com mais de 10 anos de experiência no mercado, nossa equipe combina conhecimento técnico e comprometimento com a satisfação do cliente.
              </p>
              <p className="text-zinc-700 mb-4">
                Começamos como uma pequena loja de reparos de fones de ouvido e, devido à alta qualidade de nossos serviços,
                expandimos nossa atuação para incluir alto-falantes, sistemas de áudio profissional, e posteriormente, toda a gama de eletrônicos automotivos.
              </p>
              <p className="text-zinc-700">
                Hoje, com múltiplas unidades pelo Brasil, continuamos a oferecer serviços de reparo especializados,
                mantendo o compromisso de proporcionar um atendimento personalizado e resultados excepcionais.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/audio-repair.jpg"
                alt="Técnico trabalhando em reparos de equipamentos"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-zinc-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-medium mb-6">Nossa Missão</h2>
            <p className="text-xl text-zinc-700">
              Fornecer serviços de reparo de alta qualidade que prolongam a vida útil dos equipamentos eletrônicos,
              reduzindo o desperdício e promovendo a sustentabilidade através da extensão da vida útil dos produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Qualidade</h3>
              <p className="text-zinc-600 text-center">
                Utilizamos componentes originais e técnicas avançadas para garantir reparos duradouros e equipamentos funcionando como novos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Agilidade</h3>
              <p className="text-zinc-600 text-center">
                Nossos processos são otimizados para oferecer diagnósticos rápidos e tempos de reparo eficientes, minimizando o tempo sem seu equipamento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-center">Garantia</h3>
              <p className="text-zinc-600 text-center">
                Todos os nossos serviços incluem garantia, demonstrando nossa confiança na qualidade dos reparos realizados pela nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium mb-12 text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-zinc-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Carlos Silva</h3>
              <p className="text-zinc-600">Especialista em Áudio</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-zinc-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Ana Oliveira</h3>
              <p className="text-zinc-600">Técnica Automotiva</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-zinc-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Roberto Santos</h3>
              <p className="text-zinc-600">Especialista em Navegação</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-zinc-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Marina Costa</h3>
              <p className="text-zinc-600">Gerente de Atendimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6">Pronto para reparar seu equipamento?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está preparada para diagnosticar e solucionar qualquer problema com seu equipamento de áudio ou eletrônico automotivo.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-sm font-medium hover:bg-blue-50 transition duration-200"
          >
            Entre em contato
          </a>
        </div>
      </section>
    </main>
  );
}

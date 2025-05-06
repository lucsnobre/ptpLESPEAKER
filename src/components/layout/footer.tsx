import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        {/* Footer Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Encontrar uma assistência</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Digite sua localização"
                    className="bg-zinc-800 border border-zinc-700 text-white px-3 py-1 text-sm rounded-sm w-full focus:outline-none focus:border-zinc-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded-sm hover:bg-blue-700">
                    Procurar
                  </button>
                </div>
              </li>
              <li>
                <Link href="/locations" className="text-sm text-zinc-400 hover:text-white">
                  Assistências e distribuidores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Comunidade</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-zinc-400 hover:text-white">
                  Blog de Reparos
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-zinc-400 hover:text-white">
                  Comunidade AudioAuto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Assistência e contato</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/find" className="text-sm text-zinc-400 hover:text-white">
                  Encontrar assistência
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-sm text-zinc-400 hover:text-white">
                  Onde comprar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Footer Links */}
        <div className="border-t border-zinc-800 py-4 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <Link href="/" className="mb-4 inline-block">
                <img
                  src="/images/logos/audioauto-logo.svg"
                  alt="AudioAuto Repair"
                  className="h-6"
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-xs text-zinc-400 hover:text-white">
                POLÍTICA DE PRIVACIDADE
              </Link>
              <Link href="/terms" className="text-xs text-zinc-400 hover:text-white">
                TERMOS DE USO
              </Link>
            </div>
          </div>
          <div className="text-center text-xs text-zinc-500 mt-4">
            © 2025 AUDIOAUTO REPAIR. TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>

        {/* Social Icons (optional) */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="text-zinc-400 hover:text-white" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-zinc-400 hover:text-white" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-zinc-400 hover:text-white" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="https://youtube.com" className="text-zinc-400 hover:text-white" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

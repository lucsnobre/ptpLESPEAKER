"use client";

import Link from "next/link";
import { useState } from "react";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";
import { Search, User, Heart, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logos/logoIntera.png"
              alt="AudioAuto Repair"
              className="h-24 md:h-30 lg:h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-zinc-300">
                Serviços de Áudio
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <DropdownMenuItem asChild>
                  <Link href="/services/headphones" className="flex items-center gap-3">
                    <img src="/images/headphones-icon.png" alt="" className="w-8 h-8" />
                    <span>Fones de Ouvido</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/speakers" className="flex items-center gap-3">
                    <img src="/images/speaker-icon.png" alt="" className="w-8 h-8" />
                    <span>Alto-falantes</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/audio-systems" className="flex items-center gap-3">
                    <img src="/images/audio-system-icon.png" alt="" className="w-8 h-8" />
                    <span>Sistemas de Áudio</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/services/audio">Ver todos serviços de áudio</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-zinc-300">
                Serviços Automotivos
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <DropdownMenuItem asChild>
                  <Link href="/services/car-audio" className="flex items-center gap-3">
                    <img src="/images/car-audio-icon.png" alt="" className="w-8 h-8" />
                    <span>Áudio Automotivo</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/car-navigation" className="flex items-center gap-3">
                    <img src="/images/car-nav-icon.png" alt="" className="w-8 h-8" />
                    <span>Navegação</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/car-electronics" className="flex items-center gap-3">
                    <img src="/images/car-electronics-icon.png" alt="" className="w-8 h-8" />
                    <span>Eletrônicos Automotivos</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/services/automotive">Ver todos serviços automotivos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/support" className="hover:text-zinc-300">
              Suporte
            </Link>

            <Link href="/about" className="hover:text-zinc-300">
              Sobre nós
            </Link>
          </nav>

          {/* Header Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-zinc-300"
              aria-label="Pesquisar"
            >
              <Search size={20} />
            </button>

            {/* User */}
            <Link
              href="/account"
              className="hover:text-zinc-300"
              aria-label="Minha conta"
            >
              <User size={20} />
            </Link>

            {/* Favorites */}
            <Link
              href="/favorites"
              className="hover:text-zinc-300"
              aria-label="Favoritos"
            >
              <Heart size={20} />
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="md:hidden hover:text-zinc-300" aria-label="Menu">
                <Menu size={20} />
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader>
                  <SheetTitle>AudioAuto Repair</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/services/audio" className="p-2 hover:bg-zinc-100 rounded">
                    Serviços de Áudio
                  </Link>
                  <Link href="/services/automotive" className="p-2 hover:bg-zinc-100 rounded">
                    Serviços Automotivos
                  </Link>
                  <Link href="/support" className="p-2 hover:bg-zinc-100 rounded">
                    Suporte
                  </Link>
                  <Link href="/about" className="p-2 hover:bg-zinc-100 rounded">
                    Sobre nós
                  </Link>
                  <Link href="/contact" className="p-2 hover:bg-zinc-100 rounded">
                    Contato
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Box - show when search is clicked */}
      {searchOpen && (
        <div className="border-t border-zinc-800 py-4">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Digite o que você está procurando..."
                className="w-full p-2 pl-10 bg-transparent border-b border-zinc-700 focus:outline-none focus:border-white"
              />
              <Search size={18} className="absolute left-0 text-zinc-400" />
              <button
                onClick={() => setSearchOpen(false)}
                className="ml-4 text-sm text-zinc-400 hover:text-white"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

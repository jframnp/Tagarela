import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-50 font-roboto">
      <header className="bg-purple-600 p-4 sticky top-0 z-10 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_10-szLUwZBSxeostzWWqL6iQXnmatggY7.png"
              alt="Tagarela Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="space-x-4">
            <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-poppins">Sobre Nós</Link>
            <Link href="#contatos" className="text-white hover:text-blue-200 transition-colors font-poppins">Contatos</Link>
            <Link href="#usuario" className="text-white hover:text-blue-200 transition-colors font-poppins">Área do Usuário</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Sobre Nós</h1>
          <p className="text-lg text-purple-700 mb-6">Esta é a página sobre.</p>
          <Link href="/">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">Voltar para a Home</Button>
          </Link>
        </section>
      </main>

      <footer className="bg-purple-600 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">&copy; 2024 Tagarela. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-6 w-6 hover:text-blue-300 transition-colors cursor-pointer" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:text-blue-300 transition-colors cursor-pointer" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <Youtube className="h-6 w-6 hover:text-blue-300 transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

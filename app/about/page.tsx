'use client'

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
            <Link href="/" className="text-white hover:text-blue-200 transition-colors font-poppins">Home</Link>
            <Link href="#mission" className="text-white hover:text-blue-200 transition-colors font-poppins">Nossa Missão</Link>
            <Link href="#team" className="text-white hover:text-blue-200 transition-colors font-poppins">Nossa Equipe</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4 font-poppins">Sobre o Tagarela</h1>
          <p className="text-lg text-purple-700 mb-6">
            O Tagarela é uma plataforma inovadora dedicada a promover a inclusão e o desenvolvimento de crianças,
            com um foco especial no desenvolvimento da fala. Nossa missão é criar ambientes escolares seguros e
            estimulantes, proporcionando atendimento personalizado e monitoramento especializado para cada criança.
          </p>
          <Link href="/">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white font-poppins">Voltar para a Home</Button>
          </Link>
        </section>

        <section id="mission" className="mb-12">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8 font-poppins">Nossa Missão</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-purple-700 mb-4">
                Nossa missão é garantir que todas as crianças tenham acesso a um ambiente de aprendizagem inclusivo
                e estimulante, onde possam desenvolver suas habilidades de comunicação e expressão. Acreditamos que
                cada criança tem um potencial único, e estamos comprometidos em fornecer as ferramentas e o suporte
                necessários para que elas possam florescer.
              </p>
              <p className="text-purple-700">
                Trabalhamos em estreita colaboração com escolas, educadores e famílias para criar soluções
                personalizadas que promovam o sucesso acadêmico, emocional e social dos alunos. Através de métodos
                inovadores de avaliação e atividades adaptadas, garantimos que cada criança receba o apoio adequado
                para seu desenvolvimento integral.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="team" className="mb-12">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8 font-poppins">Nossa Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Felipe Gasparino", role: "Frontend Developer", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/felipe-LtOLMtkvteTnkFSryHJFGe1zRsccCu.png" },
              { name: "João Francisco", role: "Full Stack Developer", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Joao-EM28b91KCQyxBjMndYPdKrHwfrt5sZ.png" },
              { name: "Enrico Spanier", role: "Database Specialist", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/enrico-UadsWK0hsOrmmEVwm8JXXwOazj0GmX.png" },
              { name: "Daniel", role: "Database Specialist", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daniel-rpeMJIpaX36SMAtoLHwvirsHT2Casy.png" },
              { name: "Luiza Sayori", role: "Frontend Blueprint Designer", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luiza-BTqZcrWB58fhsWCxBtaulXMP2FIB3l.png" },
              { name: "Maria Teresa", role: "Blueprint Designer", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maria-ZfW839xeg3Itg46oJlpY9fHR7ApOyS.png" },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2 font-poppins text-purple-700">{member.name}</h3>
                  <p className="text-purple-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
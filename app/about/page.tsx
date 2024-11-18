'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const objectives = [
  {
    title: "Promover a inclusão",
    description: "Criar ambientes escolares seguros e estimulantes, promovendo a interação e a inclusão.",
    color: "bg-purple-100"
  },
  {
    title: "Atender necessidades",
    description: "Monitoramento e acompanhamento especializado, proporcionando atendimento adequado a cada criança.",
    color: "bg-blue-100"
  },
  {
    title: "Desenvolvimento",
    description: "Garantir o desenvolvimento físico, emocional e cognitivo, utilizando métodos de avaliação e atividades.",
    color: "bg-blue-100"
  },
  {
    title: "Parceria com as escolas",
    description: "Oferecer soluções personalizadas que promovam o sucesso acadêmico, emocional e social dos alunos.",
    color: "bg-purple-100"
  }
];

export default function TagarelaLandingPage() {
  const [students, setStudents] = useState(0);
  const [schools, setSchools] = useState(0);
  const [logoSize, setLogoSize] = useState(100);
  const [logoSeparation, setLogoSeparation] = useState(1000);

  useEffect(() => {
    const studentsInterval = setInterval(() => {
      setStudents((prev) => (prev < 1000 ? prev + 1 : prev));
    }, 10);

    const schoolsInterval = setInterval(() => {
      setSchools((prev) => (prev < 50 ? prev + 1 : prev));
    }, 100);

    const logoAnimation = setInterval(() => {
      setLogoSize((prev) => (prev > 50 ? prev - 0.5 : 50));
      setLogoSeparation((prev) => (prev > 0 ? prev - 10 : 0));
    }, 20);

    return () => {
      clearInterval(studentsInterval);
      clearInterval(schoolsInterval);
      clearInterval(logoAnimation);
    };
  }, []);

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
            <span className="text-white text-2xl font-bold font-poppins">Tagarela</span>
          </div>
          <div className="space-x-4">
            <Link href="/about" className="text-white hover:text-blue-200 transition-colors font-poppins">Sobre Nós</Link>
            <a href="#contact-section" className="text-white hover:text-blue-200 transition-colors font-poppins">Contatos</a>
            <Link href="/login" className="text-white hover:text-blue-200 transition-colors font-poppins">Área do Usuário</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="relative overflow-hidden rounded-xl bg-blue-100 p-8 mb-12" aria-labelledby="welcome-heading">
          <div className="relative z-10">
            <h2 id="welcome-heading" className="text-4xl font-bold text-purple-800 mb-4 font-poppins text-center">Bem-vindo ao Tagarela</h2>
            <div className="mt-4 font-poppins text-center text-lg text-purple-700">
              O Tagarela é uma plataforma inovadora dedicada a promover a inclusão e o desenvolvimento de crianças, com um foco especial no desenvolvimento da fala. Nossa missão é criar ambientes escolares seguros e estimulantes, proporcionando atendimento personalizado e monitoramento especializado para cada criança.
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-blue-200 opacity-50 animate-pulse" aria-hidden="true"></div>
        </section>

        <section className="mb-12" aria-labelledby="objectives-heading">
          <h2 id="objectives-heading" className="text-3xl font-bold text-center text-purple-800 mb-8 font-poppins">OBJETIVOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className={`relative overflow-hidden ${objective.color}`}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 font-poppins text-purple-700">{objective.title}</h3>
                  <p className="text-purple-600">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact-section" className="mb-12" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-3xl font-bold text-center text-purple-800 mb-8 font-poppins">Entre em Contato</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-700 mb-1">Nome</label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-700 mb-1">Mensagem</label>
                  <Textarea id="message" placeholder="Sua mensagem" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-poppins">Enviar</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-purple-600 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">&copy; 2024 Tagarela. Todos os direitos reservados. <span className="font-bold">MackLEAPS</span></p>
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

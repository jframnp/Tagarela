'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Youtube, ArrowLeft, ArrowRight } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const objectives = [
  {
    title: "Promover a inclusão",
    description: "Criar ambientes escolares seguros e estimulantes, promovendo a interação e a inclusão.",
    color: "bg-blue-100"
  },
  {
    title: "Atender necessidades",
    description: "Monitoramento e acompanhamento especializado, proporcionando atendimento adequado a cada criança.",
    color: "bg-purple-100"
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
]

export default function TagarelaLandingPage() {
  const [currentObjective, setCurrentObjective] = useState(0)
  const [students, setStudents] = useState(0)
  const [schools, setSchools] = useState(0)
  const [logoSize, setLogoSize] = useState(100)
  const [logoSeparation, setLogoSeparation] = useState(1000)

  useEffect(() => {
    const studentsInterval = setInterval(() => {
      setStudents(prev => (prev < 1000 ? prev + 1 : prev))
    }, 10)

    const schoolsInterval = setInterval(() => {
      setSchools(prev => (prev < 50 ? prev + 1 : prev))
    }, 100)

    const logoAnimation = setInterval(() => {
      setLogoSize(prev => (prev > 50 ? prev - 0.5 : 50))
      setLogoSeparation(prev => (prev > 0 ? prev - 10 : 0))
    }, 20)

    return () => {
      clearInterval(studentsInterval)
      clearInterval(schoolsInterval)
      clearInterval(logoAnimation)
    }
  }, [])

  const nextObjective = () => {
    setCurrentObjective((prev) => (prev + 1) % objectives.length)
  }

  const prevObjective = () => {
    setCurrentObjective((prev) => (prev - 1 + objectives.length) % objectives.length)
  }

  return (
    <div className="min-h-screen bg-blue-50 font-roboto">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap');

        .glow-button {
          --blue: #3B82F6;
          font-size: 15px;
          padding: 0.7em 2.7em;
          letter-spacing: 0.06em;
          position: relative;
          font-family: inherit;
          border-radius: 0.6em;
          overflow: hidden;
          transition: all 0.3s;
          line-height: 1.4em;
          border: 2px solid var(--blue);
          background: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1%, transparent 40%,transparent 60% , rgba(59, 130, 246, 0.1) 100%);
          color: var(--blue);
          box-shadow: inset 0 0 10px rgba(59, 130, 246, 0.4), 0 0 9px 3px rgba(59, 130, 246, 0.1);
        }

        .glow-button:hover {
          color: #93C5FD;
          box-shadow: inset 0 0 10px rgba(59, 130, 246, 0.6), 0 0 9px 3px rgba(59, 130, 246, 0.2);
        }

        .glow-button:before {
          content: "";
          position: absolute;
          left: -4em;
          width: 4em;
          height: 100%;
          top: 0;
          transition: transform .4s ease-in-out;
          background: linear-gradient(to right, transparent 1%, rgba(59, 130, 246, 0.1) 40%,rgba(59, 130, 246, 0.1) 60% , transparent 100%);
        }

        .glow-button:hover:before {
          transform: translateX(15em);
        }
      `}</style>
      
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
        <section className="relative overflow-hidden rounded-xl bg-blue-100 p-8 mb-12" aria-labelledby="welcome-heading">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center mb-8 h-40">
              <div 
                className="text-6xl sm:text-8xl md:text-9xl font-bold text-purple-500 font-poppins flex items-center"
                style={{
                  fontSize: `${logoSize}px`,
                }}
              >
                <span style={{ transform: `translateX(-${logoSeparation}px)` }}>TAGA</span>
                <span style={{ transform: `translateX(${logoSeparation}px)` }}>RELA</span>
              </div>
              <Link href="/about">
                <button className="glow-button mt-4 font-poppins">
                  Saiba Mais
                </button>
              </Link>
            </div>
            <h2 id="welcome-heading" className="text-4xl font-bold text-purple-800 mb-4 font-poppins text-center">Bem-vindo ao Tagarela</h2>
            <p className="text-xl text-purple-700 mb-6 text-center">Promovendo inclusão e desenvolvimento para todas as crianças, com foco especial no desenvolvimento da fala</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-blue-200 opacity-50 animate-pulse" aria-hidden="true"></div>
        </section>

        <section className="mb-12" aria-labelledby="objectives-heading">
          <h2 id="objectives-heading" className="text-3xl font-bold text-center text-purple-800 mb-8 font-poppins">OBJETIVOS</h2>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className={`${objectives[currentObjective].color} p-6 rounded-lg transition-all duration-500 transform`}>
                <h3 className="text-2xl font-bold mb-4 font-poppins text-purple-700">{objectives[currentObjective].title}</h3>
                <p className="text-purple-600">{objectives[currentObjective].description}</p>
              </div>
            </CardContent>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button variant="outline" size="icon" onClick={prevObjective} className="rounded-full" aria-label="Previous objective">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button variant="outline" size="icon" onClick={nextObjective} className="rounded-full" aria-label="Next objective">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </section>

        <section className="mb-12" aria-labelledby="impact-heading">
          <h2 id="impact-heading" className="text-3xl font-bold text-center text-purple-800 mb-8 font-poppins">Nosso Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 font-poppins text-purple-700">Estudantes Atendidos</h3>
                <p className="text-4xl font-bold text-purple-500 font-poppins">{students}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 font-poppins text-purple-700">Escolas Parceiras</h3>
                <p className="text-4xl font-bold text-purple-500 font-poppins">{schools}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="contact-heading">
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
  )
}

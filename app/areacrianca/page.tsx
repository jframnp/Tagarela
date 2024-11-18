'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, MessageSquare, User, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ChildProfile() {
  const [activeTab, setActiveTab] = useState('PÁGINA INICIAL')

  const child = {
    name: 'Aline Ferreira',
    age: 1,
    class: '1A',
    photo: '/placeholder.svg?height=80&width=80'
  }

  return (
    <div className="min-h-screen bg-[#f5f2e9] font-roboto">
      <header className="bg-purple-600 p-4 flex justify-between items-center">
        <nav className="space-x-4">
          {['PÁGINA INICIAL', 'QUESTIONÁRIOS'].map((tab) => (
            <button
              key={tab}
              className={`font-semibold ${
                activeTab === tab ? 'text-blue-200 underline' : 'text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 text-white" />
          <MessageSquare className="h-6 w-6 text-white" />
          <User className="h-6 w-6 text-white" />
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6 text-purple-800 font-poppins">PERFIL DA CRIANÇA</h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={child.photo}
                alt={child.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-semibold text-purple-700">{child.name}</h2>
                <p className="text-purple-600">{child.age} ano</p>
                <p className="text-purple-600">Sala {child.class}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Pais/responsáveis</h3>
                <div className="space-y-2">
                  <Input placeholder="Nome Sobrenome" />
                  <Input placeholder="Nome Sobrenome" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Cuidador</h3>
                <Input placeholder="Nome Sobrenome" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Alertas</h3>
                <Textarea placeholder="Insira quaisquer alertas ou informações importantes aqui" rows={4} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Atividades</h3>
                <Textarea placeholder="Liste as atividades da criança aqui" rows={4} />
              </div>

              <Button className="w-full flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Relatório de desenvolvimento</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
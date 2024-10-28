'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, MessageSquare, User, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Label from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('PÁGINA INICIAL')

  return (
    <div className="min-h-screen bg-[#f5f1e8] font-roboto">
      <header className="bg-purple-600 p-4 flex justify-between items-center">
        <nav className="space-x-4">
          {['PÁGINA INICIAL', 'QUESTIONÁRIOS'].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              className={`font-semibold text-white hover:bg-purple-700 hover:text-white transition-colors ${
                activeTab === tab ? 'bg-purple-700' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 text-white cursor-pointer hover:text-blue-200 transition-colors" />
          <MessageSquare className="h-6 w-6 text-white cursor-pointer hover:text-blue-200 transition-colors" />
          <User className="h-6 w-6 text-white cursor-pointer hover:text-blue-200 transition-colors" />
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6 text-purple-800 font-poppins">PERFIL DO FUNCIONÁRIO</h1>

        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div>
              <CardTitle className="text-2xl text-purple-800 font-poppins">Ana Santos de Almeida</CardTitle>
              <p className="text-gray-600">Professor</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="birthdate">Data de nascimento</Label>
                <Input id="birthdate" value="26/10/1975" readOnly className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" value="anasantos@gmail.com" readOnly className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" value="(11) 91308-2409" readOnly className="mt-1" />
              </div>
              <div>
                <Label htmlFor="workplace">Local de trabalho</Label>
                <Input id="workplace" value="Creche Jardim da Alegria - Sala 1A" readOnly className="mt-1" />
              </div>
            </div>
            <div className="mt-6">
              <Label htmlFor="observations">Observações registradas</Label>
              <Textarea id="observations" className="mt-1" rows={4} />
            </div>
            <div className="mt-6">
              <Button className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Relatório de desenvolvimento
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Baby, School, FileText } from "lucide-react"
import Layout from '@/components/view/areagerente'

// Mock data para exemplo
const dashboardData = {
  totalCreches: 4,
  totalCriancas: 120,
  totalFuncionarios: 25,
  totalRelatorios: 45,
  crechesMaisRecentes: [
    { id: 1, nome: 'Jardim da Alegria', criancas: 30 },
    { id: 2, nome: 'Creche Arco-Íris', criancas: 25 },
    { id: 3, nome: 'Pequenos Exploradores', criancas: 35 },
  ],
  relatoriosRecentes: [
    { id: 1, creche: 'Jardim da Alegria', data: '2024-03-15', tipo: 'Comportamento' },
    { id: 2, creche: 'Creche Arco-Íris', data: '2024-03-14', tipo: 'Desenvolvimento' },
    { id: 3, creche: 'Pequenos Exploradores', data: '2024-03-13', tipo: 'Outros' },
  ]
}

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-blue-50 font-roboto">
      <Layout>
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-purple-800">Dashboard</h1>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex items-center p-6">
                <School className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total de Creches</p>
                  <p className="text-2xl font-bold text-purple-800">{dashboardData.totalCreches}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex items-center p-6">
                <Baby className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total de Crianças</p>
                  <p className="text-2xl font-bold text-purple-800">{dashboardData.totalCriancas}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex items-center p-6">
                <Users className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total de Funcionários</p>
                  <p className="text-2xl font-bold text-purple-800">{dashboardData.totalFuncionarios}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex items-center p-6">
                <FileText className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total de Relatórios</p>
                  <p className="text-2xl font-bold text-purple-800">{dashboardData.totalRelatorios}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Seções de Informações */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Creches Recentes */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Creches Mais Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.crechesMaisRecentes.map((creche) => (
                    <div key={creche.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{creche.nome}</span>
                      <span className="text-sm text-gray-600">{creche.criancas} crianças</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Relatórios Recentes */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Relatórios Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.relatoriosRecentes.map((relatorio) => (
                    <div key={relatorio.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-700">{relatorio.creche}</p>
                        <p className="text-sm text-gray-600">{relatorio.tipo}</p>
                      </div>
                      <span className="text-sm text-gray-600">{relatorio.data}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </Layout>
    </div>
  )
}

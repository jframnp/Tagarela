'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserProfile {
  name: string;
  email: string;
  login: string;
  cpf: string;
  rg: string;
}

export default function HomePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:8080/manager/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

        if (response.ok) {
          const data = await response.json()
          setProfile(data)
        }
      } catch (error) {
        console.error('Erro ao buscar perfil:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-200">
            Dashboard do Gerente
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-300">Bem-vindo,</p>
              <p className="font-semibold text-purple-700 dark:text-purple-300">{profile?.name}</p>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src="" />
              <AvatarFallback className="bg-purple-600 text-white">
                {profile?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card de Informações Pessoais */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                Informações Pessoais
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Nome</p>
                  <p className="font-medium">{profile?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CPF</p>
                  <p className="font-medium">{profile?.cpf}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">RG</p>
                  <p className="font-medium">{profile?.rg}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de Informações de Conta */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                Informações de Conta
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Login</p>
                  <p className="font-medium">{profile?.login}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium">{profile?.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de Estatísticas */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                Estatísticas
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Total de Vendas</span>
                  <span className="font-bold text-purple-600">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Clientes Atendidos</span>
                  <span className="font-bold text-purple-600">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Produtos Vendidos</span>
                  <span className="font-bold text-purple-600">0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Atividades Recentes */}
        <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader className="pb-4">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
              Atividades Recentes
            </h2>
          </CardHeader>
          <CardContent>
            <div className="text-center text-gray-500 dark:text-gray-400 py-4">
              Nenhuma atividade recente para exibir.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
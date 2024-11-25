'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, MessageSquare, User, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ManagerSettings() {
  const [activeTab, setActiveTab] = useState('CONFIGURAÇÕES');
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f5f1e8] font-roboto">
      <header className="bg-purple-600 p-4 flex justify-between items-center">
        <nav className="space-x-4">
          {['CONFIGURAÇÕES', 'FUNCIONÁRIOS'].map((tab) => (
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
        <h1 className="text-3xl font-bold mb-6 text-purple-800 font-poppins">CONFIGURAÇÕES</h1>

        <div className="space-y-6">
          {/* Acesso ao perfil do funcionário */}
          <Card>
            <CardHeader className="flex items-center gap-4 pb-2">
              <Settings className="w-8 h-8 text-purple-600" />
              <CardTitle className="text-2xl text-purple-800 font-poppins">
                Configurações gerais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Personalize as configurações gerais do sistema e acesse funcionalidades específicas.
              </p>
              <Button
                onClick={() => router.push('/areagerente/perfil-funcionario')}
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                Ir para o Perfil do Funcionário
              </Button>
            </CardContent>
          </Card>

          {/* Outras configurações */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-800 font-poppins">Notificações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Gerencie as notificações do sistema e preferências de alertas.</p>
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Configurar notificações
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

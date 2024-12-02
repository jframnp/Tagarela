'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/view/areagerente';

export default function ConfiguracoesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-50 font-roboto">
      <Layout>
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <h1 className="text-3xl font-bold mb-6 text-purple-800 font-poppins">
            CONFIGURAÇÕES
          </h1>

          <div className="space-y-6">
            {/* Acesso ao perfil do funcionário */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
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
                  className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  Ir para o Perfil do Funcionário
                </Button>
              </CardContent>
            </Card>

            {/* Notificações */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800 font-poppins">
                  Notificações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Gerencie as notificações do sistema e preferências de alertas.
                </p>
                <Button 
                  className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  Configurar notificações
                </Button>
              </CardContent>
            </Card>

            {/* Segurança */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800 font-poppins">
                  Segurança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Gerencie as configurações de segurança da sua conta.
                </p>
                <Button 
                  className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  Configurações de Segurança
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </Layout>
    </div>
  );
}


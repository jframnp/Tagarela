'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/view/areagerente';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isMenuExpanded, setIsMenuExpanded] = useState(true)
  const [userMenuVisible, setUserMenuVisible] = useState(false)

  const menuItems = [
    { label: 'Página Inicial', href: '/areagerente/home' },
    { label: 'Creches', href: '/areagerente/creches' },
    { label: 'Relatórios', href: '/areagerente/relatorios' },
    { label: 'Configurações', href: '/areagerente/configuracoes' },
  ]

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    router.push('/login') // Redireciona para a página de login
  }

  return (
    <div className="flex h-screen bg-white dark:bg-gray-100">
      <aside className={`${isMenuExpanded ? 'w-64' : 'w-20'} bg-purple-600 text-white flex flex-col transition-all duration-300`}>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_10-szLUwZBSxeostzWWqL6iQXnmatggY7.png"
              alt="Tagarela Logo"
              width={40}
              height={40}
            />
            {isMenuExpanded && <span className="font-bold text-white text-xl">CRECHES</span>}
          </div>
          <Button
            variant="ghost"
            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
            className="text-white"
          >
            {isMenuExpanded ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="block w-full text-left py-2 px-4 rounded hover:bg-purple-700"
              onClick={() => router.push(item.href)}
            >
              {isMenuExpanded ? item.label : item.label.charAt(0)}
            </Button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-purple-600 text-white flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <div className="relative flex items-center space-x-4">
            <Bell className="h-6 w-6 cursor-pointer hover:text-blue-200 transition-colors" />
            
            <div className="relative">
              <button
                onClick={() => setUserMenuVisible(!userMenuVisible)}
                className="p-2 bg-purple-600 rounded-full hover:bg-purple-500"
              >
                <User className="h-6 w-6 cursor-pointer" />
              </button>
              
              {userMenuVisible && (
                <div className="absolute top-10 right-0 bg-white text-purple-700 rounded-lg shadow-lg p-2 w-48">
                  <Link href="/areagerente/perfil-funcionario">
                    <div className="py-2 px-4 hover:bg-purple-200 rounded">Perfil</div>
                  </Link>
                  <div 
                    onClick={handleLogout}
                    className="py-2 px-4 hover:bg-purple-200 rounded cursor-pointer"
                  >
                    Sair
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

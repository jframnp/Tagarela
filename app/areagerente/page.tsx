'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, User, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isMenuExpanded, setIsMenuExpanded] = useState(true) // Controla se o menu está expandido
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const menuItems = [
    { label: 'Página Inicial', href: '/home' },
    { label: 'Creches', href: '/creches' },
    { label: 'Relatórios', href: '/relatorios' },
    { label: 'Configurações', href: '/configuracoes' },
  ]

  const handleLogout = () => {
    // Implement logout functionality here
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-white dark:bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isMenuExpanded ? 'w-64' : 'w-20'
        } bg-purple-600 text-white flex flex-col transition-all duration-300`}
      >
        {/* Logo + Toggle */}
        <div className="p-4 flex justify-between items-center">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => router.push('/home')}
          >
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

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`block w-full text-left py-2 px-4 rounded hover:bg-purple-700 ${
                isMenuExpanded ? 'text-base' : 'text-sm'
              }`}
              onClick={() => router.push(item.href)}
            >
              {isMenuExpanded ? item.label : item.label.charAt(0)}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-purple-600 text-white flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 cursor-pointer hover:text-blue-200 transition-colors" />
            <div className="relative">
              <User
                className="h-6 w-6 cursor-pointer hover:text-blue-200 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => router.push('/perfil')}
                  >
                    Perfil
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => router.push('/configuracoes')}
                  >
                    Configurações
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isMenuExpanded, setIsMenuExpanded] = useState(true) // Controls whether the menu is expanded
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const menuItems = [
    { label: 'Página Inicial', href: '/areagerente' },
    { label: 'Creches', href: '/areagerente/creches' },
    { label: 'Relatórios', href: '/areagerente/relatorios' },
    { label: 'Configurações', href: '/areagerente/configuracoes' },
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
            aria-label={isMenuExpanded ? 'Minimize menu' : 'Expand menu'}
          >
            {isMenuExpanded ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button
                variant="ghost"
                className={`block w-full text-left py-2 px-4 rounded hover:bg-purple-700 ${
                  isMenuExpanded ? 'text-base' : 'text-sm'
                }`}
                aria-label={item.label}
              >
                {isMenuExpanded ? item.label : item.label.charAt(0)}
              </Button>
            </Link>
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
                aria-label="User menu"
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded">
                  <Link href="/perfil">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      aria-label="Profile"
                    >
                      Perfil
                    </button>
                  </Link>
                  <Link href="/configuracoes">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      aria-label="Settings"
                    >
                      Configurações
                    </button>
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    onClick={handleLogout}
                    aria-label="Logout"
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

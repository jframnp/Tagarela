"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link' // Importe o Link

export default function LoginArea() {
  const [isLogin, setIsLogin] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMode = () => setIsLogin(!isLogin)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted', { email, password, name })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4 transition-colors duration-500 relative overflow-hidden">
      {/* Static smaller red "T" in the background */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          transform: 'rotate(45deg)',
          zIndex: 0,
        }}
      >
        <span className="text-red-500 text-[45vw] font-bold opacity-5 select-none">
          T
        </span>
      </div>

      {/* Retornar button */}
      <Link href="/">  {/* Envolva com o Link */}
        <button className="absolute top-4 left-4 text-sm py-2 px-4 font-medium bg-gray-800 text-white border-none rounded-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600">
          <span className="relative z-10">Retornar</span>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-purple-500 opacity-30 transition-all duration-500 ease-in-out group-hover:w-56 group-hover:h-56"></div>
        </button>
      </Link>

      <Card className="w-full max-w-md overflow-hidden relative z-10">
        <CardContent className="p-6">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-2 font-poppins">
              {isLogin ? 'Login' : 'Registrar'}
            </h2>
            <p className="text-sm text-purple-500 dark:text-purple-400 font-poppins">
              {isLogin ? 'Bem Vindo de Volta!' : 'Junte-se ao Tagarela hoje!'}
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
            />
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-poppins transition-colors duration-300"
            >
              {isLogin ? 'Entrar' : 'Registrar'}
            </Button>
          </form>

          <div className="mt-6 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={toggleMode}
              className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-poppins"
            >
              {isLogin ? (
                <><UserPlus className="mr-2 h-4 w-4" /> Registrar</>
              ) : (
                <><LogIn className="mr-2 h-4 w-4" /> Entrar</>
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

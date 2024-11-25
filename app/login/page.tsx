'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginArea() {
  const [isLogin, setIsLogin] = useState(true)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter() // Usado para redirecionar

  const toggleMode = () => setIsLogin(!isLogin)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (login.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.')
      return
    }

    try {
      const response = await axios.post('http://localhost:8080/manager/login', {
        login,
        password,
      })

      if (response.data && response.data.isValid) { // Checa se a resposta é válida
        // Redireciona para a área de gerente
        router.push('/areagerente')
      } else {
        alert('Login inválido')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro ao conectar à API:', error.message)
      } else {
        console.error('Erro inesperado:', error)
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ transform: 'rotate(45deg)', zIndex: 0 }}>
        <span className="text-red-500 text-[45vw] font-bold opacity-5 select-none">T</span>
      </div>

      <Card className="w-full max-w-md overflow-hidden relative z-10">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-2 font-poppins">
              Login
            </h2>
            <p className="text-sm text-purple-500 dark:text-purple-400 font-poppins">
              Bem-vindo de volta!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="email"
              id="login"
              onChange={(e) => setLogin(e.target.value)}
              className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
            />
            <Input
              type="password"
              placeholder="Senha"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:border-purple-500 dark:focus:border-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
            />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-poppins transition-colors duration-300">
              Entrar
            </Button>
          </form>

          <div className="mt-6 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={toggleMode}
              className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-poppins"
            >
              Esqueci minha senha...
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { LogOut } from 'lucide-react'
import Link from 'next/link' // Importe o Link

export default function LoginArea() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const toggleMode = () => setIsLogin(!isLogin)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted', { email, password, name })
  };


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
      <Link href="/home">  {/* Envolva com o Link */}
        <button className="flex absolute top-4 left-4 text-sm py-2 px-4 font-medium  text-white border-none rounded-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 dark:hover:bg-blue-700">
          <div className="flex justify-around" >
            <LogOut />
          </div>
        </button>
      </Link>

      <Card className="w-full max-w-md overflow-hidden relative z-10">
        <CardContent className="p-6">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-2 font-poppins">
              Login
            </h2>
            <p className="text-sm text-purple-500 dark:text-purple-400 font-poppins">
              Bem Vindo de Volta!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
  );
};


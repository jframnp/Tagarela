'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LoginArea() {
  const [isLogin, setIsLogin] = useState(true)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // Campo adicional para cadastro
  const [rg, setRG] = useState('') // Campo adicional para cadastro
  const [cpf, setCpf] = useState('') // Campo adicional para cadastro
  const [email, setEmail] = useState('') // Campo adicional para cadastro
  const [promptMessage, setPromptMessage] = useState<string | null>(null) // Mensagem do prompt
  const router = useRouter()

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setLogin('')
    setPassword('')
    setName('')
    setRG('')
    setCpf('')
    setEmail('')
    setPromptMessage(null) // Limpa o prompt ao mudar de modo
  }

  const showPrompt = (message: string) => {
    setPromptMessage(message)
    setTimeout(() => setPromptMessage(null), 3000) // Oculta o prompt após 3 segundos
  }
  const api = axios.create({  
    baseURL: 'http://localhost:8080',  
    timeout: 5000,  
    headers: {  
      'Content-Type': 'application/json'  
    }  
  }); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      if (isLogin) {
        const response = await api.post('/manager/login', {
          login: login,
          password: password
        });
  
        if (response.status === 200) {
          showPrompt('Login bem-sucedido!')
          router.push('/areagerente')
        } else {
          showPrompt('Login inválido. Verifique suas credenciais.')
        }
      }
      // ... resto do código
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          showPrompt('Login ou senha incorretos.')
        } else {
          showPrompt('Erro ao conectar à API. Tente novamente.')
        }
        console.error('Erro ao conectar à API:', error.message)
      } else {
        showPrompt('Erro inesperado. Tente novamente.')
        console.error('Erro inesperado:', error)
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4 transition-colors duration-500 relative overflow-hidden">
      {/* Botão de voltar para home */}
      <Link href="/" className="absolute top-4 left-4 z-20">
        <Button
          variant="ghost"
          className="rounded-full p-3 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
        >
          <ArrowLeft className="h-6 w-6 text-purple-600 dark:text-purple-300" />
        </Button>
      </Link>

      {/* Fundo decorativo com "T" */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ transform: 'rotate(45deg)', zIndex: 0 }}>
        <span className="text-red-500 text-[45vw] font-bold opacity-5 select-none">T</span>
      </div>

      {/* Prompt animado */}
      {promptMessage && (
        <div className="absolute top-8 bg-purple-600 dark:bg-purple-400 text-white px-6 py-3 rounded-md shadow-lg animate-bounce z-50">
          {promptMessage}
        </div>
      )}

      {/* Card principal */}
      <Card className="w-full max-w-md overflow-hidden relative z-10">
        <CardContent className="p-6">
          {/* Título e descrição */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-2 font-poppins">
              {isLogin ? 'Login' : 'Cadastro Gerente'} 
            </h2>
            <p className="text-sm text-purple-500 dark:text-purple-400 font-poppins">
              {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta para começar'}
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
                />
                <Input
                  type="number"
                  placeholder="RG"
                  value={rg}
                  onChange={(e) => setRG(e.target.value)}
                  className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
                />
                <Input
                  type="number"
                  placeholder="CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
                />
                <Input
                  type="text"
                  placeholder="Login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
                />
              </>
            )}

            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-blue-50 dark:bg-blue-800 border-purple-300 dark:border-purple-600 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 text-purple-800 dark:text-purple-200 placeholder-purple-400 dark:placeholder-purple-500"
            />

            {/* Botão de Login ou Cadastro */}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-500 text-white font-poppins py-2 rounded-md shadow-lg transition-all duration-200"
            >
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>
          </form>

          {/* Alternar entre Login e Cadastro */}
          <div className="mt-6 flex justify-center">
            <Button
              variant="link"
              onClick={toggleMode}
              className="text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-poppins"
            >
              {isLogin ? 'Ainda não tem uma conta? Cadastre-se!' : 'Já tem uma conta? Faça login!'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

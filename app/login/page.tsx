'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import axios from 'axios'
import { useRouter } from 'next/navigation'

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
        // Lógica de login (mantida como está, pois já está funcionando)
        const loginFormatado = login.trim()
        const senhaFormatada = password.trim()

        if (!loginFormatado || !senhaFormatada) {
          showPrompt('Por favor, preencha todos os campos')
          return
        }

        const dadosLogin = {
          login: loginFormatado,
          password: senhaFormatada
        }

        console.log('Tentando login com:', dadosLogin)

        const response = await fetch('http://localhost:8080/manager/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(dadosLogin)
        })

        const textoResposta = await response.text()
        console.log('Resposta completa:', {
          status: response.status,
          texto: textoResposta
        })

        if (response.status === 401) {
          showPrompt('Login ou senha incorretos. Por favor, verifique suas credenciais.')
          return
        }

        if (response.ok) {
          try {
            const data = JSON.parse(textoResposta)
            if (data.token) {
              localStorage.setItem('token', data.token)
              showPrompt('Login bem-sucedido!')
              router.push('/areagerente')
            } else {
              showPrompt('Token não encontrado na resposta')
            }
          } catch (e) {
            showPrompt('Erro ao processar resposta do servidor')
          }
        }
      } else {
        // Lógica de cadastro atualizada
        // Validação dos campos
        if (!name || !rg || !cpf || !login || !email || !password) {
          showPrompt('Por favor, preencha todos os campos')
          return
        }

        const dadosCadastro = {
          name: name.trim(),
          rg: rg.trim(),
          cpf: cpf.trim(),
          login: login.trim(),
          email: email.trim(),
          password: password.trim()
        }

        console.log('Dados de cadastro sendo enviados:', dadosCadastro)

        const response = await fetch('http://localhost:8080/manager/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dadosCadastro)
        })

        console.log('Status da resposta de cadastro:', response.status)
        
        const textoRespostaCadastro = await response.text()
        console.log('Resposta do cadastro:', textoRespostaCadastro)

        if (response.ok) {
          showPrompt('Cadastro realizado com sucesso!')
          setIsLogin(true) // Volta para a tela de login
        } else {
          try {
            const errorData = JSON.parse(textoRespostaCadastro)
            showPrompt(errorData.message || 'Erro ao cadastrar. Tente novamente.')
          } catch (e) {
            showPrompt(textoRespostaCadastro || 'Erro ao cadastrar. Tente novamente.')
          }
        }
      }
    } catch (error) {
      console.error('Erro completo:', error)
      showPrompt('Erro ao processar a requisição. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4 transition-colors duration-500 relative overflow-hidden">
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

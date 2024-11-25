'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Baby } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for a specific school
const schoolDetails = {
  id: 1,
  name: 'Jardim da Alegria',
  employees: 5,
  toddlers: 20,
  description: 'Uma creche acolhedora que promove o aprendizado e diversão para crianças pequenas.',
  address: 'Rua das Flores, 123, Centro, Cidade ABC',
  contact: '11 98765-4321',
  activities: ['Arte e artesanato', 'Contação de histórias', 'Jogos ao ar livre'],
}

export default function CrecheDetailsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-blue-50 font-roboto">
      <header className="bg-purple-600 p-4 flex justify-between items-center">
        <Button
          variant="ghost"
          className="font-semibold text-white hover:bg-purple-700 hover:text-white transition-colors"
          onClick={() => router.push('/areagerente/creches')}
        >
          Voltar
        </Button>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-800 font-poppins text-3xl">{schoolDetails.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">{schoolDetails.description}</p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Users />
                  <span>{schoolDetails.employees} funcionários</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Baby />
                  <span>{schoolDetails.toddlers} crianças</span>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-800">Endereço:</h2>
                <p className="text-gray-600">{schoolDetails.address}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-800">Contato:</h2>
                <p className="text-gray-600">{schoolDetails.contact}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-800">Atividades:</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {schoolDetails.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

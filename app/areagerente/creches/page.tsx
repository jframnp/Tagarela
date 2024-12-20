'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, MessageSquare, User, Users, Baby, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Label from "@/components/ui/label"
import Layout from '@/components/view/areagerente'

// Mock data for schools
const schools = [
    { id: 1, name: 'Jardim da Alegria', employees: 5, toddlers: 20 },
    { id: 2, name: 'Creche Arco-Íris', employees: 8, toddlers: 30 },
    { id: 3, name: 'Pequenos Exploradores', employees: 6, toddlers: 25 },
    { id: 4, name: 'Cantinho Feliz', employees: 7, toddlers: 28 },
]

export default function CrechesPage() {
    const [activeTab, setActiveTab] = useState('CRECHES')
    const [selectedCreche, setSelectedCreche] = useState(0)
    const router = useRouter()

    const handleCrecheClick = (id: number) => {
        router.push(`/areagerente/creches/${id}`)
    }

    const handleSubmitChild = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você pode adicionar lógica para enviar os dados para o backend
        console.log("Criança adicionada na creche:", selectedCreche)
        setSelectedCreche(0)
    }

    return (
        <div className="min-h-screen bg-blue-50 font-roboto">
            <Layout>
                <main className="container mx-auto mt-8 p-4">
                    <h1 className="text-3xl font-bold mb-6 text-purple-800 font-poppins">Creches Cadastradas</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {schools.map((school) => (
                            <div key={school.id} className="relative overflow-hidden group">
                                <Card className="h-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-16">
                                    <CardHeader>
                                        <CardTitle className="text-purple-800 font-poppins">{school.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">Clique para ver detalhes</p>
                                    </CardContent>
                                </Card>
                                <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <Users className="mr-2" />
                                            <span>{school.employees} funcionários</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Baby className="mr-2" />
                                            <span>{school.toddlers} crianças</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button
                                            className="flex-1 bg-white text-purple-600 hover:bg-purple-100"
                                            onClick={() => handleCrecheClick(school.id)}
                                        >
                                            Ver Detalhes
                                        </Button>
                                        <Dialog>
                                            <DialogTrigger>
                                                <Button
                                                    className="bg-green-500 hover:bg-green-600"
                                                    onClick={() => setSelectedCreche(school.id)}
                                                >
                                                    <Plus className="mr-2 h-4 w-4" /> Adicionar Criança
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Adicionar Nova Criança</DialogTitle>
                                                </DialogHeader>
                                                <form onSubmit={handleSubmitChild}>
                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="name" className="text-right">
                                                                Nome
                                                            </Label>
                                                            <Input id="name" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="age" className="text-right">
                                                                Idade
                                                            </Label>
                                                            <Input id="age" type="number" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="guardian" className="text-right">
                                                                Responsável
                                                            </Label>
                                                            <Input id="guardian" className="col-span-3" />
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <Button type="submit">Adicionar Criança</Button>
                                                    </DialogFooter>
                                                </form>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </Layout>
        </div>
    )
}

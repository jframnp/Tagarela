'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/view/areagerente'

// Mock data for schools and children
const schools = [
    { id: 1, name: 'Jardim da Alegria', children: ['Ana', 'Lucas', 'Maria'] },
    { id: 2, name: 'Creche Arco-Íris', children: ['João', 'Carla', 'Pedro'] },
    { id: 3, name: 'Pequenos Exploradores', children: ['Sofia', 'Rafael'] },
    { id: 4, name: 'Cantinho Feliz', children: ['Gabriel', 'Laura'] },
]

export default function RelatorioCriancaPage() {
    const [selectedReason, setSelectedReason] = useState('')
    const [selectedSchool, setSelectedSchool] = useState('')
    const [selectedChild, setSelectedChild] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()

    const handleSubmitReport = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Relatório enviado:', {
            razão: selectedReason,
            descrição: description,
            creche: selectedSchool,
            criança: selectedChild,
        })
        // Limpar os campos após o envio
        setSelectedReason('')
        setSelectedSchool('')
        setSelectedChild('')
        setDescription('')
    }

    const goToChildArea = () => {
        router.push('/areacrianca')
    }

    return (
        <div className="min-h-screen bg-blue-50 font-roboto">
            <Layout>
                {/* Content */}
                <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Relatório da Criança</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Preencha os detalhes abaixo para registrar um relatório da criança.
                    </p>

                    <form onSubmit={handleSubmitReport} className="space-y-6">
                        {/* Seleção de Razão */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Selecione a razão
                            </label>
                            <select
                                value={selectedReason}
                                onChange={(e) => setSelectedReason(e.target.value)}
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
                            >
                                <option value="">Escolha uma razão</option>
                                <option value="Comportamento">Comportamento</option>
                                <option value="Desenvolvimento">Desenvolvimento</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>

                        {/* Descrição */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descreva o motivo do relatório..."
                            />
                        </div>

                        {/* Seleção de Creche */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Selecione a creche
                            </label>
                            <select
                                value={selectedSchool}
                                onChange={(e) => setSelectedSchool(e.target.value)}
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
                            >
                                <option value="">Escolha uma creche</option>
                                {schools.map((school) => (
                                    <option key={school.id} value={school.name}>
                                        {school.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Seleção de Criança */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Selecione a criança
                            </label>
                            <select
                                value={selectedChild}
                                onChange={(e) => setSelectedChild(e.target.value)}
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
                                disabled={!selectedSchool}
                            >
                                <option value="">Escolha uma criança</option>
                                {schools
                                    .find((school) => school.name === selectedSchool)
                                    ?.children.map((child) => (
                                        <option key={child} value={child}>
                                            {child}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {/* Botões */}
                        <div className="space-y-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                            >
                                Enviar Relatório
                            </button>
                            <button
                                type="button"
                                onClick={goToChildArea}
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Ir para Área da Criança
                            </button>
                        </div>
                    </form>
                </main>
            </Layout>
        </div>
    )
}

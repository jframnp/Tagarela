'use client'

import { useState } from 'react'
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

    return (
        <div className="min-h-screen font-roboto">
            <Layout>
                {/* Content */}
                <main className="flex-1 p-6 overflow-y-auto ">
                    <h2 className="text-2xl font-semibold mb-4 text-purple-900 ">Relatório da Criança</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Preencha os detalhes abaixo para registrar um relatório da criança.
                    </p>

                    <form onSubmit={handleSubmitReport} className="space-y-6">
                        {/* Seleção de Razão */}
                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-2">
                                Selecione a razão
                            </label>
                            <select
                                value={selectedReason}
                                onChange={(e) => setSelectedReason(e.target.value)}
                                className="w-full rounded-lg border-2 border-purple-100 px-4 py-2.5 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-purple-900"
                            >
                                <option value="" className="text-gray-700">Escolha uma razão</option>
                                <option value="Comportamento">Comportamento</option>
                                <option value="Desenvolvimento">Desenvolvimento</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>

                        {/* Descrição */}
                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-2">
                                Descrição
                            </label>
                            <textarea
                                rows={4}
                                className="w-full rounded-lg border-2 border-purple-100 px-4 py-2.5 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-purple-900"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descreva o motivo do relatório..."
                            />
                        </div>

                        {/* Seleções de Creche e Criança */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-purple-900 mb-2">
                                    Selecione a creche
                                </label>
                                <select
                                    value={selectedSchool}
                                    onChange={(e) => setSelectedSchool(e.target.value)}
                                    className="w-full rounded-lg border-2 border-purple-100 px-4 py-2.5 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-purple-900"
                                >
                                    <option value="" className="text-gray-700">Escolha uma creche</option>
                                    {schools.map((school) => (
                                        <option key={school.id} value={school.name}>
                                            {school.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-purple-900 mb-2">
                                    Selecione a criança
                                </label>
                                <select
                                    value={selectedChild}
                                    onChange={(e) => setSelectedChild(e.target.value)}
                                    className="w-full rounded-lg border-2 border-purple-100 px-4 py-2.5 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-purple-900 disabled:bg-gray-50 disabled:text-gray-400"
                                    disabled={!selectedSchool}
                                >
                                    <option value="" className="text-gray-700">Escolha uma criança</option>
                                    {schools
                                        .find((school) => school.name === selectedSchool)
                                        ?.children.map((child) => (
                                            <option key={child} value={child}>
                                                {child}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        {/* Botão de Enviar */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                            >
                                Enviar Relatório
                            </button>
                        </div>
                    </form>
                </main>
            </Layout>
        </div>
    )
}

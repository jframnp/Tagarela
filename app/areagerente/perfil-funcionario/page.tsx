'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/view/areagerente';

export default function PerfilFuncionario() {
    const [name, setName] = useState('João da Silva');
    const [email, setEmail] = useState('joao.silva@example.com');
    const [password, setPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const router = useRouter();

    const handleSaveChanges = () => {
        console.log('Configurações salvas:', { name, email, password });
        setIsEditing(false);
        setPassword(''); // Limpar campo de senha após salvar
    };

    const goToChildArea = () => {
        router.push('/areacrianca');
    };

    return (
        <div className="min-h-screen bg-blue-50 font-roboto">
            <Layout>
                <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Perfil do Funcionário</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Gerencie as configurações do seu perfil abaixo.
                    </p>

                    {/* Formulário de Configurações */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Nome
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={!isEditing}
                                className={`w-full border ${isEditing ? 'border-gray-300 dark:border-gray-700' : 'border-gray-300 opacity-50'} rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900`}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!isEditing}
                                className={`w-full border ${isEditing ? 'border-gray-300 dark:border-gray-700' : 'border-gray-300 opacity-50'} rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900`}
                            />
                        </div>

                        {isEditing && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Nova Senha
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
                                />
                            </div>
                        )}

                        {/* Botões */}
                        <div className="space-y-4">
                            {isEditing ? (
                                <button
                                    type="button"
                                    onClick={handleSaveChanges}
                                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                                >
                                    Salvar Alterações
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                >
                                    Editar Perfil
                                </button>
                            )}
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
    );
}

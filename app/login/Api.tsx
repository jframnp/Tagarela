import React from 'react';
import axios from 'axios';

const ApiButton: React.FC = () => {
  const handleClick = async () => {
    try {
      const response = await axios.get('https://api.exemplo.com/dados'); // Altere para a URL da sua API
      console.log(response.data); // Manipule os dados conforme necessário
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro ao conectar à API:', error.message);
      } else {
        console.error('Erro inesperado:', error);
      }
    }
  };

  return (
    <button onClick={handleClick}>
      Conectar à API
    </button>
  );
};

export default ApiButton;
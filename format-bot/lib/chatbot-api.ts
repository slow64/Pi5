import { apiRequest } from './api';

export const chatbotAPI = {
  ask: (question: string) =>
    apiRequest("https://8000-izp0w9bgmzry9c6ic30m2-78473a43.manusvm.computer/perguntar/", {
      method: 'POST',
      body: JSON.stringify({ texto: question }),
    }, false), // false para não usar o base URL da API de autenticação
};



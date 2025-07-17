// Configuração da API para integração com o backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://3000-ir2eeadlxudgat7qjl2nx-8e6a1c3f.manusvm.computer/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    // Endpoints de usuário
    login: '/user/login',
    register: '/user/register',
    logout: '/user/logout',
    me: '/user/me',
    users: '/user/list',
    
    // Endpoints de mensagem
    messages: '/message',
    createMessage: '/message',
    userMessages: '/message/user',
  }
};

// Função para fazer requisições à API
export const apiRequest = async (endpoint: string, options: RequestInit = {}, useBaseUrl: boolean = true) => {
  const url = useBaseUrl ? `${API_BASE_URL}${endpoint}` : endpoint;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Para incluir cookies de autenticação
  };

  const config = { ...defaultOptions, ...options };
  
  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Funções específicas para cada endpoint
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    apiRequest(apiConfig.endpoints.login, {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
    
  register: (userData: { name: string; email: string; password: string }) =>
    apiRequest(apiConfig.endpoints.register, {
      method: 'POST',
      body: JSON.stringify({
        username: userData.name, // Backend espera 'username', não 'name'
        email: userData.email,
        password: userData.password
      }),
    }),
    
  logout: () =>
    apiRequest(apiConfig.endpoints.logout, {
      method: 'POST',
    }),
    
  getMe: () =>
    apiRequest(apiConfig.endpoints.me),
};

export const messageAPI = {
  getUserMessages: () =>
    apiRequest(apiConfig.endpoints.messages),
    
  createMessage: (messageData: { content: string; sent: boolean }) =>
    apiRequest(apiConfig.endpoints.createMessage, {
      method: 'POST',
      body: JSON.stringify(messageData),
    }),
    
  getAllMessages: () =>
    apiRequest(apiConfig.endpoints.userMessages),
};


# Projeto Pi5  
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)  
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)  
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-brightgreen.svg)  
![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)  
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-lightgreen.svg)   

Este projeto integra três serviços principais:
- **Backend de Autenticação** (Node.js)
- **Backend do Chatbot** (Python - FastAPI)
- **Frontend** (Next.js)

---

## ✅ Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:
- [Node.js](https://nodejs.org/) e npm
- [Python 3.x](https://www.python.org/) e pip
- [MongoDB](https://www.mongodb.com/)
- Unzip (ou qualquer ferramenta para descompactação)

---

## 🚀 Passos para Inicialização

### 1️⃣ Descompactar o Projeto

Descompacte o arquivo `.zip` do projeto recebido.
```bash
unzip projeto-pi5.zip
```

---

### 2️⃣ Iniciar o Servidor MongoDB

Inicie o serviço do MongoDB:
```bash
sudo systemctl start mongod
```

Verifique o status:
```bash
sudo systemctl status mongod
```

Para iniciar automaticamente com o sistema:
```bash
sudo systemctl enable mongod
```

---

### 3️⃣ Backend de Autenticação (Node.js)

```bash
cd backend-auth
npm install
```

Crie o arquivo `.env` dentro da pasta `backend-auth` com o conteúdo:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/pi5_auth
JWT_SECRET=sua_chave_secreta_aqui
```

Inicie o servidor:
```bash
npm start
```

---

### 4️⃣ Backend do Chatbot (Python + FastAPI)

```bash
cd backend-chatbot
pip install -r requirements.txt
```

Baixe o modelo do spaCy:
```bash
python -m spacy download pt_core_news_sm
```

Inicie o servidor Uvicorn:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

### 5️⃣ Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em:
```
http://localhost:3000
```

---

## 🌐 Acessando a Aplicação

Com todos os serviços rodando, acesse o frontend pelo navegador e utilize o sistema!

---

## 📂 Estrutura do Projeto

```
projeto-pi5/
├── backend-auth/
├── backend-chatbot/
├── frontend/
└── README.md
```

Tutorial de Inicialização do Projeto Pi5

Este tutorial irá guiá-lo através dos passos necessários para configurar e executar o projeto Pi5, que inclui um backend de autenticação (Node.js), um backend de chatbot (Python) e um frontend (Next.js).

Pré-requisitos
Antes de começar, certifique-se de ter o seguinte software instalado em seu sistema:

   Node.js e npm: Para o backend de autenticação e o frontend.
   Python 3 e pip: Para o backend do chatbot.
   MongoDB: O banco de dados utilizado pelo projeto.
   Unzip: Para descompactar o arquivo do projeto.

Passos para Inicialização

 
1.	Descompactar o Projeto
Primeiro, descompacte o arquivo
 


que você recebeu. Você pode fazer
 
isso usando o comando	no terminal:


Isso irá criar uma pasta	contendo todos os arquivos do projeto.

2.	Iniciar o Servidor MongoDB
O MongoDB é essencial para o funcionamento do sistema de autenticação e do chatbot. Certifique-se de que o serviço MongoDB esteja em execução. Se você o instalou recentemente, pode iniciá-lo com:


Para verificar o status:
 
 
Se você deseja que o MongoDB inicie automaticamente com o sistema, habilite-o:


3.	Configurar e Iniciar o Backend de Autenticação (Node.js)
1.	Navegue até a pasta do backend de autenticação:

2.	Instale as dependências:

3.	Crie o arquivo de variáveis de ambiente .env :

 
Crie um arquivo chamado
 
na pasta
 
com o seguinte conteúdo:
 

 
4.	Inicie o servidor de autenticação:

Você deverá ver uma mensagem indicando que o servidor está rodando na porta 3000.

4.	Configurar e Iniciar o Backend do Chatbot (Python)
1.	Navegue até a pasta do backend do chatbot:

2.	Instale as dependências Python:

3.	Baixe o modelo de linguagem do spaCy (se ainda não tiver):

 
4.	Inicie o servidor do chatbot:

Você deverá ver uma mensagem indicando que o servidor Uvicorn está rodando na porta 8000.

5.	Configurar e Iniciar o Frontend (Next.js)
1.	Navegue até a pasta do frontend:

2.	Instale as dependências:

3.	Inicie o servidor de desenvolvimento do frontend:

O Next.js geralmente inicia na porta 3000, mas se estiver em uso, ele tentará a
porta 3001. Anote a URL que ele exibir (ex:	).

Acessando a Aplicação
Com todos os serviços em execução, você pode acessar a aplicação frontend no seu navegador	usando	a	URL	fornecida	pelo	Next.js	(por	exemplo,
).

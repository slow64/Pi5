# Projeto Integrador IV
## Dependências

Guia de instalação:

```shell
# Dependências do auth

npm install express mongoose jsonwebtoken bcrypt cookie-parser dotenv

# Dependências chatbot (rode cada linha de cada vez, qualquer coisa crie uma venv, se der algum erro):

pip install fastapi uvicorn nltk spacy pymongo
python -m pip install --upgrade pip
python -m spacy download pt_core_news_sm

# Código pra rodar: 
uvicorn chatbot_mongodb:app --reload

```

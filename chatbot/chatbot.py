from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import spacy

import nltk

from pymongo import MongoClient



client = MongoClient("mongodb://localhost:27017/")
db = client["pi5_db"]

colecao = db["perguntas"]



nltk.download("punkt_tab")

nltk.download("stopwords")



nlp = spacy.load("pt_core_news_sm") #deixa a IA em portugues (https://spacy.io/models/pt) -> lista da IA treinada em pt



app = FastAPI()

origins = [
    "https://3001-izp0w9bgmzry9c6ic30m2-78473a43.manusvm.computer", # Frontend URL
    "https://3003-ir2eeadlxudgat7qjl2nx-8e6a1c3f.manusvm.computer", # Frontend URL
    "http://localhost:3003", # Local development URL
    "http://localhost:3001", # Local development URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pergunta(BaseModel):

    texto: str



class NovaPergunta(BaseModel):

    intencao: str

    perguntas: list

    resposta: str



#processamento do texto para o chatbot funcionar, usa o spacy e nltk

#para remover e corrigir palavras, deixando somente as com grande importancia

def processarTexto(texto):

    doc = nlp(texto.lower())

    palavras = [token.lemma_ for token in doc if not token.is_stop] #linha que permite isso

    return " ".join(palavras)



def identificarIntencao(pergunta):

    palavras = nltk.word_tokenize(pergunta.lower())

    palavras = [p for p in palavras if p not in nltk.corpus.stopwords.words("portuguese")] #remove coisas inuteis, como pontuaçoes, mas nao remove acentos se nao me engano,

#                                                                                           posso adicionar depois qualquer coisa



    todasIntencoes = list(colecao.find({}))



    for item in todasIntencoes:

        for frase in item["perguntas"]:

            if any(p in frase for p in palavras):

                return item

    return None



@app.post("/perguntar/")

async def perguntar(pergunta: Pergunta):

    perguntaProcessada = processarTexto(pergunta.texto)

    intencao = identificarIntencao(perguntaProcessada)



    if intencao:

        return {"resposta": intencao["resposta"]}

    else:

        return {"resposta": "Desculpe, não entendi sua pergunta. Pode reformular?"}



#log de ativação, so confere se da isso quando rodar basicamente

@app.get("/") 

def home():

    return {"message": "Chatbot online."}



@app.post("/cadastrar/")

async def cadastrarPergunta(nova: NovaPergunta):

    colecao.insert_one(nova.dict())

    return {"mensagem": "Pergunta cadastrada com sucesso."}

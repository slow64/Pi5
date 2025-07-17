import express, {Router} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import {readdirSync} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

import {setViews} from "./routes/views.route.js";

const app = express();
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url)); // Adiciona suporte a __dirname no ESM

const viewsDir = "views";
const assetsDir = "assets";
const routesDir = "routes";

dotenv.config();

// Configuração CORS
app.use(cors({
  origin: ["https://3001-izp0w9bgmzry9c6ic30m2-78473a43.manusvm.computer", "https://3003-ir2eeadlxudgat7qjl2nx-8e6a1c3f.manusvm.computer", "http://localhost:3003", "http://localhost:3001", "http://localhost:3000"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.set('views', viewsDir);
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(assetsDir));

//setando as rotas de view
setViews(app);

//carregando as rotas do /api 
async function loadRoutes(){
  const apiRouter = Router();
  const files = readdirSync(join(__dirname, routesDir));

  for(const file of files){
    if(file === "views.route.js") continue;
    
    // Usa caminho relativo com file:// para importação dinâmica
    const modulePath = `./${routesDir}/${file}`;
    const {doRoute} = await import(modulePath);

    doRoute(apiRouter);
  }
  app.use("/api", apiRouter);
}
loadRoutes();

//carregando o mongoose pra possibilitar o resto da aplicaçao
async function connectDatabase(){
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a DB");
  } catch (err) {
    console.error("Erro ao conectar na DB", err);
    process.exit(1);
  }
};
connectDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Pressione Ctrl+C para encerrar o servidor.');
});
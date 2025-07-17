import {Router} from "express";

import {redirectLogin, redirectIfNotAdmin, redirectIfNotAuthenticated} from "../middlewares/auth.middleware.js";

import {verifyToken, verifyIsAdmin} from "../middlewares/auth.middleware.js";
import {UserModel} from "../models/user.model.js";
import {MessageModel} from "../models/message.model.js";

const router = Router();

router.get('/',  redirectLogin, (req, res) => {
  res.render('home');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/recover', (req, res) => {
  res.render('recover');
});

router.get("/chat/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id, { password: 0, __v: 0 });

    if (!user) {
      return res.status(404).render("404", { message: "Usuário não encontrado" });
    }

    const messages = await MessageModel.find(
      { email: user.email },
      { __v: 0 }
    ).sort({ createdAt: 1 });

    const conversation = messages.map(msg => ({
        id: msg._id,
        content: msg.content,
        sent: msg.sent,
        createdAt: msg.createdAt
      }))

    return res.render("chat", {conversation: conversation});
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return res.status(500).render("500", { message: "Erro interno ao buscar usuário" });
  }
});

router.get('/admin', redirectIfNotAdmin, verifyToken, async (req, res) => {
  try {
    const users = await UserModel.find({}, {password: 0});

    return res.render("admin", {users, user: req.user});
  } catch (err) {
    return res.status(500).json({message: "Erro interno no servidor", ok: false})
  }
});

export function setViews(server){
  server.use("/", router);
}

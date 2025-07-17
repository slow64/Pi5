import {UserModel} from "../models/user.model.js";
import {MessageModel} from "../models/message.model.js";

import {signToken} from "../middlewares/auth.middleware.js"

import bcrypt from "bcrypt";

class UserController{
  constructor(){};

  async getUserInfo(req, res){
    try {
      const decoded = req.user;

      if(!decoded){
        return res.status(400).json({
          ok: false,
          message: "Usuário não encontrado"
        })
      }
      const user = await UserModel.findOne({email: req.user.email});

      return res.json({user, ok: true});
    } catch (err) {
      return res.status(500).json({
        message: "Erro interno ao buscar usuário",
        ok: false
      });
    }
  }

  async fetchUserInfo(req, res) {
      try {
        const { id } = req.params;

        const user = await UserModel.findById(id, { 
          password: 0,
          __v: 0
        });

        if (!user) {
          return res.status(404).json({
            message: "Usuário não encontrado",
            ok: false
          });
        }
        const messages = await MessageModel.find(
          { email: user.email },
          { __v: 0 }
        ).sort({ createdAt: 1 });

        const userWithChat = {
          ...user.toObject(),
          chat: messages.map(msg => ({
            id: msg._id,
            content: msg.content,
            sent: msg.sent,
            createdAt: msg.createdAt
          }))
        };

        return res.json({
          data: userWithChat,
          ok: true
        });

      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return res.status(500).json({
          message: "Erro interno ao buscar usuário",
          ok: false
        });
      }
  }


  async deleteUser(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          message: "ID do usuário é obrigatório", 
          ok: false 
        });
      }

      const user = await UserModel.findOne({email});
      if (!user) {
        return res.status(404).json({ 
          message: "Usuário não encontrado", 
          ok: false 
        });
      }

      if (user.role === "admin") {
        return res.status(403).json({
          message: "Não é possível deletar um administrador",
          ok: false
        });
      }

      await UserModel.deleteOne({ email });

      return res.json({ 
        message: "Usuário deletado com sucesso", 
        ok: true 
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ 
        message: "Erro interno no servidor", 
        ok: false 
      });
    }
  }


  async makeUserAdmin(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          message: "E-mail do usuário é obrigatório", 
          ok: false 
        });
      }

      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ 
          message: "Usuário não encontrado", 
          ok: false 
        });
      }

      if (user.role === "admin") {
        return res.status(200).json({
          message: "Usuário já é um administrador",
          ok: true
        });
      }

      user.role = "admin";
      await user.save();

      return res.json({ 
        message: "Usuário promovido a administrador com sucesso", 
        ok: true 
      });
    } catch (error) {
      return res.status(500).json({ 
        message: "Erro interno no servidor", 
        ok: false 
      });
    }
  }

  async listUsers(req, res){
    try {
      const users = await UserModel.find({}, {password: 0});

      return res.json({data: users, ok: true});
    } catch (err) {
      return res.status(500).json({message: "Erro interno no servidor", ok: false})
    }
  }

  async logoutUser(req, res){
    try {
        // Remover o cookie de autenticação
        res.clearCookie("token", { httpOnly: true });

        return res.json({ message: "Logout realizado com sucesso", ok: true });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno no servidor", ok: false });
    }
  }


  async loginUser(req, res){
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
      return res.status(400).json({ message: "Email e senha são obrigatórios!", ok: false });
    }

    try {
      const user = await UserModel.findOne({email}).exec();

      if(!user){
        return res.status(401).json({message: "Senha ou email inválido", ok: false})
      }

      const isPasswordRight = await bcrypt.compare(password, user.password);

      if(!isPasswordRight){
        return res.status(401).json({message: "Senha ou email inválido", ok: false})
      }

      const data = {id: user._id, username: user.username, email: user.email};

      const jwtToken = signToken(data);

      res.cookie("token", jwtToken, {httpOnly: true});
      return res.json({
        email: user.email,
        user: user.username,
        ok: true
      })

    } catch (error) {
      return res.status(500).json({message: "Erro interno no servidor", ok: false})
    }
  }

  async registerUser(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if(!username || !email || !password){
      return res.status(400).json({message: "Todos os campos são obrigatórios", ok: false});
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const payload = {
      username,
      email,
      password: hashedPass
    }

    try {
      const email = req.body.email;
      const user = await UserModel.findOne({email}).exec();

      if(user){
        return res.status(401).json({message: "Email já registrado", ok: false});
      }

      const newUser = new UserModel(payload);
      const savedUser = await newUser.save();

      return res.json({
        email,
        username: req.body.username,
        ok: true
      })
    } catch (error) {
      return res.status(500).json({message: "Erro interno no servidor", ok: false})
    }

  }
}

export default new UserController();

import {MessageSchema, MessageModel} from "../models/message.model.js";

class MessageController{
  constructor(){};

  async createMessage(req, res){
    const content = req.body.content;

    try {
      const data = {
        content,
        email: req.user.email,
        sent: true
      };

      const message = new MessageModel(data);
      await message.save();

      const reqChat = await fetch(`${process.env.CHATBOT_API}/perguntar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          texto: content
        })
      });
      const resChat = await reqChat.json();

      const answerData = {
        content: resChat.resposta,
        email: req.user.email,
        sent: false
      }

      const answer = new MessageModel(answerData)

      await answer.save();

      return res.json({answer: resChat.resposta, ok: true})

    } catch (error) {
      console.log(error);
      return res.status(401).json({message: "Erro interno no servidor", ok: false})
    }
  }

  async fetchUserMessages(req, res){
    try {
      const messages = await MessageModel.find({email: req.user.email}).sort({field: -1});
      
      return res.json({data: messages, ok: true});
    } catch (error) {
      console.error("Erro ao buscar mensagens do usuário:", error);
      return res.status(500).json({ message: "Erro interno no servidor", ok: false });
    }
  }

  async fetchMessages(req, res){
    const email = req.body.email;

    if(!email){
      return res.status(401).json({message: "Email inválido", ok: false});
    }

    try {
      const messages = await MessageModel.find({email}).sort({field: -1});

      return res.json({data: messages, ok: true});
    } catch (error) {
      return res.json(messages);
    }
  }
}

export default new MessageController()


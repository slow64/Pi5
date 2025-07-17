import {ConversationModel} from "../models/conversation.model.js";
import {UserModel} from "../models/user.model.js";

class ConversationController {
  constructor() {}

  async getUserConversations(req, res) {
    try {
      const userEmail = req.user.email;
      const user = await UserModel.findOne({email: userEmail});
      
      if (!user) {
        return res.status(404).json({
          message: "Usuário não encontrado",
          ok: false
        });
      }

      const conversations = await ConversationModel.find({userId: user._id})
        .sort({updatedAt: -1});

      return res.json({
        data: conversations,
        ok: true
      });
    } catch (error) {
      console.error("Erro ao buscar conversas:", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
        ok: false
      });
    }
  }

  async createConversation(req, res) {
    try {
      const userEmail = req.user.email;
      const user = await UserModel.findOne({email: userEmail});
      
      if (!user) {
        return res.status(404).json({
          message: "Usuário não encontrado",
          ok: false
        });
      }

      const newConversation = new ConversationModel({
        userId: user._id,
        messages: []
      });

      const savedConversation = await newConversation.save();

      return res.json({
        data: savedConversation,
        ok: true
      });
    } catch (error) {
      console.error("Erro ao criar conversa:", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
        ok: false
      });
    }
  }

  async addMessageToConversation(req, res) {
    try {
      const { conversationId } = req.params;
      const { content, isBot } = req.body;
      const userEmail = req.user.email;

      if (!content) {
        return res.status(400).json({
          message: "Conteúdo da mensagem é obrigatório",
          ok: false
        });
      }

      const user = await UserModel.findOne({email: userEmail});
      if (!user) {
        return res.status(404).json({
          message: "Usuário não encontrado",
          ok: false
        });
      }

      const conversation = await ConversationModel.findOne({
        _id: conversationId,
        userId: user._id
      });

      if (!conversation) {
        return res.status(404).json({
          message: "Conversa não encontrada",
          ok: false
        });
      }

      conversation.messages.push({
        content,
        isBot: isBot || false,
        timestamp: new Date()
      });

      const updatedConversation = await conversation.save();

      return res.json({
        data: updatedConversation,
        ok: true
      });
    } catch (error) {
      console.error("Erro ao adicionar mensagem:", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
        ok: false
      });
    }
  }

  async getConversation(req, res) {
    try {
      const { conversationId } = req.params;
      const userEmail = req.user.email;

      const user = await UserModel.findOne({email: userEmail});
      if (!user) {
        return res.status(404).json({
          message: "Usuário não encontrado",
          ok: false
        });
      }

      const conversation = await ConversationModel.findOne({
        _id: conversationId,
        userId: user._id
      });

      if (!conversation) {
        return res.status(404).json({
          message: "Conversa não encontrada",
          ok: false
        });
      }

      return res.json({
        data: conversation,
        ok: true
      });
    } catch (error) {
      console.error("Erro ao buscar conversa:", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
        ok: false
      });
    }
  }

  async deleteConversation(req, res) {
    try {
      const { conversationId } = req.params;
      const userEmail = req.user.email;

      const user = await UserModel.findOne({email: userEmail});
      if (!user) {
        return res.status(404).json({
          message: "Usuário não encontrado",
          ok: false
        });
      }

      const conversation = await ConversationModel.findOneAndDelete({
        _id: conversationId,
        userId: user._id
      });

      if (!conversation) {
        return res.status(404).json({
          message: "Conversa não encontrada",
          ok: false
        });
      }

      return res.json({
        message: "Conversa deletada com sucesso",
        ok: true
      });
    } catch (error) {
      console.error("Erro ao deletar conversa:", error);
      return res.status(500).json({
        message: "Erro interno no servidor",
        ok: false
      });
    }
  }
}

export default new ConversationController();


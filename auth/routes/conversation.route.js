import {Router} from "express";
import {verifyToken} from "../middlewares/auth.middleware.js";
import conversationController from "../controllers/conversation.controller.js";

const router = Router();

// Rotas para conversas do chatbot
router.get("/", verifyToken, conversationController.getUserConversations);
router.post("/", verifyToken, conversationController.createConversation);
router.get("/:conversationId", verifyToken, conversationController.getConversation);
router.post("/:conversationId/messages", verifyToken, conversationController.addMessageToConversation);
router.delete("/:conversationId", verifyToken, conversationController.deleteConversation);

export function doRoute(server) {
  server.use("/conversation", router);
}


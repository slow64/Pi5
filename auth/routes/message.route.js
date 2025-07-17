import {Router} from "express";

import {verifyToken, verifyIsAdmin} from "../middlewares/auth.middleware.js";
import messageController from "../controllers/message.controller.js";

const router = Router();

router.post("/", verifyToken, messageController.createMessage);

router.get("/", verifyToken, messageController.fetchUserMessages);
router.get("/user", verifyToken, verifyIsAdmin, messageController.fetchMessages);

export function doRoute(server){
  server.use("/message", router);
}

import express from "express";
import { listPosts } from "../controllers/postController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();
router.get("/", authenticateToken, listPosts);
export default router;

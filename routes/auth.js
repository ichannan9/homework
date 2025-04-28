import express from "express";
import { signup, login } from "../controllers/authController.js";
import { validateBody } from "../middleware/validateBody.js";

const router = express.Router();

// 입력값 검증 스키마 (간단 예시)
const signupSchema = ["userid", "password", "name", "email"];
const loginSchema = ["userid", "password"];

router.post("/signup", validateBody(signupSchema), signup);
router.post("/login", validateBody(loginSchema), login);

export default router;

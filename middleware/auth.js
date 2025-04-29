import jwt from "jsonwebtoken";
const SECRET = "your-secret-key";

// 로그인 성공 시 토큰 발급
export function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

// 요청 인증 미들웨어
export function authenticateToken(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "토큰 필요" });
  const token = header.split(" ")[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "유효하지 않은 토큰" });
    req.user = user;
    next();
  });
}

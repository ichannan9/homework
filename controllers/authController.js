import { addUser, validateCredentials } from "../data/users.js";
import { generateToken } from "../middleware/auth.js";

// 회원가입 처리
export function signup(req, res, next) {
  try {
    const { userid, password, name, email } = req.body;
    const user = addUser({ userid, password, name, email });
    return res.json({
      message: "회원가입 성공",
      user: { userid: user.userid, name: user.name, email: user.email },
    });
  } catch (err) {
    next(err);
  }
}

// 로그인 처리
export function login(req, res, next) {
  try {
    const { userid, password } = req.body;
    const user = validateCredentials(userid, password);
    // 로그인 성공 시 토큰 발급
    const token = generateToken({ userid: user.userid });
    return res.json({
      message: "로그인 성공",
      token,
    });
  } catch (err) {
    next(err);
  }
}

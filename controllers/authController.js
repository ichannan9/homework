import { addUser, validateCredentials } from "../data/users.js";

export function signup(req, res, next) {
  try {
    const user = addUser(req.body);
    return res.json({
      message: "회원가입이 완료되었습니다.",
      user: { userid: user.userid, name: user.name, email: user.email },
    });
  } catch (err) {
    return next(err);
  }
}

export function login(req, res, next) {
  try {
    const user = validateCredentials(req.body.userid, req.body.password);
    return res.json({
      message: "로그인 성공",
      user: { userid: user.userid, name: user.name },
    });
  } catch (err) {
    return next(err);
  }
}

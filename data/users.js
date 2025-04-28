// 메모리 기반 사용자 저장소 (예시용)
const users = [];

export function addUser({ userid, password, name, email }) {
  if (users.find((u) => u.userid === userid)) {
    throw new Error("이미 존재하는 아이디입니다.");
  }
  const user = { userid, password, name, email };
  users.push(user);
  return user;
}

export function findUser(userid) {
  return users.find((u) => u.userid === userid) || null;
}

export function validateCredentials(userid, password) {
  const user = findUser(userid);
  if (!user || user.password !== password) {
    throw new Error("아이디 또는 비밀번호가 일치하지 않습니다");
  }
  return user;
}

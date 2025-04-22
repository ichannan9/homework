import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});

// http://127.0.0.1:3000/login?userid=apple&userpw=1234
app.get("/login", (req, res) => {
  const { userid, userpw } = req.query;

  fs.readFile("result.html", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("결과 페이지 읽기 실패");
      return;
    }

    // 플레이스홀더 대체
    const resultPage = data
      .replace("{{userid}}", userid)
      .replace("{{userpw}}", userpw);

    res.status(200).set({ "Content-Type": "text/html" });
    res.send(resultPage);
  });
});
app.listen(3000, () => {
  console.log("서버 실행 중");
});

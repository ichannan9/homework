import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import authRouter from "./routes/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";
import postsRouter from "./routes/posts.js";

import fs from "fs";

// ES 모듈 __dirname 셋업
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  fs.readFile("./public/signup.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});

// API 라우터
app.use("/auth", authRouter);

app.use("/posts", postsRouter);

// 정적 파일 제공(public 폴더)
app.use(express.static(path.join(__dirname, "public")));

// 에러 핸들러
app.use(errorHandler);

app.listen(8080, () => console.log("서버 실행 중"));

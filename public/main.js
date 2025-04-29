document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const postList = document.getElementById("post-list");

  // ───────── 회원가입 ─────────
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {
        userid: document.getElementById("signup-userid").value.trim(),
        password: document.getElementById("signup-password").value.trim(),
        name: document.getElementById("signup-name").value.trim(),
        email: document.getElementById("signup-email").value.trim(),
      };
      if (!body.userid || !body.password || !body.name || !body.email) {
        return alert("모든 필드를 입력해주세요.");
      }
      try {
        const res = await fetch("/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (!res.ok) {
          return alert("회원가입 실패: " + data.message);
        }
        alert("회원가입 성공");
        window.location.href = "/login.html";
      } catch (err) {
        alert("서버 요청 중 오류 발생: " + err.message);
      }
    });
  }

  // ───────── 로그인 ─────────
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const body = {
        userid: document.getElementById("login-userid").value.trim(),
        password: document.getElementById("login-password").value.trim(),
      };
      if (!body.userid || !body.password) {
        return alert("UserID와 Password를 입력해주세요.");
      }
      try {
        const res = await fetch("/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (!res.ok) {
          return alert("로그인 실패: " + data.message);
        }
        // 토큰 저장
        localStorage.setItem("token", data.token);
        alert("로그인 성공");
        window.location.href = "/post.html";
      } catch (err) {
        alert("서버 요청 중 오류 발생: " + err.message);
      }
    });
  }

  // ───────── 포스트 목록 불러오기 ─────────
  if (postList) {
    (async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인이 필요합니다.");
        return (window.location.href = "/login.html");
      }
      try {
        const res = await fetch("/posts", {
          headers: { Authorization: "Bearer " + token },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        data.posts.forEach((post) => {
          const li = document.createElement("li");
          li.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
          postList.appendChild(li);
        });
      } catch (err) {
        alert("포스트 로딩 오류: " + err.message);
      }
    })();
  }
});

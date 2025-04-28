// 회원가입
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = {
    userid: document.getElementById("signup-userid").value.trim(),
    password: document.getElementById("signup-password").value.trim(),
    name: document.getElementById("signup-name").value.trim(),
    email: document.getElementById("signup-email").value.trim(),
  };
  try {
    const res = await fetch("/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert("서버 요청 중 오류 발생: " + err.message);
  }
});

// 로그인
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = {
    userid: document.getElementById("login-userid").value.trim(),
    password: document.getElementById("login-password").value.trim(),
  };
  try {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert("서버 요청 중 오류 발생: " + err.message);
  }
});

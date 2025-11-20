function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "admin" && p === "259") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Username atau password salah!";
  }
}
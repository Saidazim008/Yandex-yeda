let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("loginBtn");
let eye = document.getElementById("eye");

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (emailVal === "Saidazimxon" && passwordVal === "200816") {
        alert("Login muvaffaqiyatli kiritildi");
        email.value = "";
        password.value = "";
        window.location.href = "main.html";
    } else {
        alert("Email yoki password noto'g'ri");
        email.value = "";
        password.value = "";
    }
});

eye.addEventListener("click", function () {
    password.type = password.type === "password" ? "text" : "password";
});


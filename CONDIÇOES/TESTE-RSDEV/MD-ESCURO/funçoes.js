function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("iconMode");
    if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "light_mode"; // Ícone de sol
    } else {
    icon.textContent = "dark_mode"; // Ícone de lua
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("iconMode");
    if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "light_mode";
    localStorage.setItem("modo", "escuro");
    } else {
    icon.textContent = "dark_mode";
    localStorage.setItem("modo", "claro");
    }
}

window.onload = function () {
    const modo = localStorage.getItem("modo");
    const icon = document.getElementById("iconMode");
    if (modo === "escuro") {
    document.body.classList.add("dark-mode");
    if (icon) icon.textContent = "light_mode";
    } else {
    document.body.classList.remove("dark-mode");
    if (icon) icon.textContent = "dark_mode";
    }
};












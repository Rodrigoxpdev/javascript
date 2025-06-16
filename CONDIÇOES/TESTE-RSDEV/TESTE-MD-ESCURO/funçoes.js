function darkmode(){
    document.body.classList.toggle("darkmode");
    const icon = document.getElementById("iconMode");
    
    
    if (document.body.classList.contains("darkmode")){
        icon.textContent = 'light_mode';
        localStorage.setItem('modo', 'escuro');
    }else{
        icon.textContent = 'dark_mode';
        localStorage.setItem('modo', 'claro');
    }
}

// receber a function
window.onload = function darkmode(){
    const modo = localStorage.getItem("modo")
    const icon = document.getElementById("iconMode")

    if (modo === "escuro"){
        document.body.classList.add("darkmode")
        if (icon) icon.textContent = "light_mode"
    }else{
        document.body.classList.remove("darkmode")
    }if (icon) icon.textContent = "dark_mode"
}
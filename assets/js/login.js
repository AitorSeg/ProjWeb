document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  const usuarios = [
  { email: "l.simdre@epsg.upv.es", password: "9218611", nombre: "Lief" },
  { email: "m.kirkam@epsg.upv.es", password: "1320191", nombre: "Merline" },
  { email: "d.rawabc@epsg.upv.es", password: "9971924", nombre: "Debora" },
  { email: "k.poumai@upv.es", password: "4525956", nombre: "Kevan" },
  { email: "l.prista@upv.es", password: "6055365", nombre: "Luelle" },
  { email: "e.mermiz@upv.es", password: "6738133", nombre: "Eolande" },
  { email: "o.breshe@upv.es", password: "1316390", nombre: "Ondrea" },
  { email: "b.maltho@upv.es", password: "1970980", nombre: "Brooke" },
  { email: "dapasa@har.upv.es", password: "1234", nombre: "Daniel" },
  { email: "jogilo@upvnet.upv.es", password: "4567", nombre: "José Luis" }
];


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    let hasError = false;

    if (email === "") {
      showError(emailInput, "El correo es obligatorio");
      hasError = true;
    }

    if (password === "") {
      showError(passwordInput, "La contraseña es obligatoria");
      hasError = true;
    }

    if (hasError) return;

    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
      showError(emailInput, "Correo no registrado");
      return;
    }

    if (usuario.password !== password) {
      showError(passwordInput, "Contraseña incorrecta");
      return;
    }

    // Login exitoso
    localStorage.setItem("usuarioNombre", usuario.nombre);
    window.location.href = "index.html";
});

  function showError(inputElement, message) {
    inputElement.classList.add("error");

     // Si ya hay un mensaje de error, no añadir otro
    const existingError = inputElement.parentNode.querySelector(".input-error-message");
    if (existingError) {
        existingError.innerText = message;
        return;
    }

    const errorMsg = document.createElement("div");
    errorMsg.classList.add("input-error-message");
    errorMsg.innerText = message;
    inputElement.parentNode.appendChild(errorMsg);
  }


  function clearErrors() {
    document.querySelectorAll(".input-field").forEach(input => {
      input.classList.remove("error");
    });

    document.querySelectorAll(".input-error-message").forEach(msg => {
      msg.remove();
    });
  }
});

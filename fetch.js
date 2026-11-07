const boton = document.getElementById("btnUsuarios");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })

.then(function (datos) {
      resultado.innerHTML = "";
      
      
       datos.forEach(function (usuario) {
        resultado.innerHTML += `
                   <div class="tarjeta">
                    <p>
                       <b>Nombre:</b> ${usuario.name}<br>
                        <b>Correo:</b> ${usuario.email}<br>
                        <b>Ciudad:</b> ${usuario.address.city}
                    </p>
                </div>
                `;
      });
    })
    
    .catch(function (error) {
      console.log("Error:", error);
    });
});
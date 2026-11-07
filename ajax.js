const boton = document.getElementById("btnUsuarios");
const resultado = document.getElementById("resultado");


boton.addEventListener("click", function () {
  const peticion = new XMLHttpRequest();

  peticion.open("GET", "https://jsonplaceholder.typicode.com/users");
  
  
  peticion.onload = function () {
    if (peticion.status === 200) {
      const datos = JSON.parse(peticion.responseText);

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
    }
  };
 peticion.onerror = function () {
    console.log("Error en la petición");
  };

  peticion.send();
});

const user = document.querySelector("#inputEmail");
const password = document.querySelector("#inputPassword");
const loginButton = document.querySelector("#loginButton");

loginButton.addEventListener("click", (e) => {

  const dataLogin = {
    email: user.value,
    password: password.value,
  };

  fetch("http://localhost:8000/users/auth", {
    method: "POST",
    headers: { "Content-Type": "applicaction/json" }, //que tipo de paquete vamos a enviar
    body: JSON.stringify(dataLogin),
  })
    .then((res) => {
      window.location.replace("./index.html");
      return res.json(); //return devuelve el metodo json y ese metodo intenta leer el contenido de la respuesta
    })
    .then((data) => {
      console.log("recibi estos datos", data);
    })
    .catch((err) => {
      setTimeout(() => {
        console.error("ocurrio un error", err);
      }, 10000)
    });
  /* console.log("Login ok", dataLogin); */
});



/* const data = {
    email: "b.ra@live.com.mx",
    password: "1234"
  }
  
  const jsonData = JSON.stringify(data)
  
  fetch("http://localhost:8000/users/auth", {
    "method": "POST",
    "Content-Type": "application/json",
    body: jsonData
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  
  const token = ""
 */

const socketClient = io();

let username = null;

if (!username) {
  Swal.fire({
    title: "Bienvenido al chat",
    text: "Ingresá tu nombre de usuario",
    input: "text",
    inputValidator: (value) => {
      if (!value) return "El nombre de usuario es requerido";
    },
  }).then((result) => {
    username = result.value;
    socketClient.emit("newUser", username);
  });
}

const message = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

btn.addEventListener("click", () => {
  socketClient.emit("message", {
    username,
    message: message.value,
  });
  message.value = "";
});

socketClient.on("messages", (data) => {
  actions.innerHTML = "";
  output.innerHTML = data
    .map((msg) => {
      return `<p><strong>${msg.username}: </strong> ${msg.message}</p>`;
    })
    .join(" ");
});

socketClient.on("newUser", (username) => {
  Toastify({
    text: `${username} se ha unido al chat`,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});

message.addEventListener('keypress', ()=>{
    socketClient.emit('typing', username);
})

socketClient.on('typing', (username)=>{
    actions.innerHTML = `<p><em>${username} está escribiendo...</em></p>`
})

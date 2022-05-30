
document.getElementById("btnToastify").addEventListener("click",() => {
    Toastify({
        text: "Probando Toastify!!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `right` or `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
})
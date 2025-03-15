function addPost() {
    let postContent = document.getElementById("new-post").value;
    let imageFile = document.getElementById("image-upload").files[0];
    if (postContent.trim() === "" && !imageFile) return;
    let post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `<p>${postContent}</p>`;
    if (imageFile) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(imageFile);
        img.style.width = "100%";
        img.style.marginTop = "10px";
        post.appendChild(img);
    }
    document.getElementById("feed").prepend(post);
    document.getElementById("new-post").value = "";
    document.getElementById("image-upload").value = "";
}





document.addEventListener("DOMContentLoaded", () => {
    const abrirBotones = document.querySelectorAll(".btn-abrir-modal");
    const cerrarBotones = document.querySelectorAll(".btn-cerrar-modal");
  
    abrirBotones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const modalId = boton.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) modal.showModal();
        });
    });
  
    cerrarBotones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const modal = boton.closest("dialog");
            if (modal) modal.close();
        });
    });
  });
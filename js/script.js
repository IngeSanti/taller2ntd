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


const btnAbrirModal = 
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
  modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
  modal.close();
})
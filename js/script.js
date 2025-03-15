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
document.getElementById("search-bar").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");
    products.forEach(product => {
        let name = product.querySelector("h2").textContent.toLowerCase();
        product.style.display = name.includes(filter) ? "block" : "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Documento cargado completamente.");

    // Seleccionamos todos los botones dentro de .suggested-friends
    const friendButtons = document.querySelectorAll('.suggested-friends button');

    console.log("Botones encontrados:", friendButtons.length);

    friendButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Buscamos el elemento <p> dentro del contenedor padre (.friend)
            let friendNameElem = this.parentElement.querySelector('p');
            if (friendNameElem) {
                let friendName = friendNameElem.textContent.trim();
                console.log(`Botón presionado para agregar a: ${friendName}`);
                alert(`Has agregado a ${friendName} como amigo.`);
            } else {
                console.log("No se encontró el nombre del amigo.");
            }
        });
    });
});

  






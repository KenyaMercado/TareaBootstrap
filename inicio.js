document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const postText = document.getElementById("postText").value;
    const userName = "Luna"; // Nombre de usuario

    if (postText.trim() !== "") {
        // Crear un contenedor para el comentario y los botones "Me gusta"
        const postContainer = document.createElement("div");
        postContainer.style.marginBottom = "10px"; 

        const userNameElement = document.createElement("span");
        userNameElement.textContent = userName;
        userNameElement.style.color = "purple"; 
        userNameElement.style.fontWeight = "bold"; 

        // elemento para mostrar el comentario
        const commentElement = document.createElement("p");
        commentElement.textContent = postText;

        // otón "Me gusta"
        const likeButton = document.createElement("button");
        likeButton.textContent = "Me gusta";
        likeButton.className = "btn btn-primary btn-sm"; // Agregar clases de Bootstrap para estilizar el botón
        likeButton.addEventListener("click", function () {
            // Obtener el contador de "Me gusta"
            const likeCountElement = likeButton.nextElementSibling;

            if (likeButton.textContent === "Me gusta") {
                // Cambiar el botón a "No me gusta" y actualizar el contador a 1 Me gusta
                likeButton.textContent = "No me gusta";
                likeCountElement.textContent = "1 Me gusta";
            } else if (likeButton.textContent === "No me gusta") {
                // Cambiar el botón a "Me gusta" y actualizar el contador a 0 Me gusta
                likeButton.textContent = "Me gusta";
                likeCountElement.textContent = "0 Me gusta";
            }
        });

        // Crear un elemento para mostrar el contador de "Me gusta" (inicialmente en 0)
        const likeCountElement = document.createElement("span");
        likeCountElement.textContent = "0 Me gusta";

        // Agregar elementos al contenedor del comentario
        postContainer.appendChild(userNameElement);
        postContainer.appendChild(commentElement);
        postContainer.appendChild(likeButton);
        postContainer.appendChild(likeCountElement);

        // Obtenemos el contenedor de los comentarios
        const commentsContainer = document.querySelector(".posts");

        // Insertamos el nuevo comentario al principio de la lista de comentarios existentes
        commentsContainer.insertBefore(postContainer, commentsContainer.firstChild);

        // Limpiamos el campo de texto
        document.getElementById("postText").value = "";
    }
});

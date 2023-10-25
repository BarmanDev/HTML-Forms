
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente

    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;
    const recommend = document.querySelector('input[name="recommend"]:checked').value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(input => input.value);

    // Mostrar los datos en la consola
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Edad:", age);
    console.log("Descripción:", description);
    console.log("¿Recomendaría el sitio?", recommend);
    console.log("Lenguajes y Frameworks:", languages);
  });
const express = require('express');  
const bodyParser = require('body-parser'); // body-parser es un middleware para analizar datos del cuerpo de las solicitudes HTTP
const fs = require('fs'); // fs es el módulo File System para trabajar con archivos
const app = express(); // Crear una instancia de la aplicación Express
const port = 3000; // Puerto en el que se ejecutará el servidor web

// Configurar el middleware body-parser para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la ruta para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Configurar una ruta POST '/submit' para recibir datos del formulario
app.post('/submit', (req, res) => {
  // Obtener los datos del formulario del cuerpo de la solicitud
  const formData = req.body;

  // Crear un array vacío para almacenar los datos
  let data = [];

  // Intentar leer el archivo 'formData.json' y analizar su contenido
  try {
    const dataJSON = fs.readFileSync('formData.json', 'utf8');
    data = JSON.parse(dataJSON);
  } catch (error) {
    console.error('Error al guardar el archivo formData.json:', error);
  }
  // Agregar los datos del formulario al array
  data.push(formData);

  // Guardar el array actualizado en el archivo JSON 'formData.json'
  fs.writeFileSync('formData.json', JSON.stringify(data, null, 2), 'utf8');

  // Enviar una respuesta al cliente indicando éxito
  res.send('Formulario recibido y guardado con éxito en formData.json');
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

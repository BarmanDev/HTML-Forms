const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); 
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de archivos estáticos
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const formData = req.body;

  let data = [];
  try {
    const dataJSON = fs.readFileSync('formData.json', 'utf8');
    data = JSON.parse(dataJSON);
  } catch (error) {
    console.error('Error al guardar el archivo formData.json:', error);  }

  data.push(formData);

  // Guardar el array actualizado en el archivo JSON
  fs.writeFileSync('formData.json', JSON.stringify(data, null, 2), 'utf8');

  res.send('Formulario recibido y guardado con éxito en formData.json');
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require("body-parser")
const app = express();


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html")
});


app.post('/resultado', (req, res) => {
  
  const matrix1 = req.body.matrix1;
  const matrix2 = req.body.matrix2;

  console.log(matrix1,matrix2);

  const filas1 = matrix1.length;
  const columnas1 = matrix1[0].length;
  const filas2 = matrix2.length;
  const columnas2 = matrix2[0].length;

  if(columnas1 != filas2) {
    res.status(400).send('Las matrices no son multiplicables');
    return;
  }

  const resultado = new Array(filas1);
  for(let i = 0; i < filas1; i++) {
    resultado[i] = new Array(columnas2).fill(0);

    for(let j = 0; j < columnas2; j++) {
      for(let k = 0; k < columnas1; k++) {
        resultado[i][j] += matrix1[i][k] * matrix2[k][j];
        console.log(resultado[i][j])
      }
    }
  }
   /* res.json(resultado); */

  res.json({
    msg:"multiplicacion realizada",
    resultado:resultado
  })
});

app.listen(3000,()=>{
  console.log('servidor iniciado en http://localhost:3000')
}).on('error', (err) =>{
  console.error('Error al iniciar el servidor', err);
});

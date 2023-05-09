const express = require('express');
const app = express();
const bodyParser = require("body-parser")


app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/suma.html")
});

app.post('/resultado',(req,res) => {
    const var1 = parseInt(req.body.Suma1);

    const var2 = parseInt(req.body.Suma2);
    /* console.log(var1,var2) */

    const resultado = var1 + var2

    res.json({
        msg:"Suma realizada",
        resultado:resultado
    })
});

app.listen(3000,()=>{
    console.log('servidor iniciado en http://localhost:3000')
}).on('error', (err) =>{
    console.error('Error al iniciar el servidor', err);
});

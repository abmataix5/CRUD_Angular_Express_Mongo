const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");


const app = express();

conectarDB();

//app.set ('port', process.env.PORT || 4000)
const port = process.env.PORT || 4000

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));


app.listen( port, '0.0.0.0', () => { //app.get('port')
    console.log(`El servidor está corriendo perfectamente en el puerto ${port}`)
})
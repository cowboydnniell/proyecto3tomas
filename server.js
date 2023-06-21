const express = require('express');
const app = express();
const path = require( 'path");
const router = express. Router();
app. use (express.json());
app.use(express.urlencoded((extended:true)));
Tomas 'Garza"Moya, 3 months. ago, yja PR
router.get ("/"', (req, res) =>{ 
res.sendFile (path.join(.
dirname
Corrigiendonel error relativo .
"1 1
'/index.html'))
3):
60 a 0 T
router.get("/contacto","(reg,
res) =>
res. sendFile (path. join(
dirname+'/templates/contacto.html)))
));
router.get ("/perfil"
res. sendFile path. Join(=
dirname
/templates/perf1l.htm
router.post("/", (req, res) => {
res. send ("El usuario " + req.body.first_name + " ha sido registrado.");
})
app.use("/", router);
app. listen(process.env.port || 8080);
console. log("Activo en el puerto 8080");
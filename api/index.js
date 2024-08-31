const Express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
const {port} = require("./src/utils/config/")
const  errorHandler  = require("./src/utils/middlewares/errorHandler");
const  setHeaders = require("./src/utils/middlewares/setHeaders");
const {conn} = require("./src/models")
const cors = require ("cors")

// import Express from "express";
const app = Express();

//aca vamos a setear los headers. cors, urlencoded,

app.use(Express.urlencoded({ extended: true, limit: "50mb" })); // esto es el middleware urlencoded es para parsear nuestros json de forma correcta
app.use(Express.json({ limit: "50mb" })); // este es para poder recibir json.
app.use(morgan("dev")); // morgan es para que llegue un msg a la consola cuando se hace una peticion.
app.use(cors())
app.use("/api", routes);
app.use(setHeaders)

//aca se hace el control de errores en el caso de que no exista la ruta.
app.use(errorHandler)

conn.sync({force:true})//esta es la conexion con la base de datos. el sync sirve para sync los modelos de sequelize con la base de datos y cree las tablas.
.then(()=>{
    console.log('base de datos activada')
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

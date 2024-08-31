const setHeaders = (req, res, next) => {
    // Configuración de CORS para permitir solicitudes desde http://localhost:3000
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');

    // Permitir credenciales en las solicitudes (cookies, autenticación HTTP)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Permitir ciertos encabezados en las solicitudes CORS
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Permitir ciertos métodos HTTP en las solicitudes CORS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // Pasar al siguiente middleware o ruta
    next();
};

module.exports = setHeaders;

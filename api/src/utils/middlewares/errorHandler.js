const errorHandler = ((err, req, res, next)=>{//me llega el error por parametro
    const stauts = err.status || 500;// 
    const message = err.message || err;
    console.error(err);
    return res.status(stauts).send(message);
});

module.exports = errorHandler;
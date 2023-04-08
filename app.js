const express = require('express');
const cors = require("cors");


require('dotenv').config();
const app = express();
app.use(cors());
const port = process.env.PORT;


//* CONEXION A BBDD
const { connection } = require('./helpers/dbConnect')
connection();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //* también es posible hacer `${__dirname}/views`


//* Para parsear // traducir
app.use(express.json());
//* Para parsear req con urlencoded payload
app.use(express.urlencoded({ extended: false }));


//* RUTAS
app.use('/', require('./routers/usersRouters'));
app.use('/admin', require('./routers/adminRouters'));


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: 'error 404',
        parrafo: `Page not found`
    })
});


//* Listener
app.listen(port, () => {
    console.log(`Front-end connected from port ${port}`)
})
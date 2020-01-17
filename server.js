const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers')
    /* const path = require('path'); */
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/parcial');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'ricardo'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
// app.get('/', function(req, res) {
//     /* res.send('Hola mundo'); */
//     /* let salida = {
//         nombre: 'Fernando',
//         edad: 32,
//         url: req.url
//     }; */

//     /* res.send(salida) */
//     res.render('home')
// });
/* 
app.get('/data', (req, res) => {
    res.send('Hola data')
}); */

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
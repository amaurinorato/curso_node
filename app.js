var app = require('./config/server');
var consign = require('consign');

var noticiasRoute = require('./app/routes/noticias');
var homeRoute = require('./app/routes/home')

noticiasRoute(app);
homeRoute(app);

app.listen(3000, function(){
    console.log('servidor no ar');
}); 
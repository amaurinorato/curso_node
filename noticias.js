var http = require('http');

var server = http.createServer(function(req, res) {

    var categoria = req.url;

    console.log(categoria);

    if (categoria == '/moda') {
        res.end('<html><body><h1>Noticias de moda</h1></body></html>')
    } else if (categoria == '/tecnologia') {
        res.end('<html><body><h1>Noticias de tecnologia</h1></body></html>')
    } else {
        res.end('<html><body><h1>Portal de Noticias</h1></body></html>')
    }
});

server.listen(3000);
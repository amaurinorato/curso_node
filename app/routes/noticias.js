
var fnConnection = require('../../config/dbConnection');

module.exports = function(app) {
    
    var connection = fnConnection();
    
    app.get('/noticia', function(req, res) {
        
        
        connection.query('select * from noticias', function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
    
    app.get('/noticia/incluir', function(req, res) {
        res.render('admin/form_add_noticia')
    });
}

//var fnConnection = require('../../config/dbConnection');

module.exports = function(app) {
    
    
    
    app.get('/noticias', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiaModel = app.app.models.noticia;
        noticiaModel.getNoticias(connection, function(error, result) {
            res.render('noticias/noticias', {noticias: result});
        });
    })
    
    

    .get('/noticia/incluir', function(req, res) {
        res.render('admin/form_add_noticia')
    })
    
    .get('/noticia/:id', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiaModel = app.app.models.noticia;
        noticiaModel.getNoticia(connection, req.params.id, function(error, result) {
            res.render('noticias/noticia', {noticia: result});
        });
    })
    
    .post('/noticia/incluir', function(req, res){
        console.log('postou');
        var connection = app.config.dbConnection();
        var noticiaModel = app.app.models.noticia;
        noticiaModel.getNoticias(connection, function(error, result) {
            res.render('noticias/noticias', {noticias: result});
        });
    })
    ;
    
    
}
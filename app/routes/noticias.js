
//var fnConnection = require('../../config/dbConnection');

module.exports = function(app) {
    
    
    
    app.get('/noticias', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiaModel = new app.app.models.NoticiasDAO(connection);
        noticiaModel.getNoticias(function(error, result) {
            res.render('noticias/noticias', {noticias: result});
        });
    })
    
    

    .get('/noticia/incluir', function(req, res) {
        res.render('admin/form_add_noticia')
    })
    
    .get('/noticia/:id', function(req, res) {
        var connection = app.config.dbConnection();
        var noticiaModel = new app.app.models.NoticiasDAO(connection);
        noticiaModel.getNoticia(req.params.id, function(error, result) {
            res.render('noticias/noticia', {noticia: result});
        });
    })
    
    .post('/noticias', function(req, res) {
        var noticia = req.body;

        var connection = app.config.dbConnection();
        var noticiaModel = new app.app.models.NoticiasDAO(connection);

        noticiaModel.salvarNoticia(noticia, function(error, result) {
            res.redirect('/noticias');
        });
    })
    ;
    
    
}
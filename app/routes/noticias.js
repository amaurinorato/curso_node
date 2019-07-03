module.exports = function(app) {
    
    app.get('/noticia', function(req, res) {
        res.render('noticias/noticias')
    });
    
    app.get('/noticia/incluir', function(req, res) {
        res.render('admin/form_add_noticia')
    });
}
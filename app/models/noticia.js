module.exports = function() {

    this.getNoticias = function(connection, callback) {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, id, callback) {
        connection.query('select * from noticias where id = ' + id, callback);
    }

    return this; 
}
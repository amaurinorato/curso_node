var mysql = require('mysql');

module.exports = function(){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'portal_noticias'
    });
    return connection;
}
        
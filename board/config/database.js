var mysql = require('mysql');
var db_info = {
    host: 'goorm-database.cbsefr1juwfk.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'admin123',
    database: 'dbtest'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection); // mysql bağlantısını yapıyoruz . 
var cors = require('cors');

module.exports = function(app) {
    app.get('/', function(req, res) {
     
        res.render('index.ejs'); // index.ejs ye gönderiyoruz . 
    
    });

  

    var corsOptions = {
        origin: 'http://localhost:3000/',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

 
    app.post('/search', cors(corsOptions),function(req,res){
        console.log(req);
        connection.query('SELECT * from users where username like "%'+req.body.x+'%"', function(err, rows, fields) {
            if (err){
                console.log(err);
            }
            var data=[];
            console.log(rows);
            for(i=0;i<rows.length;i++)
              {
                console.log(rows[i]);
                data.push(rows[i]);
              }
              res.end(JSON.stringify(data));
            });
        });



 
};


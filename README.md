#tutorial is here : http://kodizim.com
<pre>
module.exports = {
    'connection': {
        'host': '127.0.0.1', 
        'user': 'root', // username
        'password': 'pass', // password 
        'database': 'dbname'// database name
    },
    'database': 'dbname',
};
</pre>

<h4>example sql codes</h4>
<pre>
CREATE TABLE `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `surname` VARCHAR(20) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
</pre>

<pre>
INSERT INTO users(name,surname,username) VALUES("Jamie","Lannister","JamieLannister");
INSERT INTO users(name,surname,username) VALUES("Cercei","Lannister","CerceiLannister");
INSERT INTO users(name,surname,username) VALUES("Bronn","Bronn","Bronn");
INSERT INTO users(name,surname,username) VALUES("John","Snow","JohnSnow");
INSERT INTO users(name,surname,username) VALUES("Daenerys","Targaryen","DaenerysTargaryen");
INSERT INTO users(name,surname,username) VALUES("Ramsay","Bolton","JamieLannister");
</pre>

<h4>routes.js</h4>
<pre>
app.post('/search', cors(corsOptions),function(req,res){
        console.log(req);
        connection.query('SELECT username from users where username like "%'+req.body.value+'%"', function(err, rows, fields) {
            if (err) throw err;
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
</pre>

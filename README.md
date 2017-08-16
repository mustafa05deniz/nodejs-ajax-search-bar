#tutorial is here : http://kodizim.com
nodejs ajax search bar with javascript ,juquery and mysql database you can firstly look this project cause this project contain other project <a href="https://kodizim.com/2017/08/10/nodejs-angularjs-mysql-social-project/" target="_blank"></a>

<h2><a href="http://project3.kodizim.com" target="_blank">DEMO project3.kodizim.com</a> </h2> 
Requirements
<h2>Server Side </h2>
<h2database.js</h2>
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

Do you want to insert row your database click this <a href="http://sequel.kodizim.com">link</a> and run querys

example
<pre>
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
</pre>

<pre>
insert into users(name,surname,username) values("Jamie","Lannister","JamieLannister");
insert into users(name,surname,username) values("Cercei","Lannister","CerceiLannister");
insert into users(name,surname,username) values("Bronn","Bronn","Bronn");
insert into users(name,surname,username) values("John","Snow","JohnSnow");
insert into users(name,surname,username) values("Daenerys","Targaryen","DaenerysTargaryen");
insert into users(name,surname,username) values("Ramsay","Bolton","JamieLannister")
</pre>


for security
<pre>
  var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 
    }
</pre>

<h2>routes.js</h2>

<img src="http://kodizim.com/wp-content/uploads/2017/08/entegre2.png" alt="" width="364" height="444" class="aligncenter size-full wp-image-640" />
<h2>Client Side</h2>


<h2>modal load when you click search box or modal unload and visibility hidden when you click without search box </h2>
<pre>
var $modal = $('div.load');
    $('#search').click(function () {
        console.log("search click");
        $modal.fadeIn();
    });
    $(document).mouseup(function (e) {
        if (!$(e.target).is('#search *, #search')) {
            console.log("normal click");
            $("#user").removeClass("deneme");
            $modal.fadeOut(100);
        }
    });
</pre>





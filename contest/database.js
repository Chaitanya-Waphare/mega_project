var mysql = require('mysql2');
var conn = mysql.createConnection({
  host: 'localhost', // assign your host name
  port: 3306,
  user: 'root',      //  assign your database username
  password: 'chatty007',      // assign your database password
  database: 'BlockChain' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
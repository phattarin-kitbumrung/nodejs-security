// How to prevent SQL Injection attack

const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query(
  'UPDATE users SET ?? = ? WHERE ?? = ?',
  ['first_name',req.body.first_name, ,'id',Number(req.body.ID)],
  function(err, result) {
  //...
})
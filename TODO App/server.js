var toDoArray = [
	{"id":1,"task":"default task"}
]

var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.set('view engine', 'ejs');


app.get('/details', function (req, res) {
	res.send(toDoArray);
 });

app.post('/details', function (req, res) {
	const newTask = {
		id: toDoArray.length + 1,
		task:req.body.new_task
	}
	toDoArray.push(newTask)
	res.send(newTask)
});

app.get('/details/:id', function (req, res) {
	const task = toDoArray.find(c => c.id === parseInt(req.params.id))
	res.send(task)
 });

app.get('/', function (req, res) {
   res.render('home', {data: toDoArray})
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})


const express = require('express');
var cors = require('cors');
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'epnsdb',
	password: 'Rajdhani',
	dialect: 'postgres',
	port: 5432
});

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


pool.connect((err, client, release) => {
	if (err) {
		return console.error(
			'Error acquiring client', err.stack)
	}
	client.query('SELECT NOW()', (err, result) => {
		release()
		if (err) {
			return console.error(
				'Error executing query', err.stack)
		}
		console.log("Connected to Database !")
	})
})

app.get('/getAll', (req, res, next) => {
	pool.query('Select * from events')
		.then(testData => {
			console.log(testData);
			res.send(testData.rows);
		})
})

app.post('/addEvent', (req, res)=> {
    const events = req.body;
    let insertQuery = `insert into events(sender,sum)
                       values('${events.sender}', ${events.sum})`;

    pool.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    pool.end;
})

const server = app.listen(8080, function () {
	let host = server.address().address
	let port = server.address().port
})

var express = require('express');
var router = express.Router();

var pg = require('pg');
connectionString = 'postgres://localhost:5432/sql_normal';

router.get('/', function(req, res){
    var results = [];

    //SQL Query > SELECT data from table
    pg.connect(connectionString, function (err, client, done) {

        var query = client.query("SELECT * FROM people");

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

router.post('/', function(req, res) {
    var fname = req.body.firstName;
    var lname = req.body.lastName;

    pg.connect(connectionString, function (err, client, done) {

        client.query("INSERT INTO people (first_name, last_name) VALUES ($1, $2)", [fname, lname],
            function (err, result) {
                // Handle Errors
                if (err) {
                    console.log(err);
                } else {
                    res.send(true);
                }
            });
    });
});

module.exports = router;
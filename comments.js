// Create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./db');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Create comments
router.post('/create', function(req, res) {
    var query = "INSERT INTO `comments` (comment, user_id, post_id) VALUES (?, ?, ?)";
    var table = [req.body.comment, req.body.user_id, req.body.post_id];
    query = db.format(query, table);
    db.query(query, function(error, results, fields) {
        if (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            res.send({
                "code": 200,
                "success": "comment registered sucessfully"
            });
        }
    });
});

// Delete comments
router.delete('/delete', function(req, res) {
    var query = "DELETE FROM `comments` WHERE id = ?";
    var table = [req.body.id];
    query = db.format(query, table);
    db.query(query, function(error, results, fields) {
        if (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            res.send({
                "code": 200,
                "success": "comment deleted sucessfully"
            });
        }
    });
});

// Get comments
router.get('/get', function(req, res) {
    var query = "SELECT * FROM `comments` WHERE post_id = ?";
    var table = [req.body.post_id];
    query = db.format(query, table);
    db.query(query, function(error, results, fields) {
        if (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            res.send(results);
        }
    });
});

module.exports = router;
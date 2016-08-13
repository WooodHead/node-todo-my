var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

function getTodos(res) {
    Todo.find(function(err, todos) {
        if (err) res.send(err);
        res.json(todos);
    });
}


router.get('/todos', function(req, res) {
    getTodos(res);
});

router.post('/todos', function(req, res) {
    Todo.create({
        text: req.body.text
    }, function(err, todo) {
        if (err) res.send(err);
        getTodos(res);
    });


});

router.delete('/todos/:todo_id', function(req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, todo) {
        if (err) res.send(err);
        getTodos(res);
    });


});


module.exports = router;

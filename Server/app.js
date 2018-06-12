const express = require('express')
const app = express()

const TodoItem = require('./TodoItem')

// middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  let todoItems = []
  // GET method route
 

  app.get('/todos', function(req, res) {

    res.send(todoItems)
  })

  app.post('/todos', function(req, res) {
      let new toDo = new toDo(req.body.title, req.body.priority, req.body.isCompleted)
      todoItems.push(toDo)
      res.send(todoItems)
  })

  
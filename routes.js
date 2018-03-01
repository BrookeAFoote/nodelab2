var express = require("express");
var router = express.Router();
var pool = require("./pg-connection-pool");

var toDoTask = inMemoryDatabase();
toDoTask.init([
    {task: "walk the dog"}
]);//todotask

router.get("/tasks", function(req, res){
    res.send(toDoTask.readAll());

}); //routerget

router.post("/tasks", function(req, res){
    var task = req.body;
    toDoTask.create(task);
    res.status(201).send(task)

});//routerpost

router.put("/tasks", function(req, res){
    res.send("update");
});//routerput

router.delete("/tasks", function(req, res){
    var id = req.params.id;
    toDoTask.delete(id);
    res.send("deleted");
});//routerdelete





module.exports = router;
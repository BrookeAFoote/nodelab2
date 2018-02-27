(function(){
    function FormController() {
        var vm= this;
        todoService.getAllTasks().then(function(tasks){
            vm.todoList= tasks;
        })
    
        vm.addTask= function(task) {
            vm.todoList.push(task);
            document.getElementById("addToDo").value="";
        }//item
        vm.remove= function(index){
            vm.todoList.splice(index, 1);
        }//remove
    }//formcontroller

    angular
     .module("todoModule")
     .controller("FormController", FormController);

})();
(function(){
    function FormController() {
        var vm= this;
        todoService.getAllTasks().then(function(tasks){
            vm.todoList= tasks;
        });
    
        vm.setTask= function(newTaskText) {
            var newTask = {
                text: newTaskText
            };
            todoService.addTask(newTask).then(function(){
                refreshDataFromServer();
            });
        }
        vm.removeTask= function(task){
            todoService.deleteTask(task.id).then(function(tasks){
                vm.todoList = tasks;
            })
        }//remove
    }//formcontroller

    angular
     .module("todoModule")
     .controller("FormController", FormController);

})();
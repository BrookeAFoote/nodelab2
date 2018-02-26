(function(){
    function FormController() {
        var vm= this;
        vm.todoList= [];
        vm.addItem= function(item) {
            vm.todoList.push(item);
            document.getElementById("addToDo").value="";
        }//item
        vm.remove= function(index){
            vm.todoList.splice(index, 1);
        }//remove
    }//formcontroller

    angular
     .module("app")
     .controller("FormController", FormController);

})();
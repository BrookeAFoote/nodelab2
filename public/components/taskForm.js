(function(){
    var taskForm = {
        bindings: {
            item: "<"
        },//bindings
        templateUrl: "templates/taskForm.html",
        controller: function(){
            var $ctrl = this;
            $ctrl.todoList = [];
            $ctrl.addList = function(item){
                $ctrl.i.add(item, 1);
            }//function
        }//controller
    }//taskform

angular.module("app")
    .component("taskForm", taskForm);
})();//end
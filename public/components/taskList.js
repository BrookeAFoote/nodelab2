(function(){
    var taskList = {
        binding: {
            todoList: "<"
        },//tasklist
        templateUrl: "templates/taskList.html",
        ng-repeat = "task in $ctrl.list",
        controller: function(){
            var $ctrl = this;

            $ctrl.removeItem = function(){

            }//remove item
            }//controller
        }//talklist


angular.module("app")
    .component("taskList", taskList);
})();
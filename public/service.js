(function() {
    var todoService = function($http) {

        this.getAllTasks = getAllTasks;
        this.addTask = addTask;
        this.deleteTask = deleteTask;

        function getAllTasks() {
            return $http({
                method: "GET",
                url: "/tasks"
            }).then(function(response) {
                return response.data;
            });
        };

    
        function addTask(task) {
            return $http({
                method: "POST",
                url: "/tasks",
                data: task
            });
        };

        function deleteTask(taskId) {
            // DELETE /api/items/{ID}
            return $http({
                method: "DELETE",
                url: "/tasks/" + taskId
            });
        };

    }

 angular
     .module ("todoModule")
     .factory("todoService", todoService)










})();//end
(function() {
    var todoService = function($http) {
        return{
        getAllTasks: getAllTasks,
        addTask: addTask,
        deleteTask: deleteTask,
        }

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
            }).then
        };

    }

 angular
     .module ("todoModule")
     .factory("todoService", todoService)










})();//end
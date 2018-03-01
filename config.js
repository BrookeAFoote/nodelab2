(function(){







    angular
        .module("todoModule")
        .config(function($routeProvider){
            $routeProvider
                .when("/taskForm", {
                    template: "<task-form></task-form>"
                })//what do we want to load, first .when
                .when("/taskList", {
                    template: "<task-list></task-list>"
                })//second .when
        })//config
    })();//end
(function(){
    function todoService() {
        var savedWordsObj = {};
         return {
             getTasks: getTasks,
             addTask: addTask,
             removeTask: removeTask
         }
         
         function getTasks(wordsObj){
             savedWordsObj = wordsObj;
             console.log(savedWordsObj);
         }
         
         function addTasks(){
             return savedWordsObj;
         }
         
         function removeTask(){}
     }
 
 
 angular
     .module ("todoModule")
     .factory("todoService", todoService)










})();//end
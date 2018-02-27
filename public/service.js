(function(){
    function todoService() {
        var savedWordsObj = {};//empty object
         return {
             getTasks: getTasks,//calling object
             addTask: addTask,
             removeTask: removeTask
         }//return
         
         function getWords(wordsObj){
             savedWordsObj = wordsObj;
             console.log(savedWordsObj);
         }//getword
         
         function sendWords(){
             return savedWordsObj;
         }//sendwords
     }//storyservice
 
 
 angular
     .module ("todoModule")
     .factory("todoService", todoService)










})();//end
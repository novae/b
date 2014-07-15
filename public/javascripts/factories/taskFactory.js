var myApp = angular.module('taskFactory', []);

myApp.factory("taskService", function($http) {
    
    return {
        get: function() {
            return $http.get('/tasks/getAllTask');
        },
        create: function(formData){
        	return $http.post('/tasks/createTask', formData);
        },
        delete: function(id){
        	return $http.delete('/tasks/deleteTask/'+id);
        },
        edit: function(id){
        	return $http.get('/tasks/editTask/'+id);
        }
    }


});

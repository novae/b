var myApp = angular.module('taskCtrl', []);


myApp.controller('mainTaskCtrl', function($scope, $http, taskService) {
    $scope.goBorrar = false;
    /*$http.get('/tasks/getAllTask')
        .success(function(data) {
            $scope.tasks = data;
        })
        .error(function(err) {
            console.log(err);
        });
*/
    $scope.getAllTask = function() {

        taskService.get()
            .success(function(data) {
                $scope.tasks = data;
            });
    }

    $scope.getAllTask();


    $http.get('/users/getAllUsers')
        .success(function(data) {
            $scope.users = data;
        })
        .error(function(err) {
            console.log(err);
        });

    $scope.borrarTask = function(id) {
        var tareas = $scope.tasks;
        for (tarea in tareas) {
            if (tareas[tarea]._id == id) {
                $scope.goBorrar = true;
                $scope.nombreTarea = tareas[tarea].nombre;
                $scope.nombreId = tareas[tarea]._id;
            }
        }

    }

    $scope.confirmarBorrado = function(id) {
        taskService.delete(id)
            .success(function(data) {
                $scope.goBorrar = false;
                $scope.getAllTask();

            })
            .error(function(err) {
                console.log(err);
            })
    }

    $scope.cancelarBorrado = function(){
        $scope.goBorrar = false;
    }
    
});
    
myApp.controller('nuevoTaskCtrl', function($scope, $http, taskService, $state) {

    /***********************************************
    *
    *             NUEVO
    *
    ************************************************/
    $scope.cancelarNuevo = function() {
        $state.go('task');
    }
    $scope.aceptarNuevo = function() {
        taskService.create($scope.formData)

        // if successful creation, call our get function to get all the new todos
        .success(function(data) {
            //$scope.formData = {}; // clear the form so our user is ready to enter another
            //$scope.todos = data; // assign our new list of todos
            /*$state.go('task');*/
            $state.go('task', {}, {
                reload: true
            });
        });
        /*  $http.post('tasks/createTask', $scope.formData)
              .success(function(data) {
                  if (data.estado == 'tarea creada')
                      $state.go('task');

              })
              .error(function(err) {
                  console.log(err);
              })*/
    }
});

myApp.controller('editTaskCtrl', function($scope, $http, $state, $stateParams) {

    /***********************************************
    *
    *             EDITAR
    *
    ************************************************/
    /*$scope.editarTask = function(id){
        taskService.edit(id)
        .success(function(data){
            $scope.formData = data;
            $state.go('task.editar');
        })
        .error(function(err){
            console.log(err);
        })
        
    }*/


  /* $http.get('/tasks/editTask/'+$stateParams.id)
        .success(function(data){
            console.log(data);
        })
        .error(function(err){
            console.log(err);
        });*/

        $scope.cancelarEditar = function(){
            $state.go("task");
        }

        /*$http.get('/tasks/getAllTask')
        .success(function(data) {
            console.log(data);
            console.log($stateParams.id);
        })
        .error(function(err) {
            console.log(err);
        });*/


    $http.get('/tasks/editTask/'+$stateParams.id)
        .success(function(data){
            console.log(data);
        })
        .error(function(err){
            console.log(err);
        });


    

});

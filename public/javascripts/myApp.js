var myApp = angular.module('myApp', ['ui.router', 'taskCtrl', 'taskFactory']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/task");
    //
    // Now set up the states
    $stateProvider
        .state('task', {
            url: "/task",
            templateUrl: "tasks/task-partials/task.html",
            controller: 'mainTaskCtrl'
        })
        .state('task.nueva', {
            url: "/nueva",
            templateUrl: "tasks/task-partials/nueva.html",
            controller: 'nuevoTaskCtrl'
        })
        .state('task.editar', {
            url: "/editar/:id",
            templateUrl: "tasks/task-partials/editar.html",
            controller: 'editTaskCtrl'
        })
        .state('otra', {
            url: "/otra",
            template: "Otra"            
        })
});

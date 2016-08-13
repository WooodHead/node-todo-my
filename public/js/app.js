var app = angular.module('myApp', []);

app.factory('Todos', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/todos');
        },
        create: function(todo) {
            return $http.post('/api/todos', todo);
        },
        delete: function(id) {
            return $http.delete('/api/todos/' + id);
        }
    };
}]);

app.controller('mainCtrl', ['$scope', '$http', 'Todos', function($scope, $http, Todos) {


    Todos.get().success(function(data) {
        $scope.todos = data;
    });

    $scope.createTodo = function() {
        if ($scope.formData.text !== undefined) {

            Todos.create($scope.formData).success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
            });
        }
    };

    $scope.deleteTodo = function(id) {

        Todos.delete(id).success(function(data) {
            $scope.todos = data;
        });
    };
}]);

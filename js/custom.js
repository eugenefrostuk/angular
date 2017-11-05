// TO DO
angular.module('angular', [])
    .controller('CustomCtrl', function () {
        var self = this;

        self.todoPlaceholder = 'enter task';
        self.todoname = '';
        self.todos = [
            'learn angular',
            'learn react',
            'learn meteor'
        ];

        self.addTodo = function () {
            if (self.todoname !== '') {
                self.todos.push(self.todoname);
                self.todoname = '';
            }
        }
    });

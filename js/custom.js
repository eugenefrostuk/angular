// TO DO
angular.module('angular', [])
    .controller('CustomCtrl', function () {
        var self = this;

        self.todoPlaceholder = 'enter task';
        self.todoname = '';
        self.todos = [
            { name: 'learn angular', checked: true},
            { name: 'learn react', checked: false},
            { name: 'learn meteor', checked: false}
        ];

        self.addTodo = function () {
            if (self.todoname !== '') {
                self.todos.push({name: self.todoname, checked: false});
                self.todoname = '';
            }
        }

        self.removeTodos = function() {
            var uncheckedTodos = self.todos.filter(function(item) {
                return item.checked === false;
            });
            self.todos = uncheckedTodos;
        }

        self.getCheckedTodosNumber = function() {
            var checkedTodos = self.todos.filter(function(item) {
                return item.checked === true;
            });
            return checkedTodos.length;
        }
    });

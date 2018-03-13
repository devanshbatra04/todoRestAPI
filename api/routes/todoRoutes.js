module.exports = function(app){
    var todoList = require('../controller/todoController');

    //routes
    app.route('/tasks')
        .get(todoList.List)
        .post(todoList.create);


    app.route('/tasks/:taskId')
        .get(todoList.Read)
        .put(todoList.Update)
        .delete(todoList.Delete);

};
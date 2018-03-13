var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.List = function(req,res){
    Task.find({},function(err,task){
        if(err) res.send(err);
        else res.json(task);
    });
};

exports.create = function(req,res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err) res.send(err);
        else res.json(task);
    })
};
    exports.Delete = function(req,res){
        Task.remove({
            _id:req.params.taskId
        },function(err, task){
            if(err)
                res.send(err);
            res.json({message: 'Task successfully deleted'});
        })
    };

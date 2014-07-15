var express = require('express');
var router = express.Router();



var Model = require('../models/Model.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.send('app/views/index.html');
});


router.get('/getAllTask', function(req, res) {
    Model.Task.find({}, function(err, data) {
        if (err)
            console.log('error al cargar las tareas ', err);
        res.json(data);
    })
});

router.post('/createTask', function(req, res, next) {
    new Model.Task({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        cantidad: req.body.cantidad
    }).save(function(err) {
        if (err) {
            res.json({
                estado: 'Error al crear la tarea',
                err: err
            });
        } else {
            res.json({
                estado: 'tarea creada'
            });
        }
    });

});

router.delete('/deleteTask/:id', function(req, res, next) {
    Model.Task.remove({
        _id: req.params.id
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({
            estado: 'tarea borrada'
        })
    });
})

router.get('/editTask/:id',function(req,res){
	Model.Task.find({_id:req.params.id},function(data,err){
		if(err)
			res.send(err);

		res.json(data);
	});
    
});

/* GET home page. */
router.get('/task-partials/:name', function(req, res) {

    var name = req.params.name;
    res.sendfile('./app/views/task-partials/' + name);
});



module.exports = router;

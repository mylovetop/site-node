app.namespace('/forum/:id', function(){
    app.get('/(view)?', function(req, res){
        res.send('GET forum ' + req.params.id);
    });

    app.get('/edit', function(req, res){
        res.send('GET forum ' + req.params.id + ' edit page');
    });

    app.namespace('/thread', function(){
        app.get('/:tid', function(req, res){
            res.send('GET forum ' + req.params.id + ' thread ' + req.params.tid);
        });
    });

    app.del('/', function(req, res){
        res.send('DELETE forum ' + req.params.id);
    });
});
var express = require('express')
var router = express.Router()
const mongoose = require('mongoose');

router.get('/', function(req, res){
    var mapSchema = mongoose.Schema({
        name: String,
        rows: Number,
        cols: Number
    })
    mongoose.connect('mongodb+srv://hive-php:ym24290678@cluster0.cdsz3bl.mongodb.net/hive?retryWrites=true&w=majority')
    .then(()=>{
        if(req.query.action == 'create_map'){
            var mapModule = mongoose.model('map', mapSchema)
            var newMap = new mapModule(req.query)
            newMap.save().then(()=>{res.send('all ok')})
        }else{
            res.send('action dont exist')
        }
    })
})

module.exports = router
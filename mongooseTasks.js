var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Pod = require("./models/pod").Pod


var pod = new Pod({
    title: "аирподс1",
    nick: "airpods1"
})



console.log(pod)
pod.save(function(err, pod, affected){
console.log(pod.title)
})
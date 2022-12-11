var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

var schema = mongoose.Schema({ name: String })

schema.methods.connect = function(){
    console.log(this.get("name") + " сказал connect")
}

var Pods = mongoose.model('Pods', schema)

var poddy = new Pods({ name: 'аирподс1' })
poddy.save(function (err) {
    poddy.connect()
})

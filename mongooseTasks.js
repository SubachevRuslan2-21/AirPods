var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

var Pods = mongoose.model('Pods', { name: String })

var poddy = new Pods({ name: 'аирподс1' })
poddy.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('connect')
    }
})

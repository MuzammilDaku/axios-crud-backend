var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/muzammil').then(()=>{console.log('database connected')}).catch((err)=>{console.log('database error')})

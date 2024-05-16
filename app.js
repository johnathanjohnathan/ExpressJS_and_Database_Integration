var express = require('express')
var app = express()
var router = require('./router.js')
const pool = require('./db/config.js')

app.use('/dvdrental', router)

pool.connect((err,res) =>{
    if (err){
        console.log(err)
    }else{
        console.log('Connected')
    }
})

app.listen(3000)
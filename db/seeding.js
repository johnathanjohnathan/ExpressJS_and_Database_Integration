const pool = require('./config.js')
const fs = require('fs')

// menjalankan file seeding.sql
const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'})
pool.query(seedQuery, (err,res) =>{
    if (err){
        console.log(err)
    }else{
        console.log('Seeding Complete!')
        console.log(res)
    }
})
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    database: 'db_dvdrental',
    password: '12345678',
    port: 5432,
    host: 'localhost'
})

module.exports = pool
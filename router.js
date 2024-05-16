var express = require('express')
var router = express.Router()
const pool = require('./db/config.js')

// membuat request get all film
router.get('/film', (req,res) =>{
    pool.query('SELECT * FROM film', (err,result) =>{
        if (err){
            throw(err)
        }
        res.status(200).json(result.rows)
    })
})

// membuat request get film by id
router.get('/film/:id', (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM film WHERE film_id = $1', [id],
    (error,result) =>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    }
    )
})

// membuat request get all category
router.get('/category', (req,res) =>{
    pool.query('SELECT * FROM category', (err,result) =>{
        if (err){
            throw(err)
        }
        res.status(200).json(result.rows)
    })
})

// membuat request get film by category_id
router.get('/category/:id', (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query("SELECT film.title, film.description, film.release_year, category.name as category FROM film INNER JOIN film_category USING (film_id) INNER JOIN category USING (category_id) WHERE category.category_id = $1"
    , [id],
    (error,result) =>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    }
    )
})

// membuat request get all film
router.get('/actor', (req,res) =>{
    pool.query('SELECT * FROM actor', (err,result) =>{
        if (err){
            throw(err)
        }
        res.status(200).json(result.rows)
    })
})

module.exports = router

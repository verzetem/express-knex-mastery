const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

router.get('/', (req, res) => {
	knex('beer').then(beers => {
			res.json({ beers })
		})
})

router.get('/:id', (req, res, next) => {
	const id = req.params.id
	knex('beer').where('id', id).then(beer => {
		if (!beer.length) {
			next()
		} else{
		res.json({ beer: beer[0] })
	}
	})
})


router.post('/', (req, res, next) => {
    const body = req.body;
    knex('beer').insert(body).returning('*').then(beer => {
        res.json({ beer: beer[0] });
    });
}); 

router.put('/:id', (req, res, next) => {
		const id = req.params.id
    const body = req.body;
    knex('beer')
    	.where('id', id)
    	.update(body)
    	.returning('*')
    	.then(beer => {
        res.json({ beer: beer[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('beer')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(beer => {
        res.json({ beer: beer[0] });
    });
});



module.exports = router
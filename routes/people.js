const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

router.get('/', (req, res) => {
	knex('people').then(people => {
			res.json({ people })
		})
})

router.get('/:id', (req, res) => {
	const id = req.params.id
	knex('people').where('id', id).then(person => {
		res.json({ person: person[0] })
	})
})


router.post('/', (req, res, next) => {
    const body = req.body;
    knex('people').insert(body).returning('*').then(person => {
        res.json({ person: person[0] });
    });
});

router.put('/:id', (req, res, next) => {
		const id = req.params.id
    const body = req.body;
    knex('people')
    	.where('id', id)
    	.update(body)
    	.returning('*')
    	.then(person => {
        res.json({ person: person[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('people')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(person => {
        res.json({ person: person[0] });
    });
});


module.exports = router

const express = require('express')
const app = express()
let port = process.env.PORT || 3030
const cors = require('cors')
const bodyParser = require('body-parser')
const beerPath = require('./routes/beers')
const peoplePath = require('./routes/people')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())



app.get('/', (req, res, next) => {
	res.send('🐻🐻🐻🐻🐻🐻🐻')
})

app.use('/beers', beerPath)
app.use('/people', peoplePath)



// error handling
app.use(notFound);
// General purpose 'catch' all errors
app.use(errorHandler);

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl });
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
    console.error('ERROR', err);
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined;
    res.status(500).send({ error: err.message, stack, url: req.originalUrl });
}


app.listen(port, () => console.log(`Running on port ${port}`))

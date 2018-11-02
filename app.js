const express = require('express')
const app = express()
let port = process.env.PORT || 3030
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.get('/', (req, res) => {
	res.send('🐻🐻🐻🐻🐻🐻🐻')
})








// error handling
app.use(notFound)
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl })
}

function notFound(err,req,res,next) {
  res.status(404).send(err)
}

app.listen(port, () => console.log(`Running on port ${port}`))
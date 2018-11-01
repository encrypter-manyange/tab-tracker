const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8002

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => res.send(
    {
        massage:'Hello World!'
    }
        ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
require('dotenv').config()
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

const app = express()
const port = 3000
const router = require('./routers')

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
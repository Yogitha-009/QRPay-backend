const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const getAmount = require('./routes/getAmount')
const returnQr = require('./routes/returnQr')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use('/getdata', getAmount)
app.use('/returnqr', returnQr)

async function startdb() {
    try {
        await mongoose.connect(process.env.MongoDb_URI)
        console.log("db connected successfully!")

        // Ensure process.env.PORT is prioritized and dynamically printed
        const PORT = process.env.PORT || 3001
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error("Database connection failed:", error)
    }
}
startdb()
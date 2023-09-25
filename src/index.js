const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
app.use(cors());

// Limit user requests
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 3,
})
app.use(limiter)
app.set('trust proxy', 1)

// API routes
app.use('/api', require('./routes'))

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`using port ${PORT}`))
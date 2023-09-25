const express = require("express")
require('dotenv').config()

const PORT = process.env.SERVER_PORT;

const app = express();

app.get('/api', (req, res) => {
    res.send('hello world!')
})
app.listen(PORT, () => console.log(`using port ${PORT}`))
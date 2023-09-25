const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

require('dotenv').config();
const PORT = process.env.SERVER_PORT;

app.get('/api/unsplash/search-photos', (req, res) => {
    res.json({ success: true })
})

app.listen(PORT, () => console.log(`using port ${PORT}`))
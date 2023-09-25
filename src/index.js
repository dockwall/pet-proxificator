const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use('/api', require('./routes'))

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`using port ${PORT}`))
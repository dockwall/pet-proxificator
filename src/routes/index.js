const express = require('express');
const router = express.Router();
const needle = require('needle');

const UNSPLASH_API_URL = process.env.UNSPLASH_API_URL;
const UNSPLASH_API_KEY_NAME = process.env.UNSPLASH_API_KEY_NAME;
const UNSPLASH_API_KEY_VALUE = process.env.UNSPLASH_API_KEY_VALUE;

const options = new URLSearchParams({
    [UNSPLASH_API_KEY_NAME]: UNSPLASH_API_KEY_VALUE,
    query: 'cats',
})

router.get('/', async (req, res) => {
    try {
        const apiRes = await needle('get', `${UNSPLASH_API_URL}?${options}`);
        const data = apiRes.body;

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
const url = require('url');
const express = require('express');
const router = express.Router();
const needle = require('needle');
const apicache = require('apicache');

// Unsplash API settings
const UNSPLASH_API_URL = process.env.UNSPLASH_API_URL;
const UNSPLASH_API_KEY_NAME = process.env.UNSPLASH_API_KEY_NAME;
const UNSPLASH_API_KEY_VALUE = process.env.UNSPLASH_API_KEY_VALUE;

// Init API cache
const cache = apicache.middleware

router.get('/', cache('5 minutes'), async (req, res) => {
    try {
        const options = new URLSearchParams({
            [UNSPLASH_API_KEY_NAME]: UNSPLASH_API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })

        const apiRes = await needle('get', `${UNSPLASH_API_URL}?${options}`);
        const data = apiRes.body;

        // Dev logs
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST ${UNSPLASH_API_URL}?${options}`)
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
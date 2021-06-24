const express = require('express')
const asyncHandler = require('express-async-handler')
const fetch = require('node-fetch');

const router = express.Router();
router.use(express.json())

router.get('/', asyncHandler(async(req, res)=>{
    const results = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await results.json()
    res.send(data)

}))

module.exports = router;
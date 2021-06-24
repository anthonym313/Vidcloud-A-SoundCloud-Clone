const express = require('express')
const asyncHandler = require('express-async-handler')
const fetch = require('node-fetch');

const router = express.Router();
router.use(express.json())
//Search Bar searches, serves up the front end with the call from the youtube api to search titles.

router.get('/:query', asyncHandler(async(req, res)=>{
    const results = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${req.params.query}}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await results.json()
    res.send(data)

}))
router.post('/results',asyncHandler(async(req, res)=>{
    console.log(req.body)
}))

module.exports = router;
const express = require('express');
const asyncHandler = require('express-async-handler');
const {Video,User} = require('../../db/models')

const router = express.Router();
router.use(express.json());

//Get user videos
router.get('/:id',asyncHandler(async function(req,res){
    const userId = parseInt(req.params.id,10)
    const videos = await Video.findAll({
        where:{
            userId
        },
        include:[{
            model:User
        }]
    });
    return res.json(videos);
}))

//upload  user video
router.post(
    '/',
    asyncHandler(async function (req, res) {
        const video = await Video.create(req.body);
        return res.json(video)
    })
);

//update user video
router.put('/:id', asyncHandler(async function (req,res){
    const video = await Video.editItems(req.body);
    return res.json(video);
}))
    
 //delete user video
 router.delete('/:id', asyncHandler(async function (req,res){
     const videoId = parseInt(req.params.id,10);
     const video = await Video.findOne({
         where:{
             id:videoId
            }
        });
    
     res.json({video})
   

 }))
module.exports = router;
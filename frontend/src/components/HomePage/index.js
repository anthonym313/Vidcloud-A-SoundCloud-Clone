import React, { useEffect } from 'react';
import './homepage.css'


// export async function youtubeTrending(){
    
//     try{

//         const response = await fetch('/api/')
//         const result = await response.json()
//         return{
//             props:{result}
//         }
//     }catch(err){console.log(err)}
//  }
 
export default function HomePage(){
  useEffect(()=>{
    async function youtubeTrending(){
    
            try{
        
                const response = await fetch('/api/')
                const result = await response.json()
                console.log(result.items)
                
            }catch(err){console.log(err)}
         }
         youtubeTrending()
  },[])
    return (
        <div className="homepage_container">
            <div className="homepage_banner_container">
                <div className="homepage_banner_text"> Discover more with VidCloud GO+
                    <p>Upload your first video and begin your journey.</p>
                </div>  
                <div className="homepage_banner_photo" id='video'>
                    <video src="https://assets.mixkit.co/videos/preview/mixkit-sunset-seen-at-sea-from-a-coast-aerial-shot-38859-large.mp4" autoPlay loop muted height="450" width="auto"/>
                </div>
            </div>
            <div className="trending_video_container">
                <div className="trending_video_header">See what's been trending for free in the VidCloud community</div>
                <div className="trending_gallery_container">
                    <div className="trending_video">Thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                    <div className="trending_video">thumbnail</div>
                                                  
                </div>
            </div>

        </div>
    )
}
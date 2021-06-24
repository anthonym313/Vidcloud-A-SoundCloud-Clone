import React, { useState,useEffect } from 'react';
import './homepage.css'
 
export default function HomePage(){
    const [data,setdata] = useState(null)

  useEffect(()=>{
    async function youtubeTrending(){
    
            try{
        
                const response = await fetch('/api/')
                const result = await response.json()
                setdata(result.items);
                
            }catch(err){console.log(err)}
         }
         youtubeTrending()
  },[])
  console.log(data, 'our data')
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
                    {data?.map((item)=>{
                        return <div className="trending_video">{item.snippet.title}</div>

                    })}
                </div>
            </div>

        </div>
    )
}
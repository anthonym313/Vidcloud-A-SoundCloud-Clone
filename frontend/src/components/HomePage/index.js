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
                    <video src="https://assets.mixkit.co/videos/preview/mixkit-sunset-seen-at-sea-from-a-coast-aerial-shot-38859-large.mp4" autoPlay loop muted height="auto" max-width="1240px"/>
                </div>
            </div>
            <div className="trending_video_container">
                <div className="trending_video_header">See what's been trending for free in the VidCloud community</div>
                <div className="trending_gallery_container">
                    {data?.map((item)=>{
                        return (
                            <>
                                <div style={{backgroundImage:`url(${item.snippet.thumbnails.high.url})`}}className="trending_video" key={item.id}><div key={item.id}className="trending_video_text">{item.snippet.title}</div></div>
                                
                            </>
                            )
                   })}
                </div>
            </div>
            <div className='bottom_advert_container'>
                <div className='bottom_advert_box'>
                    Calling out all creators
                    <p> Get on Vidcloud to connect with your audience, watch and share your videos. </p>
                    <p>Find Out More</p>
                </div>
                <div className='bottom_advert_box'>
                   <video src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/msqd2XJ/videoblocks-film-crew-on-stage-set-while-shooting-scene-with-actors-fighting-in-spotlight_sc-luz1wbn__a012b76de8661a0a839a52de1ca82c9b__P360.mp4"id='bottom_advert_vid' autoPlay loop muted height="300" max-width="auto"></video>
                </div>
            </div>
            <div className="last_call_container">
                <div className="last_call_text">
                   Thanks for watching. Now join the fun.
                   <p>Save videos,follow creators and build playlists. All for free.</p>
                   <a href='/signup'>
                        <button id="create_vidcloud_account">Create account</button>
                   </a>
                </div>
            </div>

        </div>
    )
}
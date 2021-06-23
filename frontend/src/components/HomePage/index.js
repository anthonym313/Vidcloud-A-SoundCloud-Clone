import React from 'react';
import './homepage.css'
export default function HomePage(){
    return (
        <div className="homepage_container">
            <div className="homepage_banner_container">
                <div className="homepage_banner_text"> Discover more with VidCloud GO+
                    <p>Upload your first video and begin your journey.</p>
                </div>  
                <div className="homepage_banner_photo" id='video'>
                    <video src="https://assets.mixkit.co/videos/preview/mixkit-sunset-seen-at-sea-from-a-coast-aerial-shot-38859-large.mp4" autoPlay loop muted height="450px" width="auto"/>
                </div>
            </div>
        </div>
    )
}
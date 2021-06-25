import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {uploadVideo} from 

import './UserProfilePage.css'

export default function UserProfile(){
    const sessionUser = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const payload={
            title,
            url
        }
        const video = await dispatch(uploadVideo(payload))
    }
    return(
        <div className='profilePage_container'>
            <div className='profile_banner_container' >
                <div className='profile_image'></div>   
                <div className='profile_banner_user'>
                    <h2>{sessionUser.username}</h2>
                </div>
            </div>
            <div className='playlist_container'>
                <h2>My Playlist</h2>     
            </div>
            <h3>Upload to Playlist</h3>
            <section className="playlistform">
                <form onSubmit={handleSubmit}>
                    <label>
                        Title of video
                        <input 
                        type="text" 
                        placeholder='Title'
                        value={title} onChange={(e)=>setTitle(e.target.value)}
                        required>
                        </input>
                    </label>
                    <br></br>
                    <label>
                        Video url
                        <input 
                        type="text"
                        placeholder="URL..."
                        value={url}
                        onChange={(e)=>setUrl(e.target.value)}
                        required>
                        </input>
                    </label>
                    <br></br>
                    <button type='submit'>Add Video</button>
                    <input button onClick={}>Cancel</input>
                </form>
            </section>
        </div>
    )
}
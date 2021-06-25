import React,{useEffect, useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {uploadVideo , getUserVideos} from '../../store/video';
import {useHistory} from 'react-router-dom';

import './UserProfilePage.css'

export default function UserProfile(){
    const sessionUser = useSelector(state=> state.session.user)
    const videosArr = useSelector(state => state.video.vidList);
    console.log(videosArr)
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(()=>{
        dispatch(getUserVideos(sessionUser.id))
    },[dispatch])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const payload={
            userId:sessionUser.id,
            title,
            url
        }
        const video = dispatch(uploadVideo(payload))
        if(video){
            history.push('/user')
        }
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
                <div className='myVideos_list'>
                    {videosArr?.map((video)=>{
                        return (
                        <div className='playlist_item_container'>
                            <h4>{video.title}</h4>
                            <iframe title={video.title} src={video.url}></iframe>
                            <button>Remove Video</button>
                        </div>
                        )
                    })}
                </div>     
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
                </form>
            </section>
        </div>
    )
}
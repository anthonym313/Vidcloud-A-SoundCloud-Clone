import React,{useEffect, useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {uploadVideo , getUserVideos, removeVideo} from '../../store/video';
import {useHistory} from 'react-router-dom';
// import EditVideoForm from '../EditVideoForm';

import './UserProfilePage.css'

export default function UserProfile(){
    const sessionUser = useSelector(state=> state.session.user)
    const videosArr = useSelector(state => state.video.vidList);
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    
    

    useEffect(()=>{
        dispatch(getUserVideos(sessionUser.id))
    },[dispatch,sessionUser.id])
    
    
    const handleRemove = (id)=>{      
        dispatch(removeVideo(id))
    } 
   
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
                <div className='profile_image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0PXgAh7ba4WdsiCzZWGTZOZK6OhDOi67mA&usqp=CAU" alt="Profile"></img>
                </div>   
                <div className='profile_banner_user'>
                    <h2>{sessionUser.username}</h2>
                </div>
            </div>
            <div className='playlist_container'>
                <h2>My Playlist</h2>
                <div className='myVideos_list'>
                    {videosArr?.map((video)=>{
                        return (
                        <div key={video.id.toString()} className='playlist_item_container'>
                            <h4>{video.title}</h4>
                            <iframe title={video.title} src={video.url}></iframe>
                            <button className='edit-video-button' type='button' onClick={''}>Edit Title</button>
                            <button className="delete-video-button" type="button" onClick={handleRemove(video.id)}>Remove Video</button>
                        
                        </div>
                        )
                    })}
                </div>     
            </div>
            <section className="playlistform">
                <h3>Upload to Playlist</h3>
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
                    <button id="add_button" type='submit'>Upload Video</button>
                </form>
            </section>
        </div>
    )
}
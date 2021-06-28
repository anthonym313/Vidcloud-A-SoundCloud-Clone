import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './VideoPage.css'
import {getOneVideo} from '../../store/video';

export default function VideoPage(){
    const video = useSelector(state => state.video.id)
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getOneVideo(id))
    },[dispatch])
    return (
        <div className="video_page_container">
            <h1>VideoPage</h1>
            <div className="video_container">

            </div>
            <div className="video_comment_container">

            </div>

        </div>
    )
}

import {csrfFetch} from './csrf';

const ADD_ONE = 'video/ADD_ONE';
const LOAD = 'video/LOAD';
const LOAD_ONE = 'video/LOAD_ONE';
const REMOVE_ITEM = "video/REMOVE_ITEM";
const UPDATE_ITEM = "video/UPDATE_ITEM";

const addOneVideo = video => ({
    type: ADD_ONE,
    video,
});

const loadOne = videoId =>({
    type:LOAD_ONE,
    videoId
})

const load = vidList => ({
    type: LOAD,
    vidList,
});

const remove = (video) => ({
    type: REMOVE_ITEM,
    video

});
  
const update = (title) => ({
    type: UPDATE_ITEM,
    title,
});
  
//Thunks
export const getOneVideo =(id)=> async dispatch =>{
    const response = await csrfFetch(`api/video/${id}`)
    if (response.ok){
        const video = await response.json();
        dispatch(loadOne(video));
    }
}

///Refactor this thunk to go to users page and create new user reducer
export const getUserVideos = (id) => async dispatch =>{
    const response = await csrfFetch(`/api/video/${id}`)
    if (response.ok){
        const vidList = await response.json();
        dispatch(load(vidList));
    }
}
export const removeVideo = (id) => async dispatch =>{
    const response = await csrfFetch(`/api/video/${id}`,{
        method:"DELETE",
    
    })
    if (response.ok){
        const video= await response.json();
        dispatch(remove(video))
    }
}

export const uploadVideo = (payload) => async dispatch=>{
    const res = await csrfFetch(`/api/video`,{
        method:'POST',
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const video = await res.json()
        dispatch(addOneVideo(video))
        return video;
      }
}

export const editItems = (id, newTitle) => async dispatch =>{
    const res = await csrfFetch(`/api/video/${id}`,{
      method:'PUT',
      body: JSON.stringify(newTitle)
    })
    if(res.ok){
      const title = await res.json();
      dispatch(update(title))
    }
}


const initialState = {vidList: []}
//REDUCER
export default function videoReducer(state = initialState, action){
    switch(action.type){
        case LOAD: {
            const allVideo = {};
            action.vidList.forEach(video => {
              allVideo[video.id] = video;
            });
            return {
              ...allVideo,
              ...state,
              vidList: action.vidList,
            };
          }
        
        case ADD_ONE:{
            if(!state[action.video.id]){
                const newState ={
                    ...state,[action.video.id]: action.video
                }
                const videoList = newState.vidList.map(id =>newState[id]);
                videoList.push(action.video);
                newState.vidList = videoList;
                return newState; 
            }
            return{
                ...state,[action.video.id]:{
                    ...state[action.video.id],
                    ...action.video
                }
            }
        }
        case UPDATE_ITEM:{
            return{
                ...state,[action.video.title]:action.video,
            }
        }
        case REMOVE_ITEM: {
            const newState = { ...state };
            delete newState[action.video.id];
            return newState;
          }
        default:
            return state;
    }
}
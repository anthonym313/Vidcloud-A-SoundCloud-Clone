const ADD_ONE = 'video/ADD_ONE';
const LOAD = 'video/LOAD';

const addOneVideo = video => ({
    type: ADD_ONE,
    video,
});

const load = vidList => ({
    type: LOAD,
    vidList,
  });

  
export const getUserVideos = (id) => async dispatch =>{
    const response = await fetch(`/api/video/:${id}`)
    if (response.ok){
        const vidList = await response.json();
        dispatch(load(vidList));
    }
}

//Thunks
export const uploadVideo = (payload) => async dispatch=>{
    const res = await fetch(`/api/video`,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const video = await res.json()
        dispatch(addOneVideo(video))
        return video;
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
              list: action.list,
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
        default:
            return state;
    }
}
const ADD_ONE = 'pokemon/ADD_ONE';


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
import axios from 'axios'

const apiKey = "AIzaSyBtrnMQafU9n6ImSvxWjdx33jpmY7cBCTc";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: apiKey
    }
})
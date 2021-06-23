import React,{useState} from 'react';
import './Navigation.css'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const submitHelper = async(searchTerm)=>{
        const response = await fetch(`/api/search/${searchTerm}`)
        const result = await response.json()
        console.log(result)
    }
    
    // const submitHelper= async (searchTerm)=>{
    //     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
    //     const result = await response.json()
    //     console.log(result)
    // }
    const handleSubmit = (event) =>{
        event.preventDefault()
        submitHelper(searchTerm)
    }
    return (
        <>
            <form className='nav-search' onSubmit={handleSubmit}>
                <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} type='search' placeholder='Search A Video ...' autoComplete='off' className="search_input" /> 
                <button className='nav-search__button' type='submit'>Go</button>
            </form>
            
        </>
    )
}


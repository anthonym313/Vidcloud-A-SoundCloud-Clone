import React,{useState} from 'react';
import './Navigation.css'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const apiKey = "";
    const submitHelper= async (searchTerm)=>{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&key=${apiKey}`)
        const result = await response.json()
        console.log(result)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        submitHelper(event.target.value)
    }
    return (
        <>
            <form className='nav-search' onSubmit={handleSubmit}>
                <input onChange={()=>setSearchTerm(searchTerm)} type='search' placeholder='Search' autoComplete='off' className="search_input" /> 
                <button className='nav-search__button' type='submit'>Search</button>
            </form>
            
        </>
    )
}


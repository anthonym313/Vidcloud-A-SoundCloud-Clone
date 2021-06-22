import React,{useState} from 'react';
import youtubeSearch from '../backend/routes/api/search.js'

export default SearchBar = ()=>{
    const [searchTerm, setSearchTerm] = useState('')

    const submitHelper = async (searchTerm)=>{
        const response = await youtubeSearch.get('/search',{
            params:{
                query: searchTerm
            }
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        
    }
    return (
        <>
            <form className='nav-search' onSubmit={handleSubmit}>
                <input onChange={handleSubmit} type='search' placeholder='Search' autocomplete='off'/> 
                <button className='nav-search__button' type='submit'>Search</button>
            </form>
            
        </>
    )
}


apiKey ("AIzaSyBtrnMQafU9n6ImSvxWjdx33jpmY7cBCTc")
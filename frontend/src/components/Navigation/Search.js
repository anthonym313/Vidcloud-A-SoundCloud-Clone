import React,{useState} from 'react';
import youtubeSearch from '../Search/Search'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

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

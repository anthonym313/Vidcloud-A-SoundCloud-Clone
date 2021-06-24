import React from 'react'
import './SearchResults.css'
import { useSelector } from 'react-redux'

export default function SearchResults(){
    const searchItems = useSelector((state) => Object.values(state.searchResults))

    return(
            <div className='searchResultspage_container'>
                <div className="searchResults_list_container ">
                    <div className='searchResults_list'>
                        {searchItems?.map((item)=>{
                            return <iframe title={item.snippet.title}className='searchResult' src={`https://www.youtube.com/embed/${item.id.videoId}`}></iframe>
                        })} 
                            
                    
                    </div>
                </div>
            </div>
    )
}
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
                            return <li className='searchResult'> this is a returned result</li>
                        })} 
                            
                    
                    </div>
                </div>
            </div>
    )
}
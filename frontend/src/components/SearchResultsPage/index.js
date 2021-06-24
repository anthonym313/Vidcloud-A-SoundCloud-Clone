import React from 'react'
import './SearchResults.css'
import { useSelector } from 'react-redux'

export default function SearchResults(){
    const searchItems = useSelector(state =>state.searchResults)
    console.log(searchItems)
    return(
            <div className='searchResultspage_container'>
                <div className="searchResults_list_container ">
                    <div className='searchResults_list'>
                        <li className='searchResult'> this is a returned result</li>
                        <li className='searchResult'> this is a returned result</li>
                        <li className='searchResult'> this is a returned result</li>
                        <li className='searchResult'> this is a returned result</li>
                        <li className='searchResult'> this is a returned result</li>
                    </div>
                </div>
            </div>
    )
}
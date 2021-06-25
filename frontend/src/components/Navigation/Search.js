import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Navigation.css'
import { getSearchResults } from '../../store/search';
import {useDispatch} from 'react-redux'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(getSearchResults(searchTerm))
        window.location.href('/search/results');
        history.push('/search/results')
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


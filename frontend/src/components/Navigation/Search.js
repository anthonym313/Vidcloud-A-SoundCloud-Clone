import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Navigation.css'
import { getSearchResults } from '../../store/search';
import {useDispatch} from 'react-redux'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()
    // const submitHelper = async(searchTerm)=>{
        
        //     if(response.ok){
            //         // const req = await fetch('/api/search/results',{
                //         //     method:'POST',
                //         //     headers:{'Content-type':'application/json'},
                //         //     body:JSON.stringify({result}),
                
                //         // })
                //         // const data = await req.json()
                //         // return data;
                //     }
                // }
                
                
    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(getSearchResults(searchTerm))
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


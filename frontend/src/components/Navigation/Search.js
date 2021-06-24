import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Navigation.css'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory()
    const submitHelper = async(searchTerm)=>{
        const response = await fetch(`/api/search/${searchTerm}`)
        const result = await response.json()
        // console.log(result)
        
        if(response.ok){
            const req = await fetch('/api/search/results',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({result}),

            })
            const data = await req.json()
            history.push('/search/results')
            return data;
        }
    }
    
  
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


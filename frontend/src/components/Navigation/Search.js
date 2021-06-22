import React from 'react';


export default SearchBar = ()=>{
    return (
        <>
            <form className='nav-search' action='#'>
                <input type='search' placeholder='Search' autocomplete='off'/> 
                <button className='nav-search__button' type='submit'>Search</>
            </form>
            
        </>
    )
}
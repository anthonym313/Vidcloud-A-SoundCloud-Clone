
const GET_RESULTS = 'search/getResults'
const getResults = (searchResults)=>({
    type: GET_RESULTS,
    searchResults:searchResults,
})

const loadResults = result=>({
    type:'search/LOADRESULTS',
    result
});

export const getSearchResults = (searchTerm) => async dispatch =>{
    const response = await fetch(`/api/search/${searchTerm}`)
    if(response.ok){
        const result = await response.json();
        console.log(result, 'our result from store')
        dispatch(getResults(result.items));
    }
};

//Thunk
export const updateResults = (searchInputData) => async dispatch =>{
    const res = await fetch('/api/search/results',{
                method:'PUT',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({searchInputData}),

            })
    if(res.ok){
        const data = await res.json()
        dispatch(loadResults(data))
        return data
    }
} 


//Reducer
export default function searchReducer(state = {}, action){
    switch(action.type){
        
        case GET_RESULTS: {
            const allResults = {...state};
            action.searchResults.forEach(result => {
                allResults[result.id.videoId]= result
            })
            return allResults;
        };
        default: return state;
    };
}
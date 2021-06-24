
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
        dispatch(getResults(result));
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

const initialState = {searchResults : []}
//Reducer
export default function searchReducer(state = initialState, action){
    switch(action.type){
        
        case GET_RESULTS: {
            const allResults = {};
            action.searchResults.forEach(result => {
                allResults[result.items]= result
            })
            return {
                
                ...allResults,
                ...state
            };
        };
        default: return state;
    };
}
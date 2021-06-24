

const search = (searchResults)=>({
    type: 'search/GET_RESULTS',
    searchResults
})

const loadResults = result=>({
    type:'search/LOADRESULTS',
    result
});

export const getSearchResults = (searchTerm) => async dispatch =>{
    const response = await fetch(`/api/search/${searchTerm}`)
    if(response.ok){
        const result = await response.json();
        dispatch(search(result));
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
        default: return state;

        case 'search/GET_RESULTS': {
            const allResults = {};
            action.searchResults.forEach(result => {
                allResults[result.items]= result
            })
            return {
                
                ...allResults,
                ...state
            };
        };
    };
}
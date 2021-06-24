

const search = (searchResults)=>({
    type: 'search/GET_RESULTS',
    searchResults
})

const loadResults = (result)=({
    type:'search/LOADRESULTS',
    result
});

export const getSearchResults = () => async dispatch =>{
    const response = await fetch(`/api/search/${searchTerm}`)
    if(response.ok){
        const result = await response.json();
        dispatch(search(result));
    }
};

Thunk
export const updateResults = (searchInputData) =>{
    const res = await fetch('/api/search/results',{
                method:'PUT',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({searchInputData}),

            })
    if(res.ok){
        const data = await req.json()
        dispatch(loadResults(data))
        return data
    }
} 

const initialState = {searchResults :[]}
//Reducer
const searchReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'search/GET_RESULTS': {
            const allResults = {}
            action.searchResults.forEach(result => {
                allResults[result.items]= result
            });
            return {
                ...allResults,
                ...state,
                searchResults
            };
        };
    };
}
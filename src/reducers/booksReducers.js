// "use strict"

export function booksReducers(state={
    books:[{
        _id:1,
        title:'ROMA CHAUDHURI',
        description:'btech-cse',
        price:22
    },
    {
        _id:2,
        title:'RITIKA CHATTERJEE',
        description:'btech-ee',
        price:21
}]

},action)
{
    switch(action.type){
        case "GET_BOOKS":
            return state;
        break;
    
        case "POST_BOOKS":
            return {books:[...state.books, ...action.payload]}
        break;
    
        case "DELETE_BOOKS":
            const currentBookToDelete = [...state.books]
            const indexToDelete = currentBookToDelete.findIndex(
                function(book)
                {
                    return book._id === action.payload._id;
                }
            )
            return {books:[...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete+1)]}
            break;
        default: return state
    
    }
}
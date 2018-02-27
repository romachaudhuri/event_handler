// "use strict"
//GET A BOOK
export function getBooks(book)
{
    return{
        type:"ADD_BOOKS",
        payload:book
    }
}
//UPDATE A BOOK
export function postBooks(book)
{
    return{
        type:"UPDATE_BOOKS",
        payload:book
    }
}
//DELETE A BOOK
export function deleteBooks(_id)
{
    return{
        type:"DELETE_BOOKS",
       payload:_id
    }
}

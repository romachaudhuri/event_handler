'use strict'
export function booksReducers(state=[{
	date  :  "0006-05-31",
	description  :  "ROMA CHAUDHURI",
	no_of_people_involved  :  "5",
	time  :  "04:05",
	venue  :  "BANGALORE",
}], action){
    // console.log('22222222->', action);
    switch(action.type){
        case "GET_EVENTS":
            //let books = action.payload.map((record)=>{return Object.assign({},record)});
            return state;
        case "POST_EVENTS":
            //books = state.concat(action.payload);
            //return state;
             return  [...state,...action.payload];
        case "DELETE_EVENT_REJECTED":
            let id = action.payload;
            // console.log('------------------',state);
            return [...state.slice(0,id), ...state.slice(id+1)]
            let books = state.filter((record)=>{
                return ( record._id !== id );
            });
            return books;
        case "UPLOAD_EVENTS":
             id = action.payload._id;
            let  event = action.payload.event;
            //  console.log("==========================",id)
            //  console.log("==========================",event)
            books = state.map((record)=>{return Object.assign({},record)});
            books = books.map((record) =>{
                if(record._id === id){
                    // record.title = action.payload.title,
                    record.date = action.payload.date,
                    record.description = action.payload.description,
                    record.venue = action.payload.venue,
                    record.time = action.payload.time,
                    record.no_of_people_involved = action.payload.no_of_people_involved;
                }
                return record;
            });
            // console.log('check stats',...state, action.payload.event, action.payload.id)
            return [...state.slice(0, action.payload.id), action.payload.event, ...state.slice(action.payload.id+1)]
            return books;
        default:
            // console.log('Error matching perfect action in bookReducers');
		    break;
	}
	return state;
}
"use strict"
//import axios from 'axios';

export function getEventsRejected(){
    return {
    //function{
    //(dispatch){
    //     axios.get("/events")
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------get",response.data);
    //             dispatch({
    //                 type:"GET_EVENTS",
    //                 payload: response.data
    //             })
    //         })
    //         .catch(function(error){
    //             dispatch({
                    type:"GET_EVENTS_REJECTED",
                    payload: "There was an error while getting a events."
    //            })
    //        })
    }
}

export function getEvents(){
    return {
    //function{
    //(dispatch){
    //     axios.get("/events")
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------get",response.data);
    //             dispatch({
    //                 type:"GET_EVENTS",
    //                 payload: response.data
    //             })
    //         })
    //         .catch(function(error){
    //             dispatch({
                    type:"GET_EVENTS",
                    payload: "There was an error while getting a events."
    //            })
    //        })
    }
}

export function postEvents(events){
    console.log('------->', events)
     return {
    //function(dispatch){
    //     axios.post("/events",events)
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------post",response.data);
    //             dispatch({
    //                 type:"POST_EVENTS",
    //                 payload: response.data
    //             })
    //         })
    //         .catch(function(error){
    //             dispatch({
                    type:"POST_EVENTS",
                    payload: events
    //            })
    //       })
    }
}
export function postEventsRejected(){
    return {
    //function{
    //(dispatch){
    //     axios.get("/events")
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------get",response.data);
    //             dispatch({
    //                 type:"GET_EVENTS",
    //                 payload: response.data
    //             })
    //         })
    //         .catch(function(error){
    //             dispatch({
                    type:"POST_EVENTS_REJECTED",
                    payload: "There was an error while getting a events."
    //            })
    //        })
    }
}


export function uploadEvents(id,event){
    // console.log('======>>>Checking id<<<=====', id)
    // console.log('======>>>Check event<<<=====',event);
     return{ 
    //function(dispatch){
    //     axios.put("/events/" + id,event)
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------put",response.data);
    //             dispatch({
    //                 type:"UPLOAD_EVENTS",
    //                 payload: event
    //             })
    //         })
    //         .catch(function(error){
    //            dispatch({
                    type:"UPLOAD_EVENTS",
                    payload:{
                        id:id,
                        event:event
                    }
    //            })
    //        })
    }
}


export function uploadEventsRejetced(id,event){
    // console.log('======>>>Checking id<<<=====', id)
    // console.log('======>>>Check event<<<=====',event);
     return{ 
    //function(dispatch){
    //     axios.put("/events/" + id,event)
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------put",response.data);
    //             dispatch({
    //                 type:"UPLOAD_EVENTS",
    //                 payload: event
    //             })
    //         })
    //         .catch(function(error){
    //            dispatch({
                    type:"UPLOAD_EVENTS_REJECTED",
                    payload:{
                        id:id,
                        event:event
                    }
    //            })
    //        })
    }
}

export function deleteEventsRejected(id){
     return {
    //function(dispatch){
    //     axios.delete("/events/" + id)
    //         .then(function(response){
    //             console.log("------",response);
    //             console.log("------delete",response.data);
    //             dispatch({
    //                 type:"DELETE_EVENT",
    //                 payload: id
    //             })
    //         })
    //         .catch(function(err){
    //             dispatch({
                    type:"DELETE_EVENT_REJECTED",
                    payload:id
    //            })
    //        })
     }
}


export function deleteEvents(id){
    return {
   //function(dispatch){
   //     axios.delete("/events/" + id)
   //         .then(function(response){
   //             console.log("------",response);
   //             console.log("------delete",response.data);
   //             dispatch({
   //                 type:"DELETE_EVENT",
   //                 payload: id
   //             })
   //         })
   //         .catch(function(err){
   //             dispatch({
                   type:"DELETE_EVENT_REJECTED",
                   payload:id
   //            })
   //        })
    }
}


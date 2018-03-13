
"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents,deleteEvents } from '../../actions/booksActions';
import { Button, Glyphicon , Well , Col } from 'react-bootstrap';
import BookEntry from './bookEntry';
import UpdateEntry from './updateEntry';

class BooksList extends React.Component{
    
    constructor(props){
        super(props);
    const x = this.props.events.filter((record)=>{
            return true;
        });
        this.state = {
            editable : false,
            id :""
        }
    }
    componentDidMount(){
        //Calling 1st dispatuploadEventsuploadEventsuploadEventsch function
        this.props.getEvents();
    }
    handleDelete(id){
        console.log("========================",id)
        this.props.deleteEvents(id);

    }
    toggleEditableMode(){
        this.setState(...this.state,{
            editable : false
        })
    }
    updateEntryHandler(event){

    }
    handleEdit(id){
        this.setState(...this.state,{
            editable : true,
            id : id
        })
    }
    view(){
        if (this.state.editable)
            return (<UpdateEntry 
                        events={this.state.events} 
                       // updateEntryHandler={this.updateEntryHandler.bind(this,events)} 
                        id={this.state.id} 
                        toggleEditableMode={this.toggleEditableMode.bind(this)}
                        events={this.props.events}
                    />);
        else
            return (<BookEntry />);
    }
    // transferingPropsDataToState(){
    //     this.setState(...this.state,{
    //         events: this.props.events
    //     })
    // }
    render(){

        const booksCopy = this.props.events.map((x)=>{
            return Object.assign({},x);
        })
        let counter = -1;
        const booksList = booksCopy.map((booksArr)=>{
            counter ++;
           // booksArr._id = counter;
            return(
                <div>
                    <Col xs={6} md={4}>
                    <Well>
                        <Well align="bottom" bsSize="large" style = {{backgroundColor:"DarkCyan"}}><strong><i>Details</i></strong></Well>
                <div class="well well-lg" key={booksArr._id}>
                    {/* <td>{booksArr.title}</td> */}
                    
                    <div class="well well-lg"><strong>FULL NAME : </strong>{booksArr.description}</div>
                    <div class="well well-lg"><strong>DATE OF JOINING :</strong>{booksArr.date}</div>
                    <div class="well well-lg"><strong>TIME OF JOINING : </strong>{booksArr.time}</div>
                    <div class="well well-lg"><strong>LOCATION : </strong>{booksArr.venue}</div>                  
                    <div class="well well-lg"><strong>NO OF HOURS WORKED : </strong>{booksArr.no_of_people_involved}</div>
                    
                    {/* <div>
                        <Button class="well well-lg" onClick={this.handleEdit.bind(this,counter)} type="submit" bsStyle="info" bsSize="xsmall" >
                               EDIT
                            </Button>
                    </div> */}
                    <div>
                        <Button  onClick={this.handleDelete.bind(this,counter)} type="submit" bsStyle="danger pull-right" bsSize="small" >
                            Delete
                        </Button>
                        <br/>
                        
                    </div>
                </div>
                
                </Well>
                </Col>
                </div>
                
            )
        })
        
        const view = this.view();
        return (
            <div>
                {view}
                <Well bsSize="large" style = {{backgroundColor:"darkgray"}}>
               
                
                <div className="table booksTable">
                   {/* <Well>
                            <div class="well" key={BooksList._id}>FULL NAME :</div>
                            <th class="well">DESCRIPTION</div>
                            <div class="well">DATE OF JOINING</div>
                            
                            <div class="well">TIME OF JOINING</div>
                            
                            <div class="well">LOCATION</div>
                                                      
                            <div class="well">NO OF HOURS WORKED</div>
                            <div class="well">EDIT</div>
                            <div class="well">BYPASS</div>
                       </Well>
                    */}
               {booksList}
                    
                </div>
               </Well> 
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        events : state.events
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getEvents : getEvents,
        deleteEvents : deleteEvents
        //otherKey : other action function,
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);
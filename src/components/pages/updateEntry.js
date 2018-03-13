'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents,uploadEvents } from '../../actions/booksActions';
import { Button, Panel} from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import logo from  '../../Images/2.png';

class UpdateEntry extends React.Component{
    constructor(props){
        super(props);
        const id = this.props.id;
        // console.log('====id coming in====', id)
        const filteredEvents = this.props.events.filter((record)=>{
            return (record.id ===id);
        })
        
        this.state = {
            fields: {},
            errors: {}
        }  
        //const  { _id, date, title,description, venue, time, no_of_people_involved } = filteredEvents[0];
        const _id = id;
        const date = this.props.events.date;
        const title = this.props.events.title;
        const description = this.props.events.description;
        const venue = this.props.events.venue;
        const time = this.props.events.time;
        const no_of_people_involved = this.props.events.no_of_people_involved;
        // console.log('========filterevents====',date)
        this.state = {
            id : id,
            title: title,
            date: date,
            description : description,
            venue:venue,
            time:time,
            no_of_people_involved:no_of_people_involved
        };
        // console.log('constructor is called');
        
    }
 
 
      
    componentDidMount(){
        //  this.props.getEvents();
        // console.log('componentDidMount is called');
    }
    handleSubmit(){
        //this.props.updateEntryHandler(this.state)
        // console.log('======check me yrr====',this.state)
        this.props.uploadEvents(this.state.id ,this.state )
        this.props.toggleEditableMode();
    }
    handleDiscard(){
        this.props.toggleEditableMode();
    }
    render(){
        // console.log('render is called');
        // console.log('=====hkjkjh====',this.state)
        let i=0;
        return (
            <div style = {{backgroundColor:"black"}}>
            
                
                <img src={logo} style={{float: 'right', width: '300px'}} />
       <h1 style = {{color:"white"}}>HI  ROMA !</h1>
       <p style = {{color:"white"}}>WELCOME TO MYANATOMY VENTURES !</p>
   
                <center style={{marginTop:'50px', backgroundColor:"lightsteelblue"}}>
                <h2 style={{marginBottom:'50px',  color:"firebrick"}}>EDIT</h2>
                <form className="form form-vertical">
                
                <table striped bordered condensed hover>
                    <tbody>
                        {/* <tr>
                            <td>Title :</td>
                            <td><input type='text' ref='title' value={ this.props.events.title || this.state.title} onChange={({target: {value}})=>{
                                this.setState({
                                    title: value
                                })
                            }} /></td>
                        </tr> */}
                        <tr>
                            <td style = {{color:"darkslategray"}}>FULL NAME :</td>
                            <td><input type='text' ref='description' value={this.state.description || this.props.events.description} onChange={(value) => {this.handleChange( "description", value)} } /></td>
                        </tr>
                        <tr>
                            <td style = {{color:"darkslategray"}}>DATE OF JOINING  :</td>
                            <td><input type='date' ref='date' value={this.state.date || this.props.events[i].date } onChange={({target: {value}})=>{
                                this.setState({
                                    date : value
                                })
                            }}/></td>
                        </tr>
                        <tr>
                            <td style = {{color:"darkslategray"}}>TIME OF JOINING :</td>
                            <td><input type='text' ref='time' placeholder={this.state.time} value={ this.state.time ||  this.props.events[i].time} onChange={({target: {value}})=>{
                                this.setState({
                                    time : value
                                })
                            }}/></td>
                        </tr>
                        <tr>
                            <td style = {{color:"darkslategray"}}>LOCATION :</td>
                            <td><input type='text' ref='venue' value={  this.state.venue || this.props.events[i].venue} onChange={({target: {value}})=>{
                                this.setState({
                                    venue : value
                                })
                            }} /></td>
                        </tr>
                        
                        <tr>
                            <td style = {{color:"darkslategray"}}>NO. OF HOURS WORKED:</td>
                            <td><input type='number' ref='no_of_people_involved' value={ this.state.no_of_people_involved || this.props.events[i].no_of_people_involved } onChange={({target: {value}})=>{
                                this.setState({ 
                                    no_of_people_involved : findDOMNode(this.refs.no_of_people_involved).value
                                })
                            }} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" >
                                <center>
                                <Button onClick={this.handleSubmit.bind(this)} bsStyle="info" >SAVE</Button>
                                <Button onClick={this.handleDiscard.bind(this)} bsStyle="danger" >BYPASS</Button>
                                </center>
                            </td>
                        </tr>
                    </tbody> 
                </table>
               
                </form>
                </center>
            </div>
            
        )
       // i++;
    }
}

// function mapStateToProps(state){
//     return{
//         events : state.events
//     }
// }
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getEvents : getEvents,
        uploadEvents : uploadEvents
        //otherKey : other action function,
    },dispatch)
}

export default connect(null,mapDispatchToProps)(UpdateEntry)
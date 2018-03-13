import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { Button , Media, Image , Modal , ButtonToolbar, Row} from 'react-bootstrap';
import { postEvents } from '../../actions/booksActions';
import ProfileImage from  '../../Images/1.jpeg';
import logo from  '../../Images/2.png';

class BookEntry extends React.Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }
    
    
    handleSubmit(){
        const x = {
            // title: findDOMNode(this.refs.title).value ,
            date: findDOMNode(this.refs.date).value ,
            time: findDOMNode(this.refs.time).value ,
            venue: findDOMNode(this.refs.venue).value ,
            description: findDOMNode(this.refs.description).value ,
            no_of_people_involved:  findDOMNode(this.refs.no_of_people_involved).value 
        }
        const entryStatus = (
            // x.title !== '' &&
            x.date !== '' &&
            x.time !== '' &&
            x.venue !== '' &&
            x.description !== '' &&
            x.no_of_people_involved !== ''
        )
        if(entryStatus)
            this.props.postEvents([{
                // title:x.title,
                date: x.date,
                time: x.time,
                venue: x.venue,
                description: x.description,
                no_of_people_involved:  x.no_of_people_involved
            }])
        else
            window.alert('All fields are manatory.');
            // findDOMNode(this.refs.title).value = "";
            findDOMNode(this.refs.date).value = "";
            findDOMNode(this.refs.time).value = "";
            findDOMNode(this.refs.venue).value = "";
            findDOMNode(this.refs.description).value = "";
            findDOMNode(this.refs.no_of_people_involved).value = "";
    }
    
    render(){
        return (
        <div  bsSize="large" style = {{backgroundColor:"black"}}>
            {/* <Media>
            <Image src={logo} style={{float: 'left', width: '300px'}}  />
            <Media.Body >
        
      <Media.Heading>HI  ROMA !</Media.Heading>
      <p style = {{color:"red"}}>
            
        WELCOME TO MYANATOMY VENTURES !
        </p>
    
    </Media.Body>
  </Media> */}
  <div bsSize="large">
      <img src={logo} style={{float: 'right', width: '300px'}} />
       <h1 style = {{color:"white"}} >HI  ROMA !</h1>
       <p style = {{color:"white"}}>WELCOME TO MYANATOMY VENTURES !</p>
    </div>
    <ButtonToolbar>
        <Button style={{ maxWidth: 400, margin: '0 auto 50px',backgroundColor: 'lightseagreen', color: 'white'}} bsSize="large" bsStyle="primary" onClick={this.handleShow}>
          FILL UP
        </Button>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          backgroundColor= 'lightseagreen'
          bsSize="large"        >
          <Modal.Header><h2><strong> FORM </strong></h2> </Modal.Header>
          <Modal.Body>
            <center style={{marginTop:'10px',marginBottom:'10px'}}><span class="border border-dark"></span>
               
            <table>
                <tbody>
                    <tr>
                        <td style = {{color:"darkslategray"}}>FULL NAME :</td>
                        <td><input type='text' ref='description' /></td>
                    </tr>
                    {/* <tr>
                        <td>Description :</td>
                        <td><input type='text' ref='description' /></td>
                    </tr> */}
                    <tr>
                        <td style = {{color:"darkslategray"}}>DATE OF JOINING :</td>
                        <td><input type='date' ref='date' /></td>
                    </tr>
                    <tr>
                        <td style = {{color:"darkslategray"}}>TIME OF JOINING:</td>
                        <td><input type='time' ref='time' placeholder="hh:mm" /></td>
                    </tr>
                    <tr>
                        <td style = {{color:"darkslategray"}}>DESCRIPTION :</td>
                        <td><input type='text' ref='venue' /></td>
                    </tr>
                    
                    <tr>
                        <td style = {{color:"darkslategray"}}>NO. OF HOURS:</td>
                        <td><input type='number' min='0' ref='no_of_people_involved' /></td>
                    </tr>
                    <tr>
                        <td colSpan="4" >
                            <center >
                            <style type="text/css" className="btn-custom">
                             </style>
                                {/* <button onClick={this.handleSubmit.bind(this)} >Add</button> */}
                                <Button onClick={this.handleSubmit.bind(this)} style={{backgroundColor: 'darkslategray', color: 'white'}} bsStyle="custom" bsSize="large" block active>ADD </Button>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
            </center >
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
        </div>)
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postEvents : postEvents
    },dispatch);
}
export default connect(null,mapDispatchToProps)(BookEntry);
